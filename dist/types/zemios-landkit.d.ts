import * as i0 from '@angular/core';
import { EventEmitter, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

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

type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';
/**
 * BadgeComponent — small status / category pill.
 *
 * Token-driven; renders inline-flex with `var(--zemios-*)` colour pairs.
 *
 * Usage:
 *   <z-badge variant="success">Activo</z-badge>
 *   <z-badge variant="primary" size="lg">Beta</z-badge>
 */
declare class BadgeComponent {
    variant: BadgeVariant;
    size: BadgeSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeComponent, "z-badge", never, { "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}

type DividerOrientation = 'horizontal' | 'vertical';
type DividerSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl';
/**
 * DividerComponent — token-driven horizontal / vertical rule.
 *
 * Usage:
 *   <z-divider></z-divider>
 *   <z-divider orientation="vertical"></z-divider>
 *   <z-divider spacing="lg"></z-divider>
 */
declare class DividerComponent {
    orientation: DividerOrientation;
    spacing: DividerSpacing;
    static ɵfac: i0.ɵɵFactoryDeclaration<DividerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DividerComponent, "z-divider", never, { "orientation": { "alias": "orientation"; "required": false; }; "spacing": { "alias": "spacing"; "required": false; }; }, {}, never, never, true, never>;
}

type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
type InputSize = 'sm' | 'md' | 'lg';
type InputState = 'default' | 'error' | 'success';
/**
 * InputComponent — token-driven text input with optional form binding.
 *
 * Two modes:
 * - Standalone (template-driven): set `value` / listen `(valueChange)`.
 * - Reactive forms: register via `providers` on the parent with
 *   `NG_VALUE_ACCESSOR`. The component implements
 *   `ControlValueAccessor`.
 *
 * All styling comes from `var(--zemios-*)`, including focus ring
 * (`var(--zemios-shadow-ring)`) and state colours.
 */
declare class InputComponent implements ControlValueAccessor {
    type: InputType;
    placeholder: string;
    disabled: boolean;
    size: InputSize;
    state: InputState;
    value: string | null;
    valueChange: EventEmitter<string>;
    private onChangeFn;
    onTouchedFn: () => void;
    handleInput(event: Event): void;
    writeValue(value: string | null): void;
    registerOnChange(fn: (val: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "z-input", never, { "type": { "alias": "type"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "size": { "alias": "size"; "required": false; }; "state": { "alias": "state"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}

type InputFieldState = 'default' | 'error' | 'success';
/**
 * InputFieldComponent — labelled wrapper around `<z-input>` with
 * hint and error message support.
 *
 * Usage:
 *   <z-input-field
 *     label="Email"
 *     type="email"
 *     placeholder="hola@zemios.com"
 *     hint="No compartiremos tu correo."
 *   ></z-input-field>
 *
 *   <z-input-field
 *     label="Campo obligatorio"
 *     state="error"
 *     errorMessage="Este campo es obligatorio."
 *   ></z-input-field>
 */
declare class InputFieldComponent {
    label: string;
    hint: string;
    errorMessage: string;
    required: boolean;
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
    placeholder: string;
    disabled: boolean;
    size: 'sm' | 'md' | 'lg';
    state: InputFieldState;
    value: string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputFieldComponent, "z-input-field", never, { "label": { "alias": "label"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessage": { "alias": "errorMessage"; "required": false; }; "required": { "alias": "required"; "required": false; }; "type": { "alias": "type"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "size": { "alias": "size"; "required": false; }; "state": { "alias": "state"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, never, true, never>;
}

type LogoVariant = 'icon' | 'iconWithTitle' | 'full';
type LogoTheme = 'dark' | 'light';
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
declare class LogoComponent {
    variant: LogoVariant;
    titleVisible: boolean;
    theme: LogoTheme;
    logoSrc: string;
    titleSrc: string;
    fullLogoSrc?: string;
    routerLink: string | string[];
    alt: string;
    get src(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogoComponent, "z-logo", never, { "variant": { "alias": "variant"; "required": true; }; "titleVisible": { "alias": "titleVisible"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "logoSrc": { "alias": "logoSrc"; "required": false; }; "titleSrc": { "alias": "titleSrc"; "required": false; }; "fullLogoSrc": { "alias": "fullLogoSrc"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; }, {}, never, never, true, never>;
}

interface NavPage {
    title: string;
    url: string;
    icon?: string;
}
/**
 * NavItemComponent — single nav-link with a brand-violet underline.
 *
 * Token-driven; reads `--zemios-accent` for the underline / hover
 * colour so a single token change re-themes every Zemios product.
 *
 * Usage:
 *   <z-nav-item [page]="{ title: 'Inicio', url: '' }"></z-nav-item>
 */
declare class NavItemComponent {
    router: Router;
    page: NavPage;
    constructor(router: Router);
    static ɵfac: i0.ɵɵFactoryDeclaration<NavItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavItemComponent, "z-nav-item", never, { "page": { "alias": "page"; "required": true; }; }, {}, never, never, true, never>;
}

type SpinnerSize = 'sm' | 'md' | 'lg';
/**
 * SpinnerComponent — accessible loading indicator.
 *
 * Uses a token-driven `@keyframes zemios-spin` animation and
 * `currentColor` so it adapts to whatever text colour the parent
 * gives it.
 *
 * Usage:
 *   <z-spinner size="md"></z-spinner>
 *   <z-spinner size="lg" label="Cargando datos…"></z-spinner>
 */
declare class SpinnerComponent {
    size: SpinnerSize;
    label: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpinnerComponent, "z-spinner", never, { "size": { "alias": "size"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, never, never, true, never>;
}

type CardVariant = 'prism' | 'cta' | 'default' | 'outline';
type CardCtaType = 'support' | 'business' | 'default';
type CardLayout = 'vertical' | 'horizontal';
declare const PRISM_VARIANTS: readonly ["aqua", "sunset", "lime", "plasma", "solar", "cyber"];
type PrismVariant = (typeof PRISM_VARIANTS)[number];
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
declare class CardComponent implements OnInit {
    /** Variant selector: `default` | `prism` | `cta` | `outline` */
    variant: CardVariant;
    title?: string;
    description?: string;
    icon?: string;
    iconClass?: string;
    layout: CardLayout;
    clickable: boolean;
    /** CTA-specific props. `ctaRouterLink` is a single path segment because it is
     *  forwarded to `z-button`, whose own `routerLink` input accepts `string`. */
    ctaType?: CardCtaType;
    ctaLabel?: string;
    ctaHref?: string;
    ctaRouterLink?: string;
    ctaIcon?: string;
    ctaVariant: ButtonVariants;
    /** Emits when the card is clicked (when `clickable`). */
    cardClick: EventEmitter<void>;
    /** Random prism palette chosen at mount time. */
    prismVariant?: PrismVariant;
    ngOnInit(): void;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "z-card", never, { "variant": { "alias": "variant"; "required": true; }; "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconClass": { "alias": "iconClass"; "required": false; }; "layout": { "alias": "layout"; "required": false; }; "clickable": { "alias": "clickable"; "required": false; }; "ctaType": { "alias": "ctaType"; "required": false; }; "ctaLabel": { "alias": "ctaLabel"; "required": false; }; "ctaHref": { "alias": "ctaHref"; "required": false; }; "ctaRouterLink": { "alias": "ctaRouterLink"; "required": false; }; "ctaIcon": { "alias": "ctaIcon"; "required": false; }; "ctaVariant": { "alias": "ctaVariant"; "required": false; }; }, { "cardClick": "cardClick"; }, never, ["*", "*"], true, never>;
}

type NavBarTheme = 'dark' | 'light';
/**
 * NavBarComponent — responsive top navigation.
 *
 * Renders a desktop bar with logo + nav-items and a mobile bar with a
 * hamburger toggle. Auto-hides on scroll. Token-driven; every Zemios
 * product that needs a top nav uses this same component so the look
 * stays consistent.
 *
 * Usage:
 *   <z-nav-bar
 *     [pages]="[{ title: 'Inicio', url: '' }, { title: 'Proyectos', url: 'projects' }]"
 *     theme="dark"
 *   ></z-nav-bar>
 */
declare class NavBarComponent {
    router: Router;
    pages: NavPage[];
    logoVariant: LogoVariant;
    mobileLogoSrc: string;
    theme: NavBarTheme;
    menuVisible: boolean;
    scrolled: boolean;
    constructor(router: Router);
    onScroll(): void;
    toggleMenu(): void;
    closeMenu(): void;
    private isNearEdge;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavBarComponent, "z-nav-bar", never, { "pages": { "alias": "pages"; "required": true; }; "logoVariant": { "alias": "logoVariant"; "required": false; }; "mobileLogoSrc": { "alias": "mobileLogoSrc"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; }, {}, never, never, true, never>;
}

declare class HeroComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<HeroComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeroComponent, "z-hero", never, {}, {}, never, never, true, never>;
}

declare class HeroMobileComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<HeroMobileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeroMobileComponent, "z-hero-mobile", never, {}, {}, never, never, true, never>;
}

type FooterVariant = 'default' | 'slim';
type FooterTheme = 'dark' | 'light';
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
declare class FooterComponent {
    pages: NavPage[];
    variant: FooterVariant;
    theme: FooterTheme;
    contactEmail: string;
    contactPhone: string;
    year: number;
    /** Computes a `tel:` href stripping spaces and special characters. */
    get phoneHref(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FooterComponent, "z-footer", never, { "pages": { "alias": "pages"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "contactEmail": { "alias": "contactEmail"; "required": false; }; "contactPhone": { "alias": "contactPhone"; "required": false; }; "year": { "alias": "year"; "required": false; }; }, {}, never, never, true, never>;
}

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';
/**
 * ModalComponent — token-driven dialog.
 *
 * Self-contained, dependency-free modal that uses `var(--zemios-*)`.
 * Renders a backdrop + card with a header (title + close button),
 * an `ng-content` body, and an optional footer for action buttons.
 *
 * Usage:
 *   <z-modal
 *     [open]="isOpen"
 *     title="Confirmar"
 *     (openChange)="isOpen = $event"
 *   >
 *     <p>¿Estás seguro?</p>
 *     <ng-container z-footer>
 *         <z-button variant="outline" (click)="isOpen = false">Cancelar</z-button>
 *         <z-button variant="primary" (click)="confirm()">Aceptar</z-button>
 *       </ng-container>
 *   </z-modal>
 */
declare class ModalComponent {
    open: boolean;
    title?: string;
    size: ModalSize;
    /** Allow backdrop click to close? */
    closeOnBackdrop: boolean;
    /** Close on Escape key? */
    closeOnEscape: boolean;
    /** Whether the dialog has a footer slot. */
    hasFooter: boolean;
    openChange: EventEmitter<boolean>;
    closed: EventEmitter<void>;
    onBackdropClick(event: MouseEvent): void;
    onEscape(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "z-modal", never, { "open": { "alias": "open"; "required": false; }; "title": { "alias": "title"; "required": false; }; "size": { "alias": "size"; "required": false; }; "closeOnBackdrop": { "alias": "closeOnBackdrop"; "required": false; }; "closeOnEscape": { "alias": "closeOnEscape"; "required": false; }; "hasFooter": { "alias": "hasFooter"; "required": false; }; }, { "openChange": "openChange"; "closed": "closed"; }, never, ["*", "[z-footer]"], true, never>;
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

type SectionShellMaxWidth = 'narrow' | 'medium' | 'wide' | 'full';
/**
 * SectionShellComponent — consistent section wrapper.
 *
 * Provides the standard Zemios section padding, max-width container
 * and optional centered eyebrow + title block. Used as the visual
 * anchor for almost every section on a Zemios landing page.
 *
 * Usage:
 *   <z-section-shell
 *     eyebrow="Por qué"
 *     title="¿Por qué elegirnos?"
 *     subtitle="Razones de peso para confiar en Zemios."
 *     maxWidth="wide"
 *   >
 *     <!-- section body -->
 *   </z-section-shell>
 */
declare class SectionShellComponent {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    maxWidth: SectionShellMaxWidth;
    static ɵfac: i0.ɵɵFactoryDeclaration<SectionShellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SectionShellComponent, "z-section-shell", never, { "eyebrow": { "alias": "eyebrow"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "maxWidth": { "alias": "maxWidth"; "required": false; }; }, {}, never, ["*"], true, never>;
}

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
declare const zemiosTokens: {
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
declare const zemiosSemantic: {
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
declare const zemiosSurface: {
    readonly body: "var(--zemios-surface-body)";
    readonly base: "var(--zemios-surface-base)";
    readonly raised: "var(--zemios-surface-raised)";
    readonly overlay: "var(--zemios-surface-overlay)";
    readonly inset: "var(--zemios-surface-inset)";
    readonly inverse: "var(--zemios-surface-inverse)";
};
declare const zemiosText: {
    readonly primary: "var(--zemios-text-primary)";
    readonly secondary: "var(--zemios-text-secondary)";
    readonly muted: "var(--zemios-text-muted)";
    readonly inverse: "var(--zemios-text-inverse)";
    readonly onBrand: "var(--zemios-text-on-brand)";
    readonly link: "var(--zemios-text-link)";
};
declare const zemiosBorder: {
    readonly subtle: "var(--zemios-border-subtle)";
    readonly default: "var(--zemios-border-default)";
    readonly strong: "var(--zemios-border-strong)";
    readonly focus: "var(--zemios-border-focus)";
    readonly glass: "var(--zemios-border-glass)";
};
declare const zemiosSpacing: {
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
declare const zemiosRadius: {
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
declare const zemiosShadow: {
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
declare const zemiosFont: {
    readonly display: "var(--zemios-font-display)";
    readonly body: "var(--zemios-font-body)";
    readonly mono: "var(--zemios-font-mono)";
};
declare const zemiosFontSize: {
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
declare const zemiosMotion: {
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
declare const zemiosZ: {
    readonly base: "var(--zemios-z-base)";
    readonly header: "var(--zemios-z-header)";
    readonly dropdown: "var(--zemios-z-dropdown)";
    readonly overlay: "var(--zemios-z-overlay)";
    readonly modal: "var(--zemios-z-modal)";
    readonly popover: "var(--zemios-z-popover)";
    readonly toast: "var(--zemios-z-toast)";
};
declare const zemiosGradient: {
    readonly brand: "var(--zemios-gradient-brand)";
    readonly sunset: "var(--zemios-gradient-sunset)";
    readonly ocean: "var(--zemios-gradient-ocean)";
    readonly neon: "var(--zemios-gradient-neon)";
    readonly radial: "var(--zemios-gradient-radial)";
    readonly text: "var(--zemios-gradient-text)";
};
type ZemiosColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type ZemiosTheme = 'light' | 'dark' | 'neon';

declare const ZEMIOS_THEME_STORAGE_KEY = "zemios-theme";
/**
 * ThemeService
 *
 * Runtime theme controller for the Zemios design system. Lets an app
 * toggle between the shipped themes (`light` | `dark` | `neon`) by
 * flipping a `data-theme` attribute on `<html>` and persisting the
 * choice in `localStorage`.
 *
 * Usage:
 * ```ts
 * constructor(private theme: ThemeService) {}
 *
 * toggle() { this.theme.toggle('dark'); }
 * ```
 *
 * The CSS tokens in `zemios.css` automatically re-render because every
 * semantic variable (`--zemios-surface-*`, `--zemios-text-*`, etc.)
 * is scoped under `[data-theme="…"]`.
 */
declare class ThemeService {
    private readonly doc;
    private readonly isBrowser;
    private readonly storageKey;
    /** Reactive current theme. Defaults to the user's system setting, then
     *  to whatever was persisted, then to `light`. */
    readonly current: i0.WritableSignal<ZemiosTheme>;
    constructor(doc: Document, platformId: object);
    set(theme: ZemiosTheme): void;
    toggle(next?: ZemiosTheme): void;
    private resolveInitialTheme;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}

/**
 * @zemios/landkit — Tokens entry point
 *
 * Re-exports the design-token system so consumers can do:
 *
 *   /* in styles.css *
 *   @import '@zemios/landkit/tokens';        → dist/tokens/zemios.css
 *
 *   /* in TS *
 *   import { zemiosTokens, zemiosRadius, ThemeService } from '@zemios/landkit';
 */
/**
 * Specifier for the CSS custom-property stylesheet. It resolves through the
 * `./tokens` sub-entry in package.json `exports`, so it is the correct value
 * to hand to a bundler or a runtime `import`.
 */
declare const zemiosTokensStylesheet = "@zemios/landkit/tokens";

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

export { BadgeComponent, ButtonComponent, CardComponent, CardHoverDirective, CtaComponent, DividerComponent, FeaturesGridComponent, FooterComponent, HeroComponent, HeroMobileComponent, InputComponent, InputFieldComponent, LogoComponent, MadeByComponent, ModalComponent, NavBarComponent, NavItemComponent, PhoneMockupComponent, ProcessComponent, SectionShellComponent, SpinnerComponent, ThemeService, TitleComponent, ZEMIOS_THEME_STORAGE_KEY, zemiosBorder, zemiosFont, zemiosFontSize, zemiosGradient, zemiosMotion, zemiosRadius, zemiosSemantic, zemiosShadow, zemiosSpacing, zemiosSurface, zemiosText, zemiosTokens, zemiosTokensStylesheet, zemiosZ };
export type { BadgeSize, BadgeVariant, ButtonShape, ButtonVariants, CardCtaType, CardLayout, CardVariant, DividerOrientation, DividerSpacing, FooterTheme, FooterVariant, InputFieldState, InputSize, InputState, InputType, LogoTheme, LogoVariant, MadeByTheme, MadeByVariant, ModalSize, NavBarTheme, NavPage, PhoneMockupTilt, PrismVariant, ProcessStep, SectionShellMaxWidth, SpinnerSize, ZemiosColorScale, ZemiosTheme };
