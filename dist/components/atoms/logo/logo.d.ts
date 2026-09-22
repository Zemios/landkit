export type LogoVariant = 'icon' | 'iconWithTitle' | 'full';
export type LogoTheme = 'dark' | 'light';
/**
 * LogoComponent — Zemios brand logo (icon + optional title).
 *
 * Three variants:
 *  - `icon`: just the icon
 *  - `iconWithTitle`: icon + the wordmark side-by-side
 *  - `full`: a single full-bleed logo image (consumer-supplied src)
 *
 * `theme` switches the icon/title SVG between the dark and light versions.
 *
 * Every project in Zemios uses the same logo so this is part of the
 * brand-coherence guarantee.
 */
export declare class LogoComponent {
    variant: LogoVariant;
    titleVisible: boolean;
    theme: LogoTheme;
    logoSrc: string;
    titleSrc: string;
    fullLogoSrc?: string;
    routerLink: string | string[];
    alt: string;
    get src(): string;
}
//# sourceMappingURL=logo.d.ts.map