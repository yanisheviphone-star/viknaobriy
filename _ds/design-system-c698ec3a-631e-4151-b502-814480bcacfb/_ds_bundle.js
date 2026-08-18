/* @ds-bundle: {"format":4,"namespace":"DesignSystem_c698ec","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"CertificationBadge","sourcePath":"components/certifications/CertificationBadge.jsx"},{"name":"DealerLocator","sourcePath":"components/dealer/DealerLocator.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"QuoteForm","sourcePath":"components/forms/QuoteForm.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"ProductSpecCard","sourcePath":"components/product/ProductSpecCard.jsx"},{"name":"SeriesComparisonTable","sourcePath":"components/tables/SeriesComparisonTable.jsx"},{"name":"SpecTable","sourcePath":"components/tables/SpecTable.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"6c5ac2dd1145","components/buttons/Button.jsx":"6352854c0045","components/cards/Card.jsx":"257b876bce82","components/certifications/CertificationBadge.jsx":"2e5eb1344c0c","components/dealer/DealerLocator.jsx":"b05e2be36357","components/forms/Input.jsx":"3dc549696434","components/forms/QuoteForm.jsx":"4a4c2921e302","components/icons/Icon.jsx":"6688db6c2a07","components/navigation/Footer.jsx":"4000681f8db5","components/navigation/NavBar.jsx":"8bc5fa63fed2","components/product/ProductSpecCard.jsx":"bb5b8b272b9a","components/tables/SeriesComparisonTable.jsx":"fe1cb15b9fc6","components/tables/SpecTable.jsx":"5d68cee58c79","ui_kits/marketing-site/Catalog.jsx":"14b79981b5a7","ui_kits/marketing-site/DealerPage.jsx":"b28b1b6a79d1","ui_kits/marketing-site/Home.jsx":"5d12c51d69e2","ui_kits/marketing-site/ProductDetail.jsx":"d275aa00d55f","ui_kits/marketing-site/QuotePage.jsx":"a38091797314"},"inlinedExternals":[],"unexposedExports":[{"name":"iconPaths","sourcePath":"components/icons/Icon.jsx"}]} */

