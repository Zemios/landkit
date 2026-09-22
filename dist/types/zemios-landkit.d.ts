import * as i0 from '@angular/core';
import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

type ButtonVariants = 'base' | 'primary' | 'accent' | 'light' | 'danger' | 'outline' | 'ghost' | 'prism-primary' | 'prism-outline' | 'prism-ghost' | 'social';
type ButtonShape = 'default' | 'circle';
declare class ButtonComponent {
    href?: string;
    routerLink?: string;
    icon?: string;
    variant: ButtonVariants;
    shape: ButtonShape;
    hasShadow?: boolean;
    disabled: boolean;
    get computedClasses(): string[];
    get computedStyles(): {
        boxShadow: string | boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "z-button", never, { "href": { "alias": "href"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "hasShadow": { "alias": "hasShadow"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], true, never>;
}

type MadeByVariant = 'plain' | 'pill';
type MadeByTheme = 'light' | 'dark';
/**
 * MadeByComponent
 *
 * Reusable "made by Zemios" attribution badge. Two visual variants:
 *
 * - `plain` (default): minimal text link, opacity 0.55, suitable for
 *   sidebars and inline footers where you want the badge to blend
 *   into the page chrome.
 * - `pill`: the rounded pill with a heart icon, a "with love" word in
 *   the brand rose colour, and a hover-state that lifts the background
 *   opacity. Suited for marketing-page footers on a dark surface.
 *
 * `theme` controls the heart / accent colour contrast. `light` is the
 * default (rose-400 works on both light and dark backgrounds). `dark`
 * lightens the heart to a softer rose-300 and bumps the link weight.
 *
 * Every colour / radius / shadow in the component is sourced from
 * `var(--zemios-*)` so it stays on brand automatically under any
 * theme (light, dark or neon).
 */
declare class MadeByComponent {
    variant: MadeByVariant;
    theme: MadeByTheme;
    static ɵfac: i0.ɵɵFactoryDeclaration<MadeByComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MadeByComponent, "z-made-by", never, { "variant": { "alias": "variant"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; }, {}, never, never, true, never>;
}

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
declare class TitleComponent {
    accentText: boolean;
    /** @deprecated Use accentText instead */
    rainbowText: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TitleComponent, "z-title", never, { "accentText": { "alias": "accentText"; "required": false; }; "rainbowText": { "alias": "rainbowText"; "required": false; }; }, {}, never, ["*", "*"], true, never>;
}

declare class HeroComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<HeroComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeroComponent, "z-hero", never, {}, {}, never, never, true, never>;
}

declare class HeroMobileComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<HeroMobileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeroMobileComponent, "z-hero-mobile", never, {}, {}, never, never, true, never>;
}

/**
 * CtaComponent
 *
 * Token-driven call-to-action band. Renders a centered big title
 * followed by the consumer's content (typically a contact form or
 * a button pair). All sizing, colour and typography come from
 * `var(--zemios-*)`.
 */
declare class CtaComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<CtaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CtaComponent, "z-cta", never, {}, {}, never, ["*"], true, never>;
}

/**
 * FeaturesGridComponent
 *
 * Token-driven feature / value-prop grid. The default grid ships with
 * three generic feature rows (scalable / connected / secure) that can
 * be replaced via the `features` input.
 *
 * Each row pairs a Lottie animation slot with a title, description
 * and a subtle separator. All sizing, colour and typography come
 * from `var(--zemios-*)`.
 */
declare class FeaturesGridComponent implements AfterViewInit {
    private platformId;
    private isBrowser;
    features: {
        lottieFile: string;
        title: string;
        description: string;
        rgbColor: string;
        delay: number;
    }[];
    constructor(platformId: object);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeaturesGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeaturesGridComponent, "z-features-grid", never, {}, {}, never, never, true, never>;
}

interface ProcessStep {
    number: string;
    title: string;
    description: string;
    color: string;
}
/**
 * ProcessComponent
 *
 * Token-driven process / methodology section. Two-column layout:
 * - left side: eyebrow badge + title (with gradient accent) + subtitle.
 * - right side: a vertical list of numbered steps with a connector line.
 *
 * All values come from `var(--zemios-*)`, so a single change to the
 * token scale re-themes the entire component across every Zemios product.
 *
 * Consumers pass an optional `steps` array; if omitted, a sensible
 * default of three generic steps is rendered.
 */
declare class ProcessComponent {
    steps: ProcessStep[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ProcessComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProcessComponent, "z-process", never, { "steps": { "alias": "steps"; "required": false; }; }, {}, never, never, true, never>;
}

type PhoneMockupTilt = 'none' | 'left' | 'right';
/**
 * PhoneMockupComponent
 *
 * A static, hand-drawn iPhone-shaped frame with a notch, status bar
 * and rounded screen. The contents of the screen are projected via
 * `<ng-content>` so each consumer can render its own header, list,
 * card, chat bubbles, etc. inside.
 *
 * Slots:
 * - default: main screen content (cards, lists, chat, whatever).
 * - [zPhoneStatus]:  small block rendered in the top status bar
 *   (overrides the default 09:41 + signal/battery row).
 * - [zPhoneHeader]: optional header row (e.g. a brand label + bell).
 * - [zPhoneTabbar]: optional tabbar pinned at the bottom of the
 *   screen.
 *
 * The component is self-contained: it ships its own scoped styles
 * sourced from `var(--zemios-*)`, so it works in any app regardless
 * of the consumer's CSS framework (no Tailwind utility required).
 *
 * Sizing: the frame is 180x360px on mobile and 210x420px on desktop.
 * Override via the `tilt` input to lean the phone left or right
 * inside a hero composition.
 */
declare class PhoneMockupComponent {
    width: number;
    height: number;
    tilt: PhoneMockupTilt;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneMockupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhoneMockupComponent, "z-phone-mockup", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "tilt": { "alias": "tilt"; "required": false; }; }, {}, never, ["[zPhoneStatus]", "[zPhoneHeader]", "*", "[zPhoneTabbar]"], true, never>;
}

/**
 * CardHoverDirective
 *
 * Adds a token-driven lift + shadow on hover to any element it is
 * applied to. The values come from `var(--zemios-*)` so consumers
 * can theme it via the token scale.
 *
 * Usage:
 *   <div appCardHover>…</div>
 */
declare class CardHoverDirective {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer2);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CardHoverDirective, "[appCardHover]", never, {}, {}, never, never, true, never>;
}

export { ButtonComponent, CardHoverDirective, CtaComponent, FeaturesGridComponent, HeroComponent, HeroMobileComponent, MadeByComponent, PhoneMockupComponent, ProcessComponent, TitleComponent };
export type { ButtonShape, ButtonVariants, MadeByTheme, MadeByVariant, PhoneMockupTilt, ProcessStep };
