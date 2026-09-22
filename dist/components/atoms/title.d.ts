/**
 * TitleComponent
 *
 * Token-driven section heading. Two variants:
 *  - `accentText = false` (default): a plain big title that follows
 *    the page's text colour.
 *  - `accentText = true`: a slate→slate gradient text (legacy rainbow
 *    look was removed in favour of a calmer metallic gradient that
 *    keeps brand consistency on dark hero surfaces).
 *
 * The component sets typography (font family, weight, tracking) from
 * `var(--zemios-*)` so consumers only need to wrap their content.
 */
export declare class TitleComponent {
    accentText: boolean;
    /** @deprecated Use accentText instead */
    rainbowText: boolean;
}
//# sourceMappingURL=title.d.ts.map