(() => {

const __ds_ns = (window.DesignSystem_c698ec = window.DesignSystem_c698ec || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/Card.jsx
try { (() => {
const paddings = {
  sm: 'var(--space-4)',
  md: 'var(--space-6)',
  lg: 'var(--space-7)'
};
const skins = {
  default: {
    background: 'var(--color-plate)',
    border: 'none'
  },
  outline: {
    background: 'var(--white)',
    border: 'var(--border-width) solid var(--color-border)'
  },
  subtle: {
    background: 'var(--color-plate-strong)',
    border: 'none'
  },
  ink: {
    background: 'var(--color-ink)',
    border: 'none',
    color: 'var(--white)'
  }
};
function Card({
  children,
  padding = 'md',
  variant = 'default',
  style
}) {
  return React.createElement('div', {
    style: {
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--elevation-0)',
      padding: paddings[padding],
      ...(skins[variant] || skins.default),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
/** Filled glyph set — solid shapes, no strokes, knockouts via fill-rule evenodd. 24px grid. */
const iconPaths = {
  'arrow-right': 'M3 10.8h13.1v2.4H3zM13 5l7.5 7-7.5 7z',
  'arrow-left': 'M21 10.8H7.9v2.4H21zM11 5L3.5 12 11 19z',
  'arrow-up-right': 'M7.4 5h11.6v11.6h-2.5V9.2l-9.6 9.6-1.8-1.8 9.6-9.6H7.4z',
  'chevron-down': 'M12 16.6L3.8 8.4l1.8-1.8L12 13l6.4-6.4 1.8 1.8z',
  'chevron-down-thin': 'M12 16.3L3.9 8.2l1.4-1.4L12 13.5l6.7-6.7 1.4 1.4z',
  'chevron-up': 'M12 7.4l8.2 8.2-1.8 1.8L12 11l-6.4 6.4-1.8-1.8z',
  'chevron-right': 'M7.6 20.2l-1.8-1.8L12.2 12 5.8 5.6l1.8-1.8L15.8 12z',
  'chevron-left': 'M16.4 3.8l1.8 1.8L11.8 12l6.4 6.4-1.8 1.8L8.2 12z',
  check: 'M9.6 18.3L3.3 12l1.9-1.9 4.4 4.4L18.8 5l1.9 1.9z',
  plus: 'M10.8 3h2.4v7.8H21v2.4h-7.8V21h-2.4v-7.8H3v-2.4h7.8z',
  minus: 'M3 10.8h18v2.4H3z',
  x: 'M18.3 4L20 5.7l-6.3 6.3L20 18.3 18.3 20 12 13.7 5.7 20 4 18.3 10.3 12 4 5.7 5.7 4 12 10.3z',
  'check-circle': 'M12 2a10 10 0 100 20 10 10 0 000-20zm5 7.6l-6.1 6.1L7 11.8l1.7-1.7 2.2 2.2 4.4-4.4z',
  'shield-check': 'M12 2l8 3v6.2C20 16.4 16.6 20.6 12 22 7.4 20.6 4 16.4 4 11.2V5zm4.4 7.3L15 7.9l-3.8 3.8-1.8-1.8-1.4 1.4 3.2 3.2z',
  'map-pin': 'M12 2a7.2 7.2 0 00-7.2 7.2C4.8 14.4 12 22 12 22s7.2-7.6 7.2-12.8A7.2 7.2 0 0012 2zm0 9.8a2.6 2.6 0 110-5.2 2.6 2.6 0 010 5.2z',
  phone: 'M6.7 2.4c.9 0 1.7.6 1.9 1.5l.8 3.2a2 2 0 01-.5 1.9l-1.4 1.4a12.6 12.6 0 006.1 6.1l1.4-1.4a2 2 0 011.9-.5l3.2.8c.9.2 1.5 1 1.5 1.9v2.6c0 1.2-1 2.1-2.1 2C10.3 21.4 2.6 13.7 2.1 4.5 2 3.4 2.9 2.4 4.1 2.4z',
  mail: 'M2 5.6C2 4.7 2.7 4 3.6 4h16.8c.9 0 1.6.7 1.6 1.6v.5L12 12.9 2 6.1zM2 8.7l9.4 6.4c.4.3.9.3 1.2 0L22 8.7v9.7c0 .9-.7 1.6-1.6 1.6H3.6C2.7 20 2 19.3 2 18.4z',
  download: 'M10.8 3h2.4v8.7l3.3-3.3 1.7 1.7-6.2 6.2-6.2-6.2 1.7-1.7 3.3 3.3zM3.5 18.1h17V20.5h-17z',
  search: 'M10.6 2a8.6 8.6 0 016.8 13.8l4.4 4.4-1.9 1.9-4.4-4.4A8.6 8.6 0 1110.6 2zm0 2.6a6 6 0 100 12 6 6 0 000-12z',
  menu: 'M3 5.4h18v2.4H3zM3 10.8h18v2.4H3zM3 16.2h18v2.4H3z',
  'file-text': 'M6 2h8.2L20 7.8V20a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm7 2.6V8h3.6zM7.4 11h9.2v2H7.4zm0 4h9.2v2H7.4z',
  'external-link': 'M13.6 3H21v7.4h-2.4V7.1l-7.7 7.7-1.7-1.7L16.9 5.4h-3.3zM3.6 6h6.6v2.4H6v9.6h9.6v-4.2H18V20.4H3.6z',
  clock: 'M12 2a10 10 0 100 20 10 10 0 000-20zm1.2 4.8v5.7l4 2.4-1.2 2-4.8-2.9V6.8z',
  award: 'M12 2.2a6.7 6.7 0 100 13.4 6.7 6.7 0 000-13.4zm0 3a3.7 3.7 0 110 7.4 3.7 3.7 0 010-7.4zM8.8 16.6l-1.9 5.6 5.1-2.5 5.1 2.5-1.9-5.6z',
  thermometer: 'M12 2a3.1 3.1 0 013.1 3.1v7.6a5.6 5.6 0 11-6.2 0V5.1A3.1 3.1 0 0112 2zm0 2.4a.7.7 0 00-.7.7v9l-.7.4a3.2 3.2 0 102.8 0l-.7-.4v-9a.7.7 0 00-.7-.7z',
  ruler: 'M2 8.4h20v7.2H2zm3 2.2v2.8h1.8v-2.8zm4.2 0v2.8H11v-2.8zm4.2 0v2.8h1.8v-2.8zm4.2 0v2.8H19v-2.8z',
  truck: 'M2 5h11.4v11H2zm12.8 2.6h3.4L22 11.6V16h-7.2zM6.4 15.4a2.6 2.6 0 100 5.2 2.6 2.6 0 000-5.2zm11.6 0a2.6 2.6 0 100 5.2 2.6 2.6 0 000-5.2z',
  factory: 'M2 21V8.6l5.3 3.2V8.6l5.3 3.2V8.6l5.3 3.2V3H22v18zm4-6v3.6h3V15zm6 0v3.6h3V15z',
  layers: 'M12 2l9.4 5.2L12 12.4 2.6 7.2zm7 8.3l2.4 1.3L12 16.9 2.6 11.6 5 10.3l7 3.9zm0 4.6l2.4 1.4L12 21.5l-9.4-5.2 2.4-1.4 7 3.9z',
  window: 'M3 3h18v18H3zm2.4 2.4v5.4h5.2V5.4zm7.6 0v5.4h5.6V5.4zM5.4 13.2v5.4h5.2v-5.4zm7.6 0v5.4h5.6v-5.4z',
  door: 'M4.6 2h14.8v20H4.6zm2.4 2.4v15.2h10V4.4zm7.4 6.4h1.8v2.6H14.4z',
  'sliding-door': 'M2 3h9.2v18H2zm2.4 2.4v13.2h4.4V5.4zM7 11h1.6v2.4H7zM12.8 3H22v18h-9.2zm2.4 2.4v13.2h4.4V5.4zM17.8 11h1.6v2.4h-1.6z',
  facade: 'M3 3h18v18H3zm2 2v3.8h3.6V5zm5.2 0v3.8h3.6V5zm5.2 0v3.8H19V5zM5 10.2V14h3.6v-3.8zm5.2 0V14h3.6v-3.8zm5.2 0V14H19v-3.8zM5 15.4V19h3.6v-3.6zm5.2 0V19h3.6v-3.6zm5.2 0V19H19v-3.6z',
  'fire-door': 'M3.4 2h10.2v20H3.4zm2.4 2.4v15.2h5.4V4.4zM9 11h1.6v2.4H9zM17.6 9.4c.4 2 2.6 3 2.6 5.4a3.2 3.2 0 11-6.4 0c0-1.7 1-2.7 1.7-3.4.1.9.5 1.5 1 1.7.1-1.6.6-2.8 1.1-3.7z',
  partition: 'M2 4h20v16H2zm2.4 2.4v11.2h6.4V6.4zm8.8 0v11.2h6.4V6.4zM9 11h1.4v2.4H9zm4.9 0h1.4v2.4h-1.4z',
  sunshade: 'M3 3.6h18V6H3zM3 8.4h18v2.4H3zM3 13.2h18v2.4H3zM3 18h18v2.4H3z',
  building: 'M4 2h11v20H4zm13 7h4v13h-4zM6.6 5.2v2.4H9V5.2zm5 0v2.4H14V5.2zM6.6 10v2.4H9V10zm5 0v2.4H14V10zM6.6 14.8v2.4H9v-2.4zm5 0v2.4H14v-2.4z',
  info: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 8.4h2.4v7.2h-2.4zm0-4.2h2.4v2.4h-2.4z',
  'alert-triangle': 'M12 2.4L22.4 20.6H1.6zm-1.2 6v5.4h2.4V8.4zm0 7.2v2.4h2.4v-2.4z'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style
}) {
  const d = iconPaths[name];
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    focusable: 'false',
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    }
  }, React.createElement('path', {
    d: d || 'M4 4h16v16H4z',
    fill: color,
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  }));
}
Object.assign(__ds_scope, { iconPaths, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/badges/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    background: 'var(--color-plate)',
    color: 'var(--color-text-secondary)'
  },
  strong: {
    background: 'var(--color-plate-strong)',
    color: 'var(--color-ink)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  icon
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-weight)',
      letterSpacing: 'var(--type-caption-ls)',
      textTransform: 'uppercase',
      padding: '5px 10px',
      borderRadius: 'var(--radius-xs)',
      ...tones[tone]
    }
  }, icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '9px 18px',
    fontSize: 14
  },
  md: {
    padding: '13px 26px',
    fontSize: 'var(--type-button-size)'
  },
  lg: {
    padding: '16px 34px',
    fontSize: 16
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const on = hover && !disabled;
  let skin;
  if (disabled) {
    skin = {
      background: 'var(--gray-100)',
      color: 'var(--gray-400)',
      borderColor: 'var(--gray-200)'
    };
  } else if (variant === 'secondary') {
    skin = on ? {
      background: 'var(--color-ink)',
      color: 'var(--white)',
      borderColor: 'var(--color-ink)'
    } : {
      background: 'transparent',
      color: 'var(--color-ink)',
      borderColor: 'var(--color-ink)'
    };
  } else if (variant === 'outline') {
    skin = on ? {
      background: 'var(--color-primary)',
      color: 'var(--white)',
      borderColor: 'var(--color-primary)'
    } : {
      background: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-primary)'
    };
  } else if (variant === 'ghost') {
    skin = {
      background: 'transparent',
      color: on ? 'var(--color-primary)' : 'var(--color-ink)',
      borderColor: 'transparent'
    };
  } else {
    skin = on ? {
      background: 'var(--color-primary-700)',
      color: 'var(--white)',
      borderColor: 'var(--color-primary-700)'
    } : {
      background: 'var(--color-primary)',
      color: 'var(--white)',
      borderColor: 'var(--color-primary)'
    };
  }
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--type-button-weight)',
      letterSpacing: 'var(--type-button-ls)',
      lineHeight: 1.15,
      borderRadius: 'var(--radius-xs)',
      borderStyle: 'solid',
      borderWidth: 'var(--border-width-strong)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background-color .12s ease, color .12s ease, border-color .12s ease',
      ...sizes[size],
      ...skin,
      ...style
    }
  }, icon && iconPosition === 'left' ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  }) : null, children, icon && iconPosition === 'right' ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/certifications/CertificationBadge.jsx
