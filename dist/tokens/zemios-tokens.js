/**
 * @zemios/landkit — Design tokens (TypeScript mirror)
 *
 * This module mirrors the canonical CSS tokens defined in
 * `./zemios.css` so consumers can build Angular components,
 * test helpers or runtime style overrides without hard-coding
 * raw hex values.
 *
 * The CSS file remains the source of truth for visual rendering.
 * When you change a value here, also update `zemios.css` (and vice-versa).
 */
export const zemiosTokens = {
    brand: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
    },
    accent: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
        950: '#2e1065',
    },
    highlight: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
    },
    danger: {
        50: '#fff1f2',
        100: '#ffe4e6',
        200: '#fecdd3',
        300: '#fda4af',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
    },
    slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
    },
    neon: {
        cyan: '#06b6d4',
        purple: '#8b5cf6',
        magenta: '#d946ef',
        orange: '#fb923c',
        red: '#ef4444',
        yellow: '#facc15',
    },
};
export const zemiosSemantic = {
    primary: 'var(--zemios-primary)',
    primaryHover: 'var(--zemios-primary-hover)',
    primaryActive: 'var(--zemios-primary-active)',
    primarySubtle: 'var(--zemios-primary-subtle)',
    accent: 'var(--zemios-accent)',
    accentHover: 'var(--zemios-accent-hover)',
    highlight: 'var(--zemios-highlight)',
    success: 'var(--zemios-success)',
    warning: 'var(--zemios-warning)',
    error: 'var(--zemios-error)',
    info: 'var(--zemios-info)',
};
export const zemiosSurface = {
    body: 'var(--zemios-surface-body)',
    base: 'var(--zemios-surface-base)',
    raised: 'var(--zemios-surface-raised)',
    overlay: 'var(--zemios-surface-overlay)',
    inset: 'var(--zemios-surface-inset)',
    inverse: 'var(--zemios-surface-inverse)',
};
export const zemiosText = {
    primary: 'var(--zemios-text-primary)',
    secondary: 'var(--zemios-text-secondary)',
    muted: 'var(--zemios-text-muted)',
    inverse: 'var(--zemios-text-inverse)',
    onBrand: 'var(--zemios-text-on-brand)',
    link: 'var(--zemios-text-link)',
};
export const zemiosBorder = {
    subtle: 'var(--zemios-border-subtle)',
    default: 'var(--zemios-border-default)',
    strong: 'var(--zemios-border-strong)',
    focus: 'var(--zemios-border-focus)',
    glass: 'var(--zemios-border-glass)',
};
export const zemiosSpacing = {
    0: '0',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
};
export const zemiosRadius = {
    none: 'var(--zemios-radius-none)',
    xs: 'var(--zemios-radius-xs)',
    sm: 'var(--zemios-radius-sm)',
    md: 'var(--zemios-radius-md)',
    lg: 'var(--zemios-radius-lg)',
    xl: 'var(--zemios-radius-xl)',
    '2xl': 'var(--zemios-radius-2xl)',
    '3xl': 'var(--zemios-radius-3xl)',
    full: 'var(--zemios-radius-full)',
    card: 'var(--zemios-radius-card)',
    control: 'var(--zemios-radius-control)',
};
export const zemiosShadow = {
    none: 'var(--zemios-shadow-none)',
    xs: 'var(--zemios-shadow-xs)',
    sm: 'var(--zemios-shadow-sm)',
    md: 'var(--zemios-shadow-md)',
    lg: 'var(--zemios-shadow-lg)',
    xl: 'var(--zemios-shadow-xl)',
    '2xl': 'var(--zemios-shadow-2xl)',
    glow: 'var(--zemios-shadow-glow)',
    glowAccent: 'var(--zemios-shadow-glow-accent)',
    ring: 'var(--zemios-shadow-ring)',
};
export const zemiosFont = {
    display: 'var(--zemios-font-display)',
    body: 'var(--zemios-font-body)',
    mono: 'var(--zemios-font-mono)',
};
export const zemiosFontSize = {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
};
export const zemiosMotion = {
    duration: {
        instant: 'var(--zemios-duration-instant)',
        fast: 'var(--zemios-duration-fast)',
        base: 'var(--zemios-duration-base)',
        moderate: 'var(--zemios-duration-moderate)',
        slow: 'var(--zemios-duration-slow)',
        slower: 'var(--zemios-duration-slower)',
    },
    easing: {
        default: 'var(--zemios-easing-default)',
        easeIn: 'var(--zemios-easing-ease-in)',
        easeOut: 'var(--zemios-easing-ease-out)',
        bounce: 'var(--zemios-easing-bounce)',
    },
};
export const zemiosZ = {
    base: 'var(--zemios-z-base)',
    header: 'var(--zemios-z-header)',
    dropdown: 'var(--zemios-z-dropdown)',
    overlay: 'var(--zemios-z-overlay)',
    modal: 'var(--zemios-z-modal)',
    popover: 'var(--zemios-z-popover)',
    toast: 'var(--zemios-z-toast)',
};
export const zemiosGradient = {
    brand: 'var(--zemios-gradient-brand)',
    sunset: 'var(--zemios-gradient-sunset)',
    ocean: 'var(--zemios-gradient-ocean)',
    neon: 'var(--zemios-gradient-neon)',
    radial: 'var(--zemios-gradient-radial)',
    text: 'var(--zemios-gradient-text)',
};
