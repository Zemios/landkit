import { EventEmitter, OnInit } from '@angular/core';
import { ButtonVariants } from '../../atoms/button/button';
export type CardVariant = 'prism' | 'cta' | 'default' | 'outline';
export type CardCtaType = 'support' | 'business' | 'default';
export type CardLayout = 'vertical' | 'horizontal';
declare const PRISM_VARIANTS: readonly ["aqua", "sunset", "lime", "plasma", "solar", "cyber"];
export type PrismVariant = (typeof PRISM_VARIANTS)[number];
/**
 * CardComponent
 *
 * Token-driven card with four variants:
 *  - `default`: a basic white surface with the brand radius and shadow.
 *  - `outline`: same shape, but with a border instead of a shadow.
 *  - `prism`: an animated conic-gradient overlay that picks a random
 *    aqua/sunset/lime/plasma/solar/cyber palette at mount.
 *  - `cta`: a promotional card with title + description + a button.
 *
 * All colours and radii come from `var(--zemios-*)`.
 */
export declare class CardComponent implements OnInit {
    /** Variant selector: `default` | `prism` | `cta` | `outline` */
    variant: CardVariant;
    title?: string;
    description?: string;
    icon?: string;
    iconClass?: string;
    layout: CardLayout;
    clickable: boolean;
    /** CTA-specific props */
    ctaType?: CardCtaType;
    ctaLabel?: string;
    ctaHref?: string;
    ctaRouterLink?: string | string[];
    ctaIcon?: string;
    ctaVariant: ButtonVariants;
    /** Emits when the card is clicked (when `clickable`). */
    cardClick: EventEmitter<void>;
    /** Random prism palette chosen at mount time. */
    prismVariant?: PrismVariant;
    ngOnInit(): void;
    handleClick(): void;
}
export {};
//# sourceMappingURL=card.d.ts.map