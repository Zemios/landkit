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
export declare const zemiosTokens: {
    readonly brand: {
        readonly 50: "#f0f9ff";
        readonly 100: "#e0f2fe";
        readonly 200: "#bae6fd";
        readonly 300: "#7dd3fc";
        readonly 400: "#38bdf8";
        readonly 500: "#0ea5e9";
        readonly 600: "#0284c7";
        readonly 700: "#0369a1";
        readonly 800: "#075985";
        readonly 900: "#0c4a6e";
        readonly 950: "#082f49";
    };
    readonly accent: {
        readonly 50: "#f5f3ff";
        readonly 100: "#ede9fe";
        readonly 200: "#ddd6fe";
        readonly 300: "#c4b5fd";
        readonly 400: "#a78bfa";
        readonly 500: "#8b5cf6";
        readonly 600: "#7c3aed";
        readonly 700: "#6d28d9";
        readonly 800: "#5b21b6";
        readonly 900: "#4c1d95";
        readonly 950: "#2e1065";
    };
    readonly highlight: {
        readonly 50: "#fffbeb";
        readonly 100: "#fef3c7";
        readonly 200: "#fde68a";
        readonly 300: "#fcd34d";
        readonly 400: "#fbbf24";
        readonly 500: "#f59e0b";
        readonly 600: "#d97706";
        readonly 700: "#b45309";
        readonly 800: "#92400e";
        readonly 900: "#78350f";
    };
    readonly danger: {
        readonly 50: "#fff1f2";
        readonly 100: "#ffe4e6";
        readonly 200: "#fecdd3";
        readonly 300: "#fda4af";
        readonly 400: "#fb7185";
        readonly 500: "#f43f5e";
        readonly 600: "#e11d48";
        readonly 700: "#be123c";
    };
    readonly slate: {
        readonly 50: "#f8fafc";
        readonly 100: "#f1f5f9";
        readonly 200: "#e2e8f0";
        readonly 300: "#cbd5e1";
        readonly 400: "#94a3b8";
        readonly 500: "#64748b";
        readonly 600: "#475569";
        readonly 700: "#334155";
        readonly 800: "#1e293b";
        readonly 900: "#0f172a";
        readonly 950: "#020617";
    };
    readonly neon: {
        readonly cyan: "#06b6d4";
        readonly purple: "#8b5cf6";
        readonly magenta: "#d946ef";
        readonly orange: "#fb923c";
        readonly red: "#ef4444";
        readonly yellow: "#facc15";
    };
};
export declare const zemiosSemantic: {
    readonly primary: "var(--zemios-primary)";
    readonly primaryHover: "var(--zemios-primary-hover)";
    readonly primaryActive: "var(--zemios-primary-active)";
    readonly primarySubtle: "var(--zemios-primary-subtle)";
    readonly accent: "var(--zemios-accent)";
    readonly accentHover: "var(--zemios-accent-hover)";
    readonly highlight: "var(--zemios-highlight)";
    readonly success: "var(--zemios-success)";
    readonly warning: "var(--zemios-warning)";
    readonly error: "var(--zemios-error)";
    readonly info: "var(--zemios-info)";
};
export declare const zemiosSurface: {
    readonly body: "var(--zemios-surface-body)";
    readonly base: "var(--zemios-surface-base)";
    readonly raised: "var(--zemios-surface-raised)";
    readonly overlay: "var(--zemios-surface-overlay)";
    readonly inset: "var(--zemios-surface-inset)";
    readonly inverse: "var(--zemios-surface-inverse)";
};
export declare const zemiosText: {
    readonly primary: "var(--zemios-text-primary)";
    readonly secondary: "var(--zemios-text-secondary)";
    readonly muted: "var(--zemios-text-muted)";
    readonly inverse: "var(--zemios-text-inverse)";
    readonly onBrand: "var(--zemios-text-on-brand)";
    readonly link: "var(--zemios-text-link)";
};
export declare const zemiosBorder: {
    readonly subtle: "var(--zemios-border-subtle)";
    readonly default: "var(--zemios-border-default)";
    readonly strong: "var(--zemios-border-strong)";
    readonly focus: "var(--zemios-border-focus)";
    readonly glass: "var(--zemios-border-glass)";
};
export declare const zemiosSpacing: {
    readonly 0: "0";
    readonly px: "1px";
    readonly 0.5: "0.125rem";
    readonly 1: "0.25rem";
    readonly 1.5: "0.375rem";
    readonly 2: "0.5rem";
    readonly 2.5: "0.625rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 24: "6rem";
};
export declare const zemiosRadius: {
    readonly none: "var(--zemios-radius-none)";
    readonly xs: "var(--zemios-radius-xs)";
    readonly sm: "var(--zemios-radius-sm)";
    readonly md: "var(--zemios-radius-md)";
    readonly lg: "var(--zemios-radius-lg)";
    readonly xl: "var(--zemios-radius-xl)";
    readonly '2xl': "var(--zemios-radius-2xl)";
    readonly '3xl': "var(--zemios-radius-3xl)";
    readonly full: "var(--zemios-radius-full)";
    readonly card: "var(--zemios-radius-card)";
    readonly control: "var(--zemios-radius-control)";
};
export declare const zemiosShadow: {
    readonly none: "var(--zemios-shadow-none)";
    readonly xs: "var(--zemios-shadow-xs)";
    readonly sm: "var(--zemios-shadow-sm)";
    readonly md: "var(--zemios-shadow-md)";
    readonly lg: "var(--zemios-shadow-lg)";
    readonly xl: "var(--zemios-shadow-xl)";
    readonly '2xl': "var(--zemios-shadow-2xl)";
    readonly glow: "var(--zemios-shadow-glow)";
    readonly glowAccent: "var(--zemios-shadow-glow-accent)";
    readonly ring: "var(--zemios-shadow-ring)";
};
export declare const zemiosFont: {
    readonly display: "var(--zemios-font-display)";
    readonly body: "var(--zemios-font-body)";
    readonly mono: "var(--zemios-font-mono)";
};
export declare const zemiosFontSize: {
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly base: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly '2xl': "1.5rem";
    readonly '3xl': "1.875rem";
    readonly '4xl': "2.25rem";
    readonly '5xl': "3rem";
    readonly '6xl': "3.75rem";
    readonly '7xl': "4.5rem";
};
export declare const zemiosMotion: {
    readonly duration: {
        readonly instant: "var(--zemios-duration-instant)";
        readonly fast: "var(--zemios-duration-fast)";
        readonly base: "var(--zemios-duration-base)";
        readonly moderate: "var(--zemios-duration-moderate)";
        readonly slow: "var(--zemios-duration-slow)";
        readonly slower: "var(--zemios-duration-slower)";
    };
    readonly easing: {
        readonly default: "var(--zemios-easing-default)";
        readonly easeIn: "var(--zemios-easing-ease-in)";
        readonly easeOut: "var(--zemios-easing-ease-out)";
        readonly bounce: "var(--zemios-easing-bounce)";
    };
};
export declare const zemiosZ: {
    readonly base: "var(--zemios-z-base)";
    readonly header: "var(--zemios-z-header)";
    readonly dropdown: "var(--zemios-z-dropdown)";
    readonly overlay: "var(--zemios-z-overlay)";
    readonly modal: "var(--zemios-z-modal)";
    readonly popover: "var(--zemios-z-popover)";
    readonly toast: "var(--zemios-z-toast)";
};
export declare const zemiosGradient: {
    readonly brand: "var(--zemios-gradient-brand)";
    readonly sunset: "var(--zemios-gradient-sunset)";
    readonly ocean: "var(--zemios-gradient-ocean)";
    readonly neon: "var(--zemios-gradient-neon)";
    readonly radial: "var(--zemios-gradient-radial)";
    readonly text: "var(--zemios-gradient-text)";
};
export type ZemiosColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type ZemiosTheme = 'light' | 'dark' | 'neon';
//# sourceMappingURL=zemios-tokens.d.ts.map