try { (() => {
function CertificationBadge({
  icon,
  label,
  caption
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width: 150
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26,
    color: 'var(--color-primary)',
    style: {
      marginLeft: -2
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '-0.1px'
    }
  }, label), caption ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--color-text-tertiary)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { CertificationBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/certifications/CertificationBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const fieldStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 16,
  padding: '12px 14px',
  border: 'var(--border-width) solid var(--color-border-strong)',
  borderRadius: 'var(--radius-xs)',
  color: 'var(--color-text)',
  background: 'var(--white)',
  width: '100%'
};
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  required,
  error
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label ? React.createElement('span', {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--color-danger)'
    }
  }, ' *') : null) : null, React.createElement('input', {
    type,
    placeholder,
    value,
    required,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      ...fieldStyle,
      borderColor: error ? 'var(--color-danger)' : 'var(--color-border-strong)'
    }
  }), error ? React.createElement('span', {
    style: {
      fontSize: 13,
      color: 'var(--color-danger)'
    }
  }, error) : null);
}
function Select({
  label,
  options,
  value,
  onChange,
  required
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label ? React.createElement('span', {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--color-danger)'
    }
  }, ' *') : null) : null, React.createElement('span', {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, React.createElement('select', {
    value,
    required,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      ...fieldStyle,
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      paddingRight: 52,
      cursor: 'pointer'
    }
  }, options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o))), React.createElement(__ds_scope.Icon, {
    name: 'chevron-down-thin',
    size: 18,
    color: 'var(--color-ink)',
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Input, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/dealer/DealerLocator.jsx
try { (() => {
function DealerLocator({
  dealers
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      marginBottom: 16
    }
  }, React.createElement(__ds_scope.Input, {
    placeholder: 'Enter city or postal code',
    label: 'Find a dealer near you'
  })), React.createElement('div', {
    style: {
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, dealers.map((d, i) => React.createElement('div', {
    key: d.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 20px',
      borderTop: i === 0 ? 'none' : '1px solid var(--color-border)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'map-pin',
    color: 'var(--color-primary)'
  }), React.createElement('div', null, React.createElement('div', {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--color-text)'
    }
  }, d.name), React.createElement('div', {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)'
    }
  }, d.address + ', ' + d.city), React.createElement('div', {
    style: {
      fontSize: 14,
      color: 'var(--color-text-tertiary)',
      marginTop: 2
    }
  }, d.phone))), React.createElement(__ds_scope.Badge, {
    tone: 'neutral'
  }, d.type)))));
}
Object.assign(__ds_scope, { DealerLocator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dealer/DealerLocator.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuoteForm.jsx
try { (() => {
function QuoteForm({
  productOptions = ['Windows', 'Doors', 'Garage doors', 'Facade systems', 'Balcony structures'],
  onSubmit
}) {
  const [data, setData] = React.useState({
    name: '',
    company: '',
    phone: '',
    product: productOptions[0],
    details: ''
  });
  const set = k => v => setData(s => ({
    ...s,
    [k]: v
  }));
  return React.createElement(__ds_scope.Card, {
    padding: 'lg',
    style: {
      maxWidth: 480
    }
  }, React.createElement('h3', {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--type-heading-md-size)'
    }
  }, 'Request a quote'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement(__ds_scope.Input, {
    label: 'Full name',
    required: true,
    value: data.name,
    onChange: set('name')
  }), React.createElement(__ds_scope.Input, {
    label: 'Company',
    value: data.company,
    onChange: set('company')
  }), React.createElement(__ds_scope.Input, {
    label: 'Phone',
    type: 'tel',
    required: true,
    value: data.phone,
    onChange: set('phone')
  }), React.createElement(__ds_scope.Select, {
    label: 'Product category',
    options: productOptions,
    value: data.product,
    onChange: set('product')
  }), React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement('span', {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, 'Project details'), React.createElement('textarea', {
    rows: 3,
    value: data.details,
    onChange: e => set('details')(e.target.value),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      padding: '10px 12px',
      border: '1px solid var(--color-border-strong)',
      borderRadius: 'var(--radius-sm)',
      resize: 'vertical'
    }
  })), React.createElement(__ds_scope.Button, {
    variant: 'primary',
    style: {
      marginTop: 4
    },
    onClick: () => onSubmit && onSubmit(data)
  }, 'Submit request')));
}
Object.assign(__ds_scope, { QuoteForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuoteForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const defaultColumns = [{
  title: 'Products',
  links: ['Windows', 'Doors', 'Garage doors', 'Facade systems', 'Balcony structures']
}, {
  title: 'Resources',
  links: ['Technical datasheets', 'Certification', 'CAD downloads']
}, {
  title: 'Company',
  links: ['About', 'Manufacturing', 'Careers']
}, {
  title: 'Support',
  links: ['Find a dealer', 'Request a quote', 'Contact']
}];
function Footer({
  columns = defaultColumns,
  brand = 'ЕКІПАЖ'
}) {
  return React.createElement('footer', {
    style: {
      background: 'var(--color-bg-subtle)',
      borderTop: '1px solid var(--color-border)',
      padding: '48px 32px',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 64,
      marginBottom: 40
    }
  }, React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--color-text)',
      minWidth: 160
    }
  }, brand), columns.map(col => React.createElement('div', {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--color-text-tertiary)',
      marginBottom: 4
    }
  }, col.title), col.links.map(l => React.createElement('a', {
    key: l,
    href: '#',
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)'
    }
  }, l))))), React.createElement('div', {
    style: {
      borderTop: '1px solid var(--color-border)',
      paddingTop: 16,
      fontSize: 13,
      color: 'var(--color-text-tertiary)'
    }
  }, '© 2026 ' + brand + '. All rights reserved.'));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  items = ['Products', 'Technical specs', 'Find a dealer', 'Certification', 'Contact'],
  brand = 'ЕКІПАЖ'
}) {
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      background: 'var(--white)',
      borderBottom: '1px solid var(--color-border)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '0.02em',
      color: 'var(--color-text)'
    }
  }, brand), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 28
    }
  }, items.map(i => React.createElement('a', {
    key: i,
    href: '#',
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--color-text-secondary)'
    }
  }, i))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12
    }
  }, React.createElement(__ds_scope.Button, {
    variant: 'secondary',
    size: 'sm'
  }, 'Find a dealer'), React.createElement(__ds_scope.Button, {
    variant: 'primary',
    size: 'sm'
  }, 'Request a quote')));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/tables/SeriesComparisonTable.jsx
