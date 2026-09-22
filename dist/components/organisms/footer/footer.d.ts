import { NavPage } from '../../atoms/nav-link/nav-link';
export type FooterVariant = 'default' | 'slim';
export type FooterTheme = 'dark' | 'light';
/**
 * FooterComponent — Zemios site footer.
 *
 * Two variants:
 *  - `default` (full): logo, social links, contact, navigation, made-by.
 *  - `slim`: just a centered logo + made-by + copyright.
 *
 * Every Zemios landing uses this footer so the brand mark, contact
 * info and social handles stay consistent.
 */
export declare class FooterComponent {
    pages: NavPage[];
    variant: FooterVariant;
    theme: FooterTheme;
    contactEmail: string;
    contactPhone: string;
    year: number;
    /** Computes a `tel:` href stripping spaces and special characters. */
    get phoneHref(): string;
}
//# sourceMappingURL=footer.d.ts.map