try { (() => {
function SeriesComparisonTable({
  columns,
  series
}) {
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      border: '1px solid var(--color-border)'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map((c, i) => React.createElement('th', {
    key: c.key,
    style: {
      textAlign: i === 0 ? 'left' : 'center',
      padding: '12px 16px',
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--color-text-secondary)',
      background: 'var(--color-bg-subtle)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, c.label)))), React.createElement('tbody', null, series.map((row, ri) => React.createElement('tr', {
    key: ri
  }, columns.map((c, ci) => React.createElement('td', {
    key: c.key,
    style: {
      padding: '12px 16px',
      textAlign: ci === 0 ? 'left' : 'center',
      fontWeight: ci === 0 ? 600 : 400,
      fontFamily: ci === 0 ? 'var(--font-sans)' : 'var(--font-mono)',
      fontSize: ci === 0 ? 16 : 14,
      borderTop: '1px solid var(--color-border)'
    }
  }, row[c.key]))))));
}
Object.assign(__ds_scope, { SeriesComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tables/SeriesComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/tables/SpecTable.jsx
try { (() => {
function SpecTable({
  rows
}) {
  return React.createElement('table', {
    style: {
      width: '100%',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-mono-sm-size)'
    }
  }, React.createElement('tbody', null, rows.map((r, i) => React.createElement('tr', {
    key: i,
    style: {
      borderTop: i === 0 ? 'none' : '1px solid var(--color-border)'
    }
  }, React.createElement('td', {
    style: {
      padding: '10px 0',
      color: 'var(--color-text-secondary)',
      width: '55%'
    }
  }, r.label), React.createElement('td', {
    style: {
      padding: '10px 0',
      color: 'var(--color-text)',
      fontWeight: 600,
      textAlign: 'right'
    }
  }, r.value)))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tables/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductSpecCard.jsx
try { (() => {
function ProductSpecCard({
  seriesName,
  badge,
  crossSectionLabel = 'Profile cross-section',
  specs
}) {
  return React.createElement(__ds_scope.Card, {
    padding: 'lg'
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 16
    }
  }, React.createElement('h3', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      letterSpacing: '-0.1px',
      fontSize: 'var(--type-heading-md-size)',
      color: 'var(--color-text)'
    }
  }, seriesName), badge ? React.createElement(__ds_scope.Badge, {
    tone: 'neutral'
  }, badge) : null), React.createElement('div', {
    style: {
      height: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      background: 'var(--color-plate)',
      border: '1px dashed var(--color-border-strong)',
      color: 'var(--color-text-tertiary)',
      fontSize: 13
    }
  }, crossSectionLabel), React.createElement(__ds_scope.SpecTable, {
    rows: specs
  }));
}
Object.assign(__ds_scope, { ProductSpecCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductSpecCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Catalog.jsx
try { (() => {
const {
  Badge,
  ProductSpecCard,
  SeriesComparisonTable
} = window.DesignSystem_c698ec;
const seriesData = [{
  name: 'PA-58',
  badge: 'Windows',
  specs: [{
    label: 'Uf-value',
    value: '1.4 W/m²K'
  }, {
    label: 'Chambers',
    value: '3'
  }, {
    label: 'Depth',
    value: '58 mm'
  }]
}, {
  name: 'PA-70 Thermo',
  badge: 'Windows / Doors',
  specs: [{
    label: 'Uf-value',
    value: '0.94 W/m²K'
  }, {
    label: 'Chambers',
    value: '6'
  }, {
    label: 'Depth',
    value: '70 mm'
  }]
}, {
  name: 'PA-88 Thermo+',
  badge: 'Facade',
  specs: [{
    label: 'Uf-value',
    value: '0.78 W/m²K'
  }, {
    label: 'Chambers',
    value: '7'
  }, {
    label: 'Depth',
    value: '88 mm'
  }]
}, {
  name: 'GD-42',
  badge: 'Garage doors',
  specs: [{
    label: 'U-value',
    value: '1.0 W/m²K'
  }, {
    label: 'Panel depth',
    value: '42 mm'
  }, {
    label: 'Max width',
    value: '5.5 m'
  }]
}];
function Catalog({
  onSelect
}) {
  return React.createElement('div', {
    style: {
      padding: '48px 64px',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('h1', {
    style: {
      fontSize: 'var(--type-display-md-size)',
      fontWeight: 700,
      letterSpacing: '-0.3px',
      marginBottom: 8
    }
  }, 'Product catalog'), React.createElement('p', {
    style: {
      color: 'var(--color-text-secondary)',
      marginBottom: 24
    }
  }, 'Full profile range for windows, doors, garage doors, facade and balcony structures.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 32
    }
  }, ['All', 'Windows', 'Doors', 'Garage doors', 'Facade', 'Balcony'].map(f => React.createElement(Badge, {
    key: f,
    tone: f === 'All' ? 'primary' : 'neutral'
  }, f))), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      marginBottom: 56
    }
  }, seriesData.map(s => React.createElement('div', {
    key: s.name,
    onClick: () => onSelect(s.name),
    style: {
      cursor: 'pointer'
    }
  }, React.createElement(ProductSpecCard, s)))), React.createElement('h2', {
    style: {
      fontSize: 'var(--type-heading-xl-size)',
      fontWeight: 700,
      letterSpacing: '-0.3px',
      marginBottom: 20
    }
  }, 'Compare series'), React.createElement(SeriesComparisonTable, {
    columns: [{
      key: 'name',
      label: 'Series'
    }, {
      key: 'chambers',
      label: 'Chambers'
    }, {
      key: 'uf',
      label: 'Uf-value'
    }, {
      key: 'depth',
      label: 'Depth'
    }],
    series: [{
      name: 'PA-58',
      chambers: '3',
      uf: '1.4 W/m²K',
      depth: '58 mm'
    }, {
      name: 'PA-70 Thermo',
      chambers: '6',
      uf: '0.94 W/m²K',
      depth: '70 mm'
    }, {
      name: 'PA-88 Thermo+',
      chambers: '7',
      uf: '0.78 W/m²K',
      depth: '88 mm'
    }]
  }));
}
window.Catalog = Catalog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/DealerPage.jsx
try { (() => {
const {
  DealerLocator
} = window.DesignSystem_c698ec;
const dealers = [{
  name: 'Vikna Plus',
  city: 'Lviv',
  address: '12 Sadova St',
  phone: '+380 32 123 4567',
  type: 'Dealer'
}, {
  name: 'AlyuMontage',
  city: 'Kyiv',
  address: '45 Peremohy Ave',
  phone: '+380 44 987 6543',
  type: 'Installer'
}, {
  name: 'ProfilBud Distribution',
  city: 'Odesa',
  address: '3 Prymorska St',
  phone: '+380 48 222 1100',
  type: 'Distributor'
}, {
  name: 'Fasad Group',
  city: 'Dnipro',
  address: '78 Naberezhna St',
  phone: '+380 56 411 2233',
  type: 'Installer'
}];
function DealerPage() {
  return React.createElement('div', {
    style: {
      padding: '48px 64px',
      maxWidth: 760,
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('h1', {
    style: {
      fontSize: 'var(--type-display-md-size)',
      fontWeight: 700,
      letterSpacing: '-0.3px',
      marginBottom: 8
    }
  }, 'Find a dealer'), React.createElement('p', {
    style: {
      color: 'var(--color-text-secondary)',
      marginBottom: 28
    }
  }, 'Locate a certified dealer, installer or distributor near you.'), React.createElement(DealerLocator, {
    dealers
  }));
}
window.DealerPage = DealerPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/DealerPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Home.jsx
try { (() => {
const {
  Button,
  Badge,
  CertificationBadge,
  ProductSpecCard
} = window.DesignSystem_c698ec;
function Home({
  onNavigate
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('section', {
    style: {
      padding: '80px 64px',
      display: 'flex',
      gap: 64,
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement(Badge, {
    tone: 'primary'
  }, 'Manufactured in Ukraine'), React.createElement('h1', {
    style: {
      fontSize: 'var(--type-display-lg-size)',
      fontWeight: 'var(--type-display-lg-weight)',
      lineHeight: 'var(--type-display-lg-lh)',
      margin: '20px 0 16px',
      color: 'var(--color-text)'
    }
  }, 'Aluminum profile systems engineered for precision.'), React.createElement('p', {
    style: {
      fontSize: 'var(--type-body-lg-size)',
      color: 'var(--color-text-secondary)',
      maxWidth: 480,
      marginBottom: 28
    }
  }, 'Windows, doors, garage doors, facade and balcony structures — built to certified thermal and structural standards for dealers, installers and architects.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12
    }
  }, React.createElement(Button, {
    variant: 'primary',
    size: 'lg',
    onClick: () => onNavigate('catalog')
  }, 'Browse product catalog'), React.createElement(Button, {
    variant: 'secondary',
    size: 'lg',
    onClick: () => onNavigate('quote')
  }, 'Request a quote'))), React.createElement('div', {
    style: {
      flex: 1,
      height: 360,
      background: 'var(--color-plate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-text-tertiary)',
      fontSize: 14
    }
  }, 'Factory floor / installation photo')), React.createElement('section', {
    style: {
      padding: '48px 64px',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
      background: 'var(--color-bg-subtle)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      color: 'var(--color-text-tertiary)',
      marginBottom: 24
    }
  }, 'Certified to European standards'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 40
    }
  }, React.createElement(CertificationBadge, {
    icon: 'shield-check',
    label: 'CE Certified',
    caption: 'EN 14351-1'
  }), React.createElement(CertificationBadge, {
    icon: 'check-circle',
    label: 'ISO 9001',
    caption: 'Quality management'
  }), React.createElement(CertificationBadge, {
    icon: 'award',
    label: 'ISO 14001',
    caption: 'Environmental'
  }), React.createElement(CertificationBadge, {
    icon: 'thermometer',
    label: 'RAL GZ 695',
    caption: 'Thermal performance'
  }))), React.createElement('section', {
    style: {
      padding: '64px'
    }
  }, React.createElement('h2', {
    style: {
      fontSize: 'var(--type-heading-xl-size)',
      fontWeight: 700,
      letterSpacing: '-0.3px',
      marginBottom: 24
    }
  }, 'Featured profile series'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 24
    }
  }, React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement(ProductSpecCard, {
    seriesName: 'PA-58',
    badge: 'Standard',
    specs: [{
      label: 'Uf-value',
      value: '1.4 W/m²K'
    }, {
      label: 'Chambers',
      value: '3'
    }, {
      label: 'Depth',
      value: '58 mm'
    }]
  })), React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement(ProductSpecCard, {
    seriesName: 'PA-70 Thermo',
    badge: 'Thermal break',
    specs: [{
      label: 'Uf-value',
      value: '0.94 W/m²K'
    }, {
      label: 'Chambers',
      value: '6'
    }, {
      label: 'Depth',
      value: '70 mm'
    }]
  })), React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement(ProductSpecCard, {
    seriesName: 'PA-88 Thermo+',
    badge: 'Premium',
    specs: [{
      label: 'Uf-value',
      value: '0.78 W/m²K'
    }, {
      label: 'Chambers',
      value: '7'
    }, {
      label: 'Depth',
      value: '88 mm'
    }]
  })))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProductDetail.jsx
try { (() => {
const {
  Button,
  Badge,
  SpecTable
} = window.DesignSystem_c698ec;
const detail = {
  'PA-58': {
    specs: [{
      label: 'Uf-value',
      value: '1.4 W/m²K'
    }, {
      label: 'Chambers',
      value: '3'
    }, {
      label: 'Depth',
      value: '58 mm'
    }, {
      label: 'Max sash weight',
      value: '100 kg'
    }, {
      label: 'Max glazing',
      value: '40 mm'
    }]
  },
  'PA-70 Thermo': {
    specs: [{
      label: 'Uf-value',
      value: '0.94 W/m²K'
    }, {
      label: 'Chambers',
      value: '6'
    }, {
      label: 'Depth',
      value: '70 mm'
    }, {
      label: 'Max sash weight',
      value: '130 kg'
    }, {
      label: 'Max glazing',
      value: '52 mm'
    }]
  },
  'PA-88 Thermo+': {
    specs: [{
      label: 'Uf-value',
      value: '0.78 W/m²K'
    }, {
      label: 'Chambers',
      value: '7'
    }, {
      label: 'Depth',
      value: '88 mm'
    }, {
      label: 'Max sash weight',
      value: '150 kg'
    }, {
      label: 'Max glazing',
      value: '58 mm'
    }]
  },
  'GD-42': {
    specs: [{
      label: 'U-value',
      value: '1.0 W/m²K'
    }, {
      label: 'Panel depth',
      value: '42 mm'
    }, {
      label: 'Max width',
      value: '5.5 m'
    }, {
      label: 'Max height',
      value: '3.0 m'
    }]
  }
};
function ProductDetail({
  series,
  onRequestQuote
}) {
  const d = detail[series] || detail['PA-70 Thermo'];
  return React.createElement('div', {
    style: {
      padding: '48px 64px',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 48
    }
  }, React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      height: 320,
      background: 'var(--color-plate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-text-tertiary)',
      fontSize: 14,
      marginBottom: 16
    }
  }, 'Profile cross-section render'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12
    }
  }, [1, 2, 3].map(i => React.createElement('div', {
    key: i,
    style: {
      width: 88,
      height: 72,
      background: 'var(--color-plate-strong)'
    }
  })))), React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement(Badge, {
    tone: 'primary'
  }, series), React.createElement('h1', {
    style: {
      fontSize: 'var(--type-display-md-size)',
      fontWeight: 600,
      margin: '16px 0 12px'
    }
  }, series + ' profile system'), React.createElement('p', {
    style: {
      color: 'var(--color-text-secondary)',
      marginBottom: 24
    }
  }, 'Multi-chamber aluminum profile with thermal break, engineered for certified thermal performance and structural rigidity.'), React.createElement(SpecTable, {
    rows: d.specs
  }), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28
    }
  }, React.createElement(Button, {
    variant: 'primary',
    icon: 'download'
  }, 'Download datasheet'), React.createElement(Button, {
    variant: 'secondary',
    onClick: onRequestQuote
  }, 'Request a quote')))));
}
window.ProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/QuotePage.jsx
try { (() => {
const {
  QuoteForm
} = window.DesignSystem_c698ec;
function QuotePage() {
  const [sent, setSent] = React.useState(false);
  return React.createElement('div', {
    style: {
      padding: '48px 64px',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, sent ? React.createElement('div', {
    style: {
      textAlign: 'center',
      paddingTop: 60
    }
  }, React.createElement('h2', {
    style: {
      fontSize: 'var(--type-heading-xl-size)',
      fontWeight: 600
    }
  }, 'Request received'), React.createElement('p', {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, 'A dealer will follow up within one business day.')) : React.createElement(QuoteForm, {
    onSubmit: () => setSent(true)
  }));
}
window.QuotePage = QuotePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/QuotePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CertificationBadge = __ds_scope.CertificationBadge;

__ds_ns.DealerLocator = __ds_scope.DealerLocator;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.QuoteForm = __ds_scope.QuoteForm;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.ProductSpecCard = __ds_scope.ProductSpecCard;

__ds_ns.SeriesComparisonTable = __ds_scope.SeriesComparisonTable;

__ds_ns.SpecTable = __ds_scope.SpecTable;

})();
