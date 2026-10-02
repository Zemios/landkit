import * as i1 from '@angular/common';
import { CommonModule, NgClass, isPlatformBrowser } from '@angular/common';
import * as i0 from '@angular/core';
import { Input, Component, ChangeDetectionStrategy, EventEmitter, forwardRef, Output, HostListener, inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA, signal, effect, DOCUMENT, Inject, Injectable, Directive } from '@angular/core';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i1$2 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

class ButtonComponent {
    href;
    routerLink;
    icon;
    variant = 'base';
    shape = 'default';
    hasShadow = true;
    disabled = false;
    get computedClasses() {
        const base = ['btn'];
        if (this.variant !== 'base')
            base.push(`btn--${this.variant}`);
        if (this.shape !== 'default')
            base.push(`btn--${this.shape}`);
        if (this.disabled)
            base.push('btn--disabled');
        return base;
    }
    get computedStyles() {
        return {
            boxShadow: this.hasShadow ? false : 'none'
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: ButtonComponent, isStandalone: true, selector: "z-button", inputs: { href: "href", routerLink: "routerLink", icon: "icon", variant: "variant", shape: "shape", hasShadow: "hasShadow", disabled: "disabled" }, ngImport: i0, template: `
    <ng-template #anchor>
      @if (icon) {
        <i class="bi bi-{{ icon }}"></i>
      }
      <ng-content></ng-content>
    </ng-template>

    @if (href) {
      <a [href]="href" target="_blank" rel="noopener noreferrer" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </a>
    } @else if (routerLink) {
      <a [routerLink]="routerLink" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </a>
    } @else {
      <button type="button" [disabled]="disabled" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </button>
    }
  `, isInline: true, styles: [".btn{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;padding:var(--zemios-space-2\\.5) var(--zemios-space-5);border-radius:var(--zemios-radius-full);border:1px solid var(--zemios-border-glass);font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:600;letter-spacing:.01em;line-height:1;background:var(--zemios-surface-raised);color:var(--zemios-text-primary);text-decoration:none;cursor:pointer;transition:transform var(--zemios-duration-fast) var(--zemios-easing-default),box-shadow var(--zemios-duration-fast) var(--zemios-easing-default),background var(--zemios-duration-fast) var(--zemios-easing-default),border-color var(--zemios-duration-fast) var(--zemios-easing-default),filter var(--zemios-duration-fast) var(--zemios-easing-default)}.btn:hover{transform:translateY(-1px);filter:brightness(1.03);border-color:var(--zemios-border-strong);text-decoration:none}.btn--primary{background:linear-gradient(135deg,var(--zemios-sky-500),var(--zemios-sky-600));border-color:var(--zemios-sky-300);color:var(--zemios-text-on-brand);box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--primary:hover{filter:brightness(1.08);box-shadow:var(--zemios-shadow-lg),0 0 0 1px var(--zemios-sky-300)}.btn--accent{background:var(--zemios-gold-400);color:var(--zemios-slate-900);border:none;box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--accent:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.05)}.btn--light{background:linear-gradient(135deg,var(--zemios-slate-50),var(--zemios-slate-200));color:var(--zemios-slate-950);box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--light:hover{filter:brightness(.97)}.btn--danger{background:linear-gradient(135deg,var(--zemios-rose-500),var(--zemios-rose-700));color:var(--zemios-rose-50);border:1px solid var(--zemios-rose-400);box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--danger:hover{filter:brightness(1.08)}.btn--outline{background:transparent;color:var(--zemios-text-primary);border:1px solid var(--zemios-border-strong);box-shadow:none}.btn--outline:hover{background:var(--zemios-surface-overlay)}.btn--ghost{background:transparent;border:none;color:var(--zemios-text-secondary);box-shadow:none}.btn--ghost:hover{color:var(--zemios-text-primary);filter:brightness(1.05)}.btn:disabled,.btn[disabled]{opacity:.5;cursor:not-allowed;transform:none;filter:none}.btn i,.btn svg{margin-right:var(--zemios-space-1\\.5);font-size:1rem;line-height:1}.btn--prism-primary{background-image:linear-gradient(135deg,var(--zemios-sky-400),var(--zemios-violet-500),var(--zemios-rose-500));color:var(--zemios-slate-950);border:none;box-shadow:var(--zemios-shadow-lg),var(--zemios-shadow-glow),0 0 0 1px var(--zemios-slate-900)}.btn--prism-primary:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.08)}.btn--prism-outline{background:radial-gradient(circle at 0 0,var(--zemios-sky-500) 35%,transparent 55%),var(--zemios-surface-inverse);color:var(--zemios-sky-100);border:1px solid var(--zemios-border-strong);box-shadow:none}.btn--prism-outline:hover{border-color:var(--zemios-slate-50);box-shadow:var(--zemios-shadow-xl)}.btn--prism-ghost{background:var(--zemios-slate-900);color:var(--zemios-slate-100);border:1px solid var(--zemios-slate-700)}.btn--prism-ghost:hover{border-color:var(--zemios-slate-400);background:var(--zemios-slate-950)}.btn--social{background:var(--zemios-slate-900);border:1px solid var(--zemios-slate-700);color:var(--zemios-slate-300);padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--social:hover{box-shadow:0 0 25px var(--zemios-slate-400);border-color:var(--zemios-slate-300);color:var(--zemios-slate-50)}.btn--circle{border-radius:var(--zemios-radius-full);padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--circle i,.btn--circle svg{margin-right:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'z-button', imports: [CommonModule, RouterModule], template: `
    <ng-template #anchor>
      @if (icon) {
        <i class="bi bi-{{ icon }}"></i>
      }
      <ng-content></ng-content>
    </ng-template>

    @if (href) {
      <a [href]="href" target="_blank" rel="noopener noreferrer" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </a>
    } @else if (routerLink) {
      <a [routerLink]="routerLink" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </a>
    } @else {
      <button type="button" [disabled]="disabled" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </button>
    }
  `, styles: [".btn{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;padding:var(--zemios-space-2\\.5) var(--zemios-space-5);border-radius:var(--zemios-radius-full);border:1px solid var(--zemios-border-glass);font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:600;letter-spacing:.01em;line-height:1;background:var(--zemios-surface-raised);color:var(--zemios-text-primary);text-decoration:none;cursor:pointer;transition:transform var(--zemios-duration-fast) var(--zemios-easing-default),box-shadow var(--zemios-duration-fast) var(--zemios-easing-default),background var(--zemios-duration-fast) var(--zemios-easing-default),border-color var(--zemios-duration-fast) var(--zemios-easing-default),filter var(--zemios-duration-fast) var(--zemios-easing-default)}.btn:hover{transform:translateY(-1px);filter:brightness(1.03);border-color:var(--zemios-border-strong);text-decoration:none}.btn--primary{background:linear-gradient(135deg,var(--zemios-sky-500),var(--zemios-sky-600));border-color:var(--zemios-sky-300);color:var(--zemios-text-on-brand);box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--primary:hover{filter:brightness(1.08);box-shadow:var(--zemios-shadow-lg),0 0 0 1px var(--zemios-sky-300)}.btn--accent{background:var(--zemios-gold-400);color:var(--zemios-slate-900);border:none;box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--accent:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.05)}.btn--light{background:linear-gradient(135deg,var(--zemios-slate-50),var(--zemios-slate-200));color:var(--zemios-slate-950);box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--light:hover{filter:brightness(.97)}.btn--danger{background:linear-gradient(135deg,var(--zemios-rose-500),var(--zemios-rose-700));color:var(--zemios-rose-50);border:1px solid var(--zemios-rose-400);box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--danger:hover{filter:brightness(1.08)}.btn--outline{background:transparent;color:var(--zemios-text-primary);border:1px solid var(--zemios-border-strong);box-shadow:none}.btn--outline:hover{background:var(--zemios-surface-overlay)}.btn--ghost{background:transparent;border:none;color:var(--zemios-text-secondary);box-shadow:none}.btn--ghost:hover{color:var(--zemios-text-primary);filter:brightness(1.05)}.btn:disabled,.btn[disabled]{opacity:.5;cursor:not-allowed;transform:none;filter:none}.btn i,.btn svg{margin-right:var(--zemios-space-1\\.5);font-size:1rem;line-height:1}.btn--prism-primary{background-image:linear-gradient(135deg,var(--zemios-sky-400),var(--zemios-violet-500),var(--zemios-rose-500));color:var(--zemios-slate-950);border:none;box-shadow:var(--zemios-shadow-lg),var(--zemios-shadow-glow),0 0 0 1px var(--zemios-slate-900)}.btn--prism-primary:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.08)}.btn--prism-outline{background:radial-gradient(circle at 0 0,var(--zemios-sky-500) 35%,transparent 55%),var(--zemios-surface-inverse);color:var(--zemios-sky-100);border:1px solid var(--zemios-border-strong);box-shadow:none}.btn--prism-outline:hover{border-color:var(--zemios-slate-50);box-shadow:var(--zemios-shadow-xl)}.btn--prism-ghost{background:var(--zemios-slate-900);color:var(--zemios-slate-100);border:1px solid var(--zemios-slate-700)}.btn--prism-ghost:hover{border-color:var(--zemios-slate-400);background:var(--zemios-slate-950)}.btn--social{background:var(--zemios-slate-900);border:1px solid var(--zemios-slate-700);color:var(--zemios-slate-300);padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--social:hover{box-shadow:0 0 25px var(--zemios-slate-400);border-color:var(--zemios-slate-300);color:var(--zemios-slate-50)}.btn--circle{border-radius:var(--zemios-radius-full);padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--circle i,.btn--circle svg{margin-right:0}\n"] }]
        }], propDecorators: { href: [{
                type: Input
            }], routerLink: [{
                type: Input
            }], icon: [{
                type: Input
            }], variant: [{
                type: Input
            }], shape: [{
                type: Input
            }], hasShadow: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

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
class MadeByComponent {
    variant = 'plain';
    theme = 'light';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: MadeByComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: MadeByComponent, isStandalone: true, selector: "z-made-by", inputs: { variant: "variant", theme: "theme" }, ngImport: i0, template: `
    @if (variant === 'pill') {
      <a
        href="https://zemios.com"
        target="_blank"
        rel="noopener noreferrer"
        class="z-made-by z-made-by--pill"
        [class.z-made-by--dark]="theme === 'dark'"
      >
        <svg class="z-made-by__heart" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path
            d="M12 21s-7-4.5-9.5-9C.5 8 3 4 6.5 4c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 3.5 0 6 4 4 8-2.5 4.5-9.5 9-9.5 9z"
          />
        </svg>
        <span class="z-made-by__copy">
          Made with <span class="z-made-by__love">love</span> by
          <span class="z-made-by__brand">zemios</span>
        </span>
      </a>
    } @else {
      <div class="z-made-by z-made-by--plain" [class.z-made-by--dark]="theme === 'dark'">
        <span class="z-made-by__text">made by</span>
        <a href="https://zemios.com" target="_blank" rel="noopener noreferrer" class="z-made-by__link"> Zemios </a>
      </div>
    }
  `, isInline: true, styles: [".z-made-by{font-family:var(--zemios-font-body);color:inherit;text-decoration:none;transition:opacity var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-made-by--plain{display:flex;align-items:center;justify-content:center;gap:var(--zemios-space-1);padding:var(--zemios-space-3) 0;font-size:var(--zemios-text-sm);letter-spacing:.04em;opacity:.55}.z-made-by--plain:hover{opacity:.85}.z-made-by--plain .z-made-by__text{font-weight:300}.z-made-by--plain .z-made-by__link{color:inherit;font-weight:600;text-decoration:none;transition:opacity var(--zemios-duration-fast) var(--zemios-easing-default)}.z-made-by--plain .z-made-by__link:hover{opacity:1;text-decoration:underline}.z-made-by--pill{display:inline-flex;align-items:center;gap:var(--zemios-space-2);padding:var(--zemios-space-2) var(--zemios-space-3.5);border-radius:var(--zemios-radius-full);font-size:var(--zemios-text-sm);background:var(--zemios-slate-900);color:var(--zemios-slate-200);min-height:44px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.z-made-by--pill:hover{background:var(--zemios-slate-950)}.z-made-by--pill .z-made-by__heart{width:.875rem;height:.875rem;color:var(--zemios-rose-400);flex-shrink:0}.z-made-by--pill .z-made-by__copy{display:inline-flex;align-items:baseline;gap:var(--zemios-space-1);flex-wrap:wrap}.z-made-by--pill .z-made-by__love{color:var(--zemios-rose-400);font-weight:500}.z-made-by--pill .z-made-by__brand{color:var(--zemios-text-inverse);font-weight:600}.z-made-by--pill.z-made-by--dark .z-made-by__heart,.z-made-by--pill.z-made-by--dark .z-made-by__love{color:var(--zemios-rose-300)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: MadeByComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-made-by', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (variant === 'pill') {
      <a
        href="https://zemios.com"
        target="_blank"
        rel="noopener noreferrer"
        class="z-made-by z-made-by--pill"
        [class.z-made-by--dark]="theme === 'dark'"
      >
        <svg class="z-made-by__heart" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path
            d="M12 21s-7-4.5-9.5-9C.5 8 3 4 6.5 4c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 3.5 0 6 4 4 8-2.5 4.5-9.5 9-9.5 9z"
          />
        </svg>
        <span class="z-made-by__copy">
          Made with <span class="z-made-by__love">love</span> by
          <span class="z-made-by__brand">zemios</span>
        </span>
      </a>
    } @else {
      <div class="z-made-by z-made-by--plain" [class.z-made-by--dark]="theme === 'dark'">
        <span class="z-made-by__text">made by</span>
        <a href="https://zemios.com" target="_blank" rel="noopener noreferrer" class="z-made-by__link"> Zemios </a>
      </div>
    }
  `, styles: [".z-made-by{font-family:var(--zemios-font-body);color:inherit;text-decoration:none;transition:opacity var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-made-by--plain{display:flex;align-items:center;justify-content:center;gap:var(--zemios-space-1);padding:var(--zemios-space-3) 0;font-size:var(--zemios-text-sm);letter-spacing:.04em;opacity:.55}.z-made-by--plain:hover{opacity:.85}.z-made-by--plain .z-made-by__text{font-weight:300}.z-made-by--plain .z-made-by__link{color:inherit;font-weight:600;text-decoration:none;transition:opacity var(--zemios-duration-fast) var(--zemios-easing-default)}.z-made-by--plain .z-made-by__link:hover{opacity:1;text-decoration:underline}.z-made-by--pill{display:inline-flex;align-items:center;gap:var(--zemios-space-2);padding:var(--zemios-space-2) var(--zemios-space-3.5);border-radius:var(--zemios-radius-full);font-size:var(--zemios-text-sm);background:var(--zemios-slate-900);color:var(--zemios-slate-200);min-height:44px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.z-made-by--pill:hover{background:var(--zemios-slate-950)}.z-made-by--pill .z-made-by__heart{width:.875rem;height:.875rem;color:var(--zemios-rose-400);flex-shrink:0}.z-made-by--pill .z-made-by__copy{display:inline-flex;align-items:baseline;gap:var(--zemios-space-1);flex-wrap:wrap}.z-made-by--pill .z-made-by__love{color:var(--zemios-rose-400);font-weight:500}.z-made-by--pill .z-made-by__brand{color:var(--zemios-text-inverse);font-weight:600}.z-made-by--pill.z-made-by--dark .z-made-by__heart,.z-made-by--pill.z-made-by--dark .z-made-by__love{color:var(--zemios-rose-300)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], theme: [{
                type: Input
            }] } });

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
class TitleComponent {
    accentText = false;
    /** @deprecated Use accentText instead */
    rainbowText = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: TitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: TitleComponent, isStandalone: true, selector: "z-title", inputs: { accentText: "accentText", rainbowText: "rainbowText" }, ngImport: i0, template: `
    <section class="z-title relative" style="padding: var(--zemios-space-12) 0;">
      <div class="z-title__inner">
        <p
          class="z-title__lead"
          [class.z-title__lead--accent]="accentText"
        >
          @if (accentText) {
            <span class="z-title__gradient"><ng-content></ng-content></span>
          } @else {
            <ng-content></ng-content>
          }
        </p>
      </div>
    </section>
  `, isInline: true, styles: [":host{display:block;color:var(--zemios-text-primary)}.z-title__inner{max-width:var(--zemios-content-narrow);margin:0 auto;padding:0 var(--zemios-space-6);text-align:center}.z-title__lead{font-family:var(--zemios-font-display);font-weight:300;font-size:var(--zemios-text-3xl);line-height:1.25;margin:0;letter-spacing:-.01em;color:var(--zemios-text-primary)}@media(min-width:768px){.z-title__lead{font-size:var(--zemios-text-4xl)}}@media(min-width:1024px){.z-title__lead{font-size:var(--zemios-text-5xl)}}.z-title__gradient{background:linear-gradient(135deg,var(--zemios-slate-200),var(--zemios-slate-400));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent;font-weight:600}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: TitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-title', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="z-title relative" style="padding: var(--zemios-space-12) 0;">
      <div class="z-title__inner">
        <p
          class="z-title__lead"
          [class.z-title__lead--accent]="accentText"
        >
          @if (accentText) {
            <span class="z-title__gradient"><ng-content></ng-content></span>
          } @else {
            <ng-content></ng-content>
          }
        </p>
      </div>
    </section>
  `, styles: [":host{display:block;color:var(--zemios-text-primary)}.z-title__inner{max-width:var(--zemios-content-narrow);margin:0 auto;padding:0 var(--zemios-space-6);text-align:center}.z-title__lead{font-family:var(--zemios-font-display);font-weight:300;font-size:var(--zemios-text-3xl);line-height:1.25;margin:0;letter-spacing:-.01em;color:var(--zemios-text-primary)}@media(min-width:768px){.z-title__lead{font-size:var(--zemios-text-4xl)}}@media(min-width:1024px){.z-title__lead{font-size:var(--zemios-text-5xl)}}.z-title__gradient{background:linear-gradient(135deg,var(--zemios-slate-200),var(--zemios-slate-400));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent;font-weight:600}\n"] }]
        }], propDecorators: { accentText: [{
                type: Input
            }], rainbowText: [{
                type: Input
            }] } });

/**
 * BadgeComponent — small status / category pill.
 *
 * Token-driven; renders inline-flex with `var(--zemios-*)` colour pairs.
 *
 * Usage:
 *   <z-badge variant="success">Activo</z-badge>
 *   <z-badge variant="primary" size="lg">Beta</z-badge>
 */
class BadgeComponent {
    variant = 'default';
    size = 'md';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: BadgeComponent, isStandalone: true, selector: "z-badge", inputs: { variant: "variant", size: "size" }, ngImport: i0, template: `
    <span
      class="z-badge"
      [class]="'z-badge z-badge--' + variant + ' z-badge--' + size"
    >
      <ng-content></ng-content>
    </span>
  `, isInline: true, styles: [":host{display:inline-block}.z-badge{display:inline-flex;align-items:center;justify-content:center;gap:var(--zemios-space-1);border-radius:var(--zemios-radius-full);font-family:var(--zemios-font-body);font-weight:500;line-height:1}.z-badge--sm{padding:var(--zemios-space-0.5) var(--zemios-space-2);font-size:.6875rem}.z-badge--md{padding:var(--zemios-space-1) var(--zemios-space-2.5);font-size:var(--zemios-text-xs)}.z-badge--lg{padding:var(--zemios-space-1.5) var(--zemios-space-3);font-size:var(--zemios-text-sm)}.z-badge--default{background:var(--zemios-surface-overlay);color:var(--zemios-text-secondary);border:1px solid var(--zemios-border-default)}.z-badge--primary{background:var(--zemios-sky-100);color:var(--zemios-sky-700)}:host-context([data-theme=\"dark\"]) .z-badge--primary,:host-context(.dark) .z-badge--primary,[data-theme=dark] .z-badge--primary,.dark .z-badge--primary{background:var(--zemios-sky-900);color:var(--zemios-sky-200)}.z-badge--accent{background:var(--zemios-violet-100);color:var(--zemios-violet-700)}:host-context([data-theme=\"dark\"]) .z-badge--accent,:host-context(.dark) .z-badge--accent,[data-theme=dark] .z-badge--accent,.dark .z-badge--accent{background:var(--zemios-violet-900);color:var(--zemios-violet-200)}.z-badge--success{background:var(--zemios-success-bg);color:var(--zemios-success)}[data-theme=dark] .z-badge--success,.dark .z-badge--success{color:var(--zemios-success)}.z-badge--warning{background:var(--zemios-warning-bg);color:var(--zemios-warning)}.z-badge--error{background:var(--zemios-error-bg);color:var(--zemios-error)}.z-badge--info{background:var(--zemios-info-bg);color:var(--zemios-info)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-badge', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <span
      class="z-badge"
      [class]="'z-badge z-badge--' + variant + ' z-badge--' + size"
    >
      <ng-content></ng-content>
    </span>
  `, styles: [":host{display:inline-block}.z-badge{display:inline-flex;align-items:center;justify-content:center;gap:var(--zemios-space-1);border-radius:var(--zemios-radius-full);font-family:var(--zemios-font-body);font-weight:500;line-height:1}.z-badge--sm{padding:var(--zemios-space-0.5) var(--zemios-space-2);font-size:.6875rem}.z-badge--md{padding:var(--zemios-space-1) var(--zemios-space-2.5);font-size:var(--zemios-text-xs)}.z-badge--lg{padding:var(--zemios-space-1.5) var(--zemios-space-3);font-size:var(--zemios-text-sm)}.z-badge--default{background:var(--zemios-surface-overlay);color:var(--zemios-text-secondary);border:1px solid var(--zemios-border-default)}.z-badge--primary{background:var(--zemios-sky-100);color:var(--zemios-sky-700)}:host-context([data-theme=\"dark\"]) .z-badge--primary,:host-context(.dark) .z-badge--primary,[data-theme=dark] .z-badge--primary,.dark .z-badge--primary{background:var(--zemios-sky-900);color:var(--zemios-sky-200)}.z-badge--accent{background:var(--zemios-violet-100);color:var(--zemios-violet-700)}:host-context([data-theme=\"dark\"]) .z-badge--accent,:host-context(.dark) .z-badge--accent,[data-theme=dark] .z-badge--accent,.dark .z-badge--accent{background:var(--zemios-violet-900);color:var(--zemios-violet-200)}.z-badge--success{background:var(--zemios-success-bg);color:var(--zemios-success)}[data-theme=dark] .z-badge--success,.dark .z-badge--success{color:var(--zemios-success)}.z-badge--warning{background:var(--zemios-warning-bg);color:var(--zemios-warning)}.z-badge--error{background:var(--zemios-error-bg);color:var(--zemios-error)}.z-badge--info{background:var(--zemios-info-bg);color:var(--zemios-info)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

/**
 * DividerComponent — token-driven horizontal / vertical rule.
 *
 * Usage:
 *   <z-divider></z-divider>
 *   <z-divider orientation="vertical"></z-divider>
 *   <z-divider spacing="lg"></z-divider>
 */
class DividerComponent {
    orientation = 'horizontal';
    spacing = 'md';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: DividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: DividerComponent, isStandalone: true, selector: "z-divider", inputs: { orientation: "orientation", spacing: "spacing" }, ngImport: i0, template: `
    <span
      class="z-divider"
      [class.z-divider--vertical]="orientation === 'vertical'"
      [class]="'z-divider z-divider--' + orientation + ' z-divider--space-' + spacing"
    ></span>
  `, isInline: true, styles: [":host{display:block}.z-divider{display:block;background:var(--zemios-border-default)}.z-divider--horizontal{width:100%;height:1px}.z-divider--vertical{width:1px;height:100%;min-height:1rem}.z-divider--space-none{margin:0}.z-divider--space-sm{margin:var(--zemios-space-2) 0}.z-divider--space-md{margin:var(--zemios-space-6) 0}.z-divider--space-lg{margin:var(--zemios-space-12) 0}.z-divider--space-xl{margin:var(--zemios-space-24) 0}.z-divider--vertical.z-divider--space-sm{margin:0 var(--zemios-space-2)}.z-divider--vertical.z-divider--space-md{margin:0 var(--zemios-space-6)}.z-divider--vertical.z-divider--space-lg{margin:0 var(--zemios-space-12)}.z-divider--vertical.z-divider--space-xl{margin:0 var(--zemios-space-24)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-divider', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <span
      class="z-divider"
      [class.z-divider--vertical]="orientation === 'vertical'"
      [class]="'z-divider z-divider--' + orientation + ' z-divider--space-' + spacing"
    ></span>
  `, styles: [":host{display:block}.z-divider{display:block;background:var(--zemios-border-default)}.z-divider--horizontal{width:100%;height:1px}.z-divider--vertical{width:1px;height:100%;min-height:1rem}.z-divider--space-none{margin:0}.z-divider--space-sm{margin:var(--zemios-space-2) 0}.z-divider--space-md{margin:var(--zemios-space-6) 0}.z-divider--space-lg{margin:var(--zemios-space-12) 0}.z-divider--space-xl{margin:var(--zemios-space-24) 0}.z-divider--vertical.z-divider--space-sm{margin:0 var(--zemios-space-2)}.z-divider--vertical.z-divider--space-md{margin:0 var(--zemios-space-6)}.z-divider--vertical.z-divider--space-lg{margin:0 var(--zemios-space-12)}.z-divider--vertical.z-divider--space-xl{margin:0 var(--zemios-space-24)}\n"] }]
        }], propDecorators: { orientation: [{
                type: Input
            }], spacing: [{
                type: Input
            }] } });

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
class InputComponent {
    type = 'text';
    placeholder = '';
    disabled = false;
    size = 'md';
    state = 'default';
    value = '';
    valueChange = new EventEmitter();
    onChangeFn = () => { };
    onTouchedFn = () => { };
    handleInput(event) {
        const target = event.target;
        this.value = target.value;
        this.valueChange.emit(this.value);
        this.onChangeFn(this.value);
    }
    writeValue(value) {
        this.value = value ?? '';
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: InputComponent, isStandalone: true, selector: "z-input", inputs: { type: "type", placeholder: "placeholder", disabled: "disabled", size: "size", state: "state", value: "value" }, outputs: { valueChange: "valueChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputComponent),
                multi: true,
            },
        ], ngImport: i0, template: `
    <input
      class="z-input"
      [class]="'z-input z-input--' + size + ' z-input--' + state"
      [type]="type"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [value]="value ?? ''"
      (input)="handleInput($event)"
      (blur)="onTouchedFn()"
    />
  `, isInline: true, styles: [":host{display:inline-block;width:100%}.z-input{display:block;width:100%;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);color:var(--zemios-text-primary);background:var(--zemios-surface-base);border:1px solid var(--zemios-border-default);border-radius:var(--zemios-radius-control);outline:none;transition:border-color var(--zemios-duration-fast) var(--zemios-easing-default),box-shadow var(--zemios-duration-fast) var(--zemios-easing-default)}.z-input::placeholder{color:var(--zemios-text-muted)}.z-input:focus{border-color:var(--zemios-border-focus);box-shadow:var(--zemios-shadow-ring)}.z-input:disabled{background:var(--zemios-surface-overlay);cursor:not-allowed;opacity:.6}.z-input--sm{padding:var(--zemios-space-1.5) var(--zemios-space-3);font-size:var(--zemios-text-xs)}.z-input--md{padding:var(--zemios-space-2.5) var(--zemios-space-3.5);font-size:var(--zemios-text-sm)}.z-input--lg{padding:var(--zemios-space-3) var(--zemios-space-4);font-size:var(--zemios-text-base)}.z-input--error{border-color:var(--zemios-error)}.z-input--error:focus{box-shadow:0 0 0 4px var(--zemios-error-bg)}.z-input--success{border-color:var(--zemios-success)}.z-input--success:focus{box-shadow:0 0 0 4px var(--zemios-success-bg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-input', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <input
      class="z-input"
      [class]="'z-input z-input--' + size + ' z-input--' + state"
      [type]="type"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [value]="value ?? ''"
      (input)="handleInput($event)"
      (blur)="onTouchedFn()"
    />
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InputComponent),
                            multi: true,
                        },
                    ], styles: [":host{display:inline-block;width:100%}.z-input{display:block;width:100%;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);color:var(--zemios-text-primary);background:var(--zemios-surface-base);border:1px solid var(--zemios-border-default);border-radius:var(--zemios-radius-control);outline:none;transition:border-color var(--zemios-duration-fast) var(--zemios-easing-default),box-shadow var(--zemios-duration-fast) var(--zemios-easing-default)}.z-input::placeholder{color:var(--zemios-text-muted)}.z-input:focus{border-color:var(--zemios-border-focus);box-shadow:var(--zemios-shadow-ring)}.z-input:disabled{background:var(--zemios-surface-overlay);cursor:not-allowed;opacity:.6}.z-input--sm{padding:var(--zemios-space-1.5) var(--zemios-space-3);font-size:var(--zemios-text-xs)}.z-input--md{padding:var(--zemios-space-2.5) var(--zemios-space-3.5);font-size:var(--zemios-text-sm)}.z-input--lg{padding:var(--zemios-space-3) var(--zemios-space-4);font-size:var(--zemios-text-base)}.z-input--error{border-color:var(--zemios-error)}.z-input--error:focus{box-shadow:0 0 0 4px var(--zemios-error-bg)}.z-input--success{border-color:var(--zemios-success)}.z-input--success:focus{box-shadow:0 0 0 4px var(--zemios-success-bg)}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], state: [{
                type: Input
            }], value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

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
class InputFieldComponent {
    label = '';
    hint = '';
    errorMessage = '';
    required = false;
    type = 'text';
    placeholder = '';
    disabled = false;
    size = 'md';
    state = 'default';
    value = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: InputFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: InputFieldComponent, isStandalone: true, selector: "z-input-field", inputs: { label: "label", hint: "hint", errorMessage: "errorMessage", required: "required", type: "type", placeholder: "placeholder", disabled: "disabled", size: "size", state: "state", value: "value" }, ngImport: i0, template: `
    <label class="z-input-field">
      <span class="z-input-field__label">
        {{ label }}
        @if (required) { <span class="z-input-field__required">*</span> }
      </span>
      <z-input
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [size]="size"
        [state]="state"
        [(value)]="value"
      ></z-input>
      @if (state === 'error' && errorMessage) {
        <span class="z-input-field__error">{{ errorMessage }}</span>
      } @else if (hint) {
        <span class="z-input-field__hint">{{ hint }}</span>
      }
    </label>
  `, isInline: true, styles: [":host{display:block}.z-input-field{display:flex;flex-direction:column;gap:var(--zemios-space-1);width:100%}.z-input-field__label{font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:500;color:var(--zemios-text-secondary)}.z-input-field__required{color:var(--zemios-error);margin-left:var(--zemios-space-1)}.z-input-field__hint{font-family:var(--zemios-font-body);font-size:var(--zemios-text-xs);color:var(--zemios-text-muted)}.z-input-field__error{font-family:var(--zemios-font-body);font-size:var(--zemios-text-xs);font-weight:500;color:var(--zemios-error)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: InputComponent, selector: "z-input", inputs: ["type", "placeholder", "disabled", "size", "state", "value"], outputs: ["valueChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: InputFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-input-field', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, InputComponent], template: `
    <label class="z-input-field">
      <span class="z-input-field__label">
        {{ label }}
        @if (required) { <span class="z-input-field__required">*</span> }
      </span>
      <z-input
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [size]="size"
        [state]="state"
        [(value)]="value"
      ></z-input>
      @if (state === 'error' && errorMessage) {
        <span class="z-input-field__error">{{ errorMessage }}</span>
      } @else if (hint) {
        <span class="z-input-field__hint">{{ hint }}</span>
      }
    </label>
  `, styles: [":host{display:block}.z-input-field{display:flex;flex-direction:column;gap:var(--zemios-space-1);width:100%}.z-input-field__label{font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:500;color:var(--zemios-text-secondary)}.z-input-field__required{color:var(--zemios-error);margin-left:var(--zemios-space-1)}.z-input-field__hint{font-family:var(--zemios-font-body);font-size:var(--zemios-text-xs);color:var(--zemios-text-muted)}.z-input-field__error{font-family:var(--zemios-font-body);font-size:var(--zemios-text-xs);font-weight:500;color:var(--zemios-error)}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], hint: [{
                type: Input
            }], errorMessage: [{
                type: Input
            }], required: [{
                type: Input
            }], type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], state: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

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
class LogoComponent {
    variant;
    titleVisible = true;
    theme = 'dark';
    logoSrc = 'images/zemios_logo.svg';
    titleSrc = 'images/zemios_title_simple.svg';
    fullLogoSrc;
    routerLink = '/';
    alt = 'Zemios';
    get src() {
        if (this.variant === 'full' && this.fullLogoSrc)
            return this.fullLogoSrc;
        return this.logoSrc;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: LogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: LogoComponent, isStandalone: true, selector: "z-logo", inputs: { variant: "variant", titleVisible: "titleVisible", theme: "theme", logoSrc: "logoSrc", titleSrc: "titleSrc", fullLogoSrc: "fullLogoSrc", routerLink: "routerLink", alt: "alt" }, ngImport: i0, template: `
    <div class="z-logo">
      <!-- Icon (always shown when variant !== 'full') -->
      @if (variant !== 'full') {
        <img
          [src]="logoSrc"
          [routerLink]="routerLink"
          [alt]="alt"
          class="z-logo__icon"
          [class.z-logo__icon--dark]="theme === 'dark'"
        />
      }

      <!-- Title (shown on desktop / when variant includes it) -->
      @if (variant !== 'icon') {
        <img
          [src]="titleSrc"
          [routerLink]="routerLink"
          [alt]="alt"
          class="z-logo__title"
          [class.z-logo__title--hidden]="!titleVisible"
          [class.z-logo__title--gold-filter]="theme === 'light'"
        />
      }

      <!-- Full logo -->
      @if (variant === 'full' && fullLogoSrc) {
        <img
          [src]="fullLogoSrc"
          [routerLink]="routerLink"
          [alt]="alt"
          class="z-logo__title"
        />
      }
    </div>
  `, isInline: true, styles: [":host{display:inline-flex;align-items:center}.z-logo{display:inline-flex;align-items:center;gap:var(--zemios-space-2)}.z-logo__icon,.z-logo__title{height:2rem;width:auto;display:block;cursor:pointer}.z-logo__icon--dark{filter:brightness(1.05)}.z-logo__title{max-width:200px;opacity:1;transition:opacity var(--zemios-duration-base) var(--zemios-easing-default)}.z-logo__title--hidden{display:none}.z-logo__title--gold-filter{filter:invert(1)}\n"], dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: LogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-logo', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterModule], template: `
    <div class="z-logo">
      <!-- Icon (always shown when variant !== 'full') -->
      @if (variant !== 'full') {
        <img
          [src]="logoSrc"
          [routerLink]="routerLink"
          [alt]="alt"
          class="z-logo__icon"
          [class.z-logo__icon--dark]="theme === 'dark'"
        />
      }

      <!-- Title (shown on desktop / when variant includes it) -->
      @if (variant !== 'icon') {
        <img
          [src]="titleSrc"
          [routerLink]="routerLink"
          [alt]="alt"
          class="z-logo__title"
          [class.z-logo__title--hidden]="!titleVisible"
          [class.z-logo__title--gold-filter]="theme === 'light'"
        />
      }

      <!-- Full logo -->
      @if (variant === 'full' && fullLogoSrc) {
        <img
          [src]="fullLogoSrc"
          [routerLink]="routerLink"
          [alt]="alt"
          class="z-logo__title"
        />
      }
    </div>
  `, styles: [":host{display:inline-flex;align-items:center}.z-logo{display:inline-flex;align-items:center;gap:var(--zemios-space-2)}.z-logo__icon,.z-logo__title{height:2rem;width:auto;display:block;cursor:pointer}.z-logo__icon--dark{filter:brightness(1.05)}.z-logo__title{max-width:200px;opacity:1;transition:opacity var(--zemios-duration-base) var(--zemios-easing-default)}.z-logo__title--hidden{display:none}.z-logo__title--gold-filter{filter:invert(1)}\n"] }]
        }], propDecorators: { variant: [{
                type: Input,
                args: [{ required: true }]
            }], titleVisible: [{
                type: Input
            }], theme: [{
                type: Input
            }], logoSrc: [{
                type: Input
            }], titleSrc: [{
                type: Input
            }], fullLogoSrc: [{
                type: Input
            }], routerLink: [{
                type: Input
            }], alt: [{
                type: Input
            }] } });

/**
 * NavItemComponent — single nav-link with a brand-violet underline.
 *
 * Token-driven; reads `--zemios-accent` for the underline / hover
 * colour so a single token change re-themes every Zemios product.
 *
 * Usage:
 *   <z-nav-item [page]="{ title: 'Inicio', url: '' }"></z-nav-item>
 */
class NavItemComponent {
    router;
    page;
    constructor(router) {
        this.router = router;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: NavItemComponent, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: NavItemComponent, isStandalone: true, selector: "z-nav-item", inputs: { page: "page" }, ngImport: i0, template: `
    <a
      [routerLink]="page.url"
      class="z-nav-link"
      [class.z-nav-link--active]="router.url === '/' + page.url"
    >
      {{ page.title | translate }}
    </a>
  `, isInline: true, styles: [":host{display:inline-block}.z-nav-link{position:relative;display:inline-block;padding-bottom:var(--zemios-space-1);font-family:var(--zemios-font-body);font-weight:600;font-size:var(--zemios-text-base);color:inherit;text-decoration:none;transition:color var(--zemios-duration-base) var(--zemios-easing-default)}.z-nav-link:after{content:\"\";position:absolute;left:50%;bottom:0;height:2px;width:0;transform:translate(-50%);background:var(--zemios-accent);border-radius:var(--zemios-radius-full);transition:width var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-nav-link:hover{color:var(--zemios-accent);text-decoration:none}.z-nav-link:hover:after{width:100%}.z-nav-link--active{color:var(--zemios-accent)}.z-nav-link--active:after{width:100%;background:var(--zemios-accent)}\n"], dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: NavItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-nav-item', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterModule, TranslateModule], template: `
    <a
      [routerLink]="page.url"
      class="z-nav-link"
      [class.z-nav-link--active]="router.url === '/' + page.url"
    >
      {{ page.title | translate }}
    </a>
  `, styles: [":host{display:inline-block}.z-nav-link{position:relative;display:inline-block;padding-bottom:var(--zemios-space-1);font-family:var(--zemios-font-body);font-weight:600;font-size:var(--zemios-text-base);color:inherit;text-decoration:none;transition:color var(--zemios-duration-base) var(--zemios-easing-default)}.z-nav-link:after{content:\"\";position:absolute;left:50%;bottom:0;height:2px;width:0;transform:translate(-50%);background:var(--zemios-accent);border-radius:var(--zemios-radius-full);transition:width var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-nav-link:hover{color:var(--zemios-accent);text-decoration:none}.z-nav-link:hover:after{width:100%}.z-nav-link--active{color:var(--zemios-accent)}.z-nav-link--active:after{width:100%;background:var(--zemios-accent)}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.Router }], propDecorators: { page: [{
                type: Input,
                args: [{ required: true }]
            }] } });

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
class SpinnerComponent {
    size = 'md';
    label = 'Cargando…';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: SpinnerComponent, isStandalone: true, selector: "z-spinner", inputs: { size: "size", label: "label" }, ngImport: i0, template: `
    <span
      class="z-spinner"
      [class]="'z-spinner z-spinner--' + size"
      role="status"
      [attr.aria-label]="label"
    ></span>
  `, isInline: true, styles: [":host{display:inline-block;color:var(--zemios-primary)}.z-spinner{display:inline-block;border:2px solid currentColor;border-right-color:transparent;border-radius:var(--zemios-radius-full);animation:zemios-spin var(--zemios-duration-slower) linear infinite;opacity:.7}.z-spinner--sm{width:12px;height:12px}.z-spinner--md{width:18px;height:18px}.z-spinner--lg{width:28px;height:28px;border-width:3px}@keyframes zemios-spin{to{transform:rotate(360deg)}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-spinner', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <span
      class="z-spinner"
      [class]="'z-spinner z-spinner--' + size"
      role="status"
      [attr.aria-label]="label"
    ></span>
  `, styles: [":host{display:inline-block;color:var(--zemios-primary)}.z-spinner{display:inline-block;border:2px solid currentColor;border-right-color:transparent;border-radius:var(--zemios-radius-full);animation:zemios-spin var(--zemios-duration-slower) linear infinite;opacity:.7}.z-spinner--sm{width:12px;height:12px}.z-spinner--md{width:18px;height:18px}.z-spinner--lg{width:28px;height:28px;border-width:3px}@keyframes zemios-spin{to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], label: [{
                type: Input
            }] } });

const PRISM_VARIANTS = ['aqua', 'sunset', 'lime', 'plasma', 'solar', 'cyber'];
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
class CardComponent {
    /** Variant selector: `default` | `prism` | `cta` | `outline` */
    variant;
    title;
    description;
    icon;
    iconClass;
    layout = 'vertical';
    clickable = false;
    /** CTA-specific props. `ctaRouterLink` is a single path segment because it is
     *  forwarded to `z-button`, whose own `routerLink` input accepts `string`. */
    ctaType;
    ctaLabel;
    ctaHref;
    ctaRouterLink;
    ctaIcon;
    ctaVariant = 'base';
    /** Emits when the card is clicked (when `clickable`). */
    cardClick = new EventEmitter();
    /** Random prism palette chosen at mount time. */
    prismVariant;
    ngOnInit() {
        if (this.variant === 'prism') {
            const idx = Math.floor(Math.random() * PRISM_VARIANTS.length);
            this.prismVariant = PRISM_VARIANTS[idx];
        }
    }
    handleClick() {
        if (this.clickable)
            this.cardClick.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: CardComponent, isStandalone: true, selector: "z-card", inputs: { variant: "variant", title: "title", description: "description", icon: "icon", iconClass: "iconClass", layout: "layout", clickable: "clickable", ctaType: "ctaType", ctaLabel: "ctaLabel", ctaHref: "ctaHref", ctaRouterLink: "ctaRouterLink", ctaIcon: "ctaIcon", ctaVariant: "ctaVariant" }, outputs: { cardClick: "cardClick" }, ngImport: i0, template: `
    @switch (variant) {
      @case ('prism') {
        <div
          class="z-prism-card"
          [ngClass]="[
            prismVariant ? 'z-prism-card--' + prismVariant : '',
            layout === 'horizontal' ? 'z-prism-card--horizontal' : '',
          ]"
        >
          @if (icon) {
            <div class="z-prism-icon" [style.margin-bottom.px]="layout === 'vertical' ? 12 : 0">
              <img [src]="icon" class="z-prism-icon__img" [alt]="title || 'icon'" />
            </div>
          } @else if (iconClass) {
            <div class="z-prism-icon" [style.margin-bottom.px]="layout === 'vertical' ? 12 : 0">
              <div class="z-prism-icon__box">
                <i [class]="iconClass"></i>
              </div>
            </div>
          }

          <div [style.flex]="layout === 'horizontal' ? '1' : null">
            <p class="z-prism-card__title">{{ title }}</p>
              <p class="z-prism-card__text">{{ description }}</p>
          </div>
        </div>
      }

      @case ('cta') {
        <div
          class="z-cta-card"
          [ngClass]="[
            ctaType ? 'z-cta-card--' + ctaType : '',
            clickable ? 'cursor-pointer' : '',
          ]"
          (click)="handleClick()"
        >
          <div>
            <h3 class="z-cta-card__title">{{ title }}</h3>
            <p class="z-cta-card__text">{{ description }}</p>
          </div>

          @if (ctaLabel) {
            <z-button [href]="ctaHref" [routerLink]="ctaRouterLink" [icon]="ctaIcon" [variant]="ctaVariant">
              {{ ctaLabel }}
            </z-button>
          }
        </div>
      }

      @case ('outline') {
        <div class="z-card" [class.cursor-pointer]="clickable" (click)="handleClick()">
          <div class="z-card__body">
            @if (title) {
              <h3 class="z-cta-card__title">{{ title }}</h3>
            }
            @if (description) {
              <p class="z-cta-card__text">{{ description }}</p>
            }
            <ng-content></ng-content>
          </div>
        </div>
      }

      @default {
        <div class="z-card" [class.cursor-pointer]="clickable" (click)="handleClick()">
          <div class="z-card__body">
            @if (title) {
              <h3 class="z-cta-card__title">{{ title }}</h3>
            }
            @if (description) {
              <p class="z-cta-card__text">{{ description }}</p>
            }
            <ng-content></ng-content>
          </div>
        </div>
      }
    }
  `, isInline: true, styles: [":host{display:block}.z-card{position:relative;overflow:hidden;border-radius:var(--zemios-radius-card);background:var(--zemios-surface-base);border:1px solid var(--zemios-border-default);box-shadow:var(--zemios-shadow-sm);transition:transform var(--zemios-duration-base) var(--zemios-easing-default),box-shadow var(--zemios-duration-base) var(--zemios-easing-default),border-color var(--zemios-duration-base) var(--zemios-easing-default)}.z-card:hover{transform:translateY(-4px);box-shadow:var(--zemios-shadow-lg);border-color:var(--zemios-border-strong)}.z-card__body{padding:var(--zemios-space-6)}.z-cta-card{height:100%;width:100%;border-radius:var(--zemios-radius-xl);padding:var(--zemios-space-5) var(--zemios-space-6);display:flex;flex-direction:column;gap:var(--zemios-space-4);justify-content:space-between;background:var(--zemios-surface-base);border:1px solid var(--zemios-border-default);box-shadow:var(--zemios-shadow-sm);position:relative;overflow:hidden}.z-cta-card--support{background:radial-gradient(circle at 0% 0%,var(--zemios-violet-100),transparent 65%),var(--zemios-surface-base)}.z-cta-card--business{background:radial-gradient(circle at 100% 100%,var(--zemios-violet-100),transparent 65%),var(--zemios-surface-base)}.z-cta-card__title{margin:0 0 var(--zemios-space-1);font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:600;color:var(--zemios-text-primary)}.z-cta-card__text{margin:0;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);line-height:1.5;color:var(--zemios-text-secondary)}.z-prism-card{position:relative;border-radius:var(--zemios-radius-2xl);padding:var(--zemios-space-5) var(--zemios-space-6);overflow:hidden;background:var(--zemios-surface-base);transition:transform var(--zemios-duration-base) var(--zemios-easing-default),box-shadow var(--zemios-duration-base) var(--zemios-easing-default),border-color var(--zemios-duration-base) var(--zemios-easing-default)}.z-prism-card:before{content:\"\";position:absolute;inset:-40%;background:conic-gradient(from 220deg,#38bdf80f,#94a3b814,#38bdf80f,#94a3b814);opacity:.5;animation:zemios-prism-sweep 18s linear infinite;pointer-events:none}.z-prism-card:after{content:\"\";position:absolute;inset:0;border-radius:inherit;border:1px solid var(--zemios-border-default);box-shadow:var(--zemios-shadow-sm),inset 0 0 0 1px var(--zemios-slate-50);pointer-events:none}.z-prism-card__title{margin:0 0 var(--zemios-space-1);font-family:var(--zemios-font-body);font-size:var(--zemios-text-lg);font-weight:600;color:var(--zemios-sky-100)}.z-prism-card__text{margin:0;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);color:var(--zemios-slate-300)}.z-prism-card--horizontal{display:flex;align-items:flex-start;gap:var(--zemios-space-4)}@keyframes zemios-prism-sweep{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.z-prism-card--aqua{background:radial-gradient(circle at 20% 30%,var(--zemios-sky-500) 8%,transparent 70%),linear-gradient(160deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--sunset{background:radial-gradient(circle at 85% 30%,var(--zemios-violet-500) 6%,transparent 70%),linear-gradient(120deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--lime{background:radial-gradient(circle at 0% 80%,var(--zemios-sky-500) 6%,transparent 70%),linear-gradient(140deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--plasma{background:radial-gradient(circle at 50% 0%,var(--zemios-violet-500) 6%,transparent 70%),linear-gradient(180deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--solar{background:radial-gradient(circle at 70% 90%,var(--zemios-gold-400) 6%,transparent 70%),linear-gradient(150deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--cyber{background:linear-gradient(145deg,var(--zemios-slate-50),var(--zemios-surface-base));border-color:var(--zemios-border-default)}.z-prism-icon{position:relative;display:inline-flex;border-radius:var(--zemios-radius-lg);padding:4px;background:transparent;isolation:isolate}.z-prism-icon:before{content:\"\";position:absolute;inset:0;border-radius:inherit;padding:3px;background:conic-gradient(from 0deg,var(--zemios-rose-500),var(--zemios-gold-400),var(--zemios-success),var(--zemios-sky-500),var(--zemios-violet-500),var(--zemios-rose-500));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;animation:zemios-spin 8s linear infinite;z-index:0}.z-prism-icon__img,.z-prism-icon__box{position:relative;z-index:1;width:3.5rem;height:3.5rem;border-radius:var(--zemios-radius-lg);background:var(--zemios-surface-overlay);padding:var(--zemios-space-3);display:flex;align-items:center;justify-content:center}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: ButtonComponent, selector: "z-button", inputs: ["href", "routerLink", "icon", "variant", "shape", "hasShadow", "disabled"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-card', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [NgClass, ButtonComponent], template: `
    @switch (variant) {
      @case ('prism') {
        <div
          class="z-prism-card"
          [ngClass]="[
            prismVariant ? 'z-prism-card--' + prismVariant : '',
            layout === 'horizontal' ? 'z-prism-card--horizontal' : '',
          ]"
        >
          @if (icon) {
            <div class="z-prism-icon" [style.margin-bottom.px]="layout === 'vertical' ? 12 : 0">
              <img [src]="icon" class="z-prism-icon__img" [alt]="title || 'icon'" />
            </div>
          } @else if (iconClass) {
            <div class="z-prism-icon" [style.margin-bottom.px]="layout === 'vertical' ? 12 : 0">
              <div class="z-prism-icon__box">
                <i [class]="iconClass"></i>
              </div>
            </div>
          }

          <div [style.flex]="layout === 'horizontal' ? '1' : null">
            <p class="z-prism-card__title">{{ title }}</p>
              <p class="z-prism-card__text">{{ description }}</p>
          </div>
        </div>
      }

      @case ('cta') {
        <div
          class="z-cta-card"
          [ngClass]="[
            ctaType ? 'z-cta-card--' + ctaType : '',
            clickable ? 'cursor-pointer' : '',
          ]"
          (click)="handleClick()"
        >
          <div>
            <h3 class="z-cta-card__title">{{ title }}</h3>
            <p class="z-cta-card__text">{{ description }}</p>
          </div>

          @if (ctaLabel) {
            <z-button [href]="ctaHref" [routerLink]="ctaRouterLink" [icon]="ctaIcon" [variant]="ctaVariant">
              {{ ctaLabel }}
            </z-button>
          }
        </div>
      }

      @case ('outline') {
        <div class="z-card" [class.cursor-pointer]="clickable" (click)="handleClick()">
          <div class="z-card__body">
            @if (title) {
              <h3 class="z-cta-card__title">{{ title }}</h3>
            }
            @if (description) {
              <p class="z-cta-card__text">{{ description }}</p>
            }
            <ng-content></ng-content>
          </div>
        </div>
      }

      @default {
        <div class="z-card" [class.cursor-pointer]="clickable" (click)="handleClick()">
          <div class="z-card__body">
            @if (title) {
              <h3 class="z-cta-card__title">{{ title }}</h3>
            }
            @if (description) {
              <p class="z-cta-card__text">{{ description }}</p>
            }
            <ng-content></ng-content>
          </div>
        </div>
      }
    }
  `, styles: [":host{display:block}.z-card{position:relative;overflow:hidden;border-radius:var(--zemios-radius-card);background:var(--zemios-surface-base);border:1px solid var(--zemios-border-default);box-shadow:var(--zemios-shadow-sm);transition:transform var(--zemios-duration-base) var(--zemios-easing-default),box-shadow var(--zemios-duration-base) var(--zemios-easing-default),border-color var(--zemios-duration-base) var(--zemios-easing-default)}.z-card:hover{transform:translateY(-4px);box-shadow:var(--zemios-shadow-lg);border-color:var(--zemios-border-strong)}.z-card__body{padding:var(--zemios-space-6)}.z-cta-card{height:100%;width:100%;border-radius:var(--zemios-radius-xl);padding:var(--zemios-space-5) var(--zemios-space-6);display:flex;flex-direction:column;gap:var(--zemios-space-4);justify-content:space-between;background:var(--zemios-surface-base);border:1px solid var(--zemios-border-default);box-shadow:var(--zemios-shadow-sm);position:relative;overflow:hidden}.z-cta-card--support{background:radial-gradient(circle at 0% 0%,var(--zemios-violet-100),transparent 65%),var(--zemios-surface-base)}.z-cta-card--business{background:radial-gradient(circle at 100% 100%,var(--zemios-violet-100),transparent 65%),var(--zemios-surface-base)}.z-cta-card__title{margin:0 0 var(--zemios-space-1);font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:600;color:var(--zemios-text-primary)}.z-cta-card__text{margin:0;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);line-height:1.5;color:var(--zemios-text-secondary)}.z-prism-card{position:relative;border-radius:var(--zemios-radius-2xl);padding:var(--zemios-space-5) var(--zemios-space-6);overflow:hidden;background:var(--zemios-surface-base);transition:transform var(--zemios-duration-base) var(--zemios-easing-default),box-shadow var(--zemios-duration-base) var(--zemios-easing-default),border-color var(--zemios-duration-base) var(--zemios-easing-default)}.z-prism-card:before{content:\"\";position:absolute;inset:-40%;background:conic-gradient(from 220deg,#38bdf80f,#94a3b814,#38bdf80f,#94a3b814);opacity:.5;animation:zemios-prism-sweep 18s linear infinite;pointer-events:none}.z-prism-card:after{content:\"\";position:absolute;inset:0;border-radius:inherit;border:1px solid var(--zemios-border-default);box-shadow:var(--zemios-shadow-sm),inset 0 0 0 1px var(--zemios-slate-50);pointer-events:none}.z-prism-card__title{margin:0 0 var(--zemios-space-1);font-family:var(--zemios-font-body);font-size:var(--zemios-text-lg);font-weight:600;color:var(--zemios-sky-100)}.z-prism-card__text{margin:0;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);color:var(--zemios-slate-300)}.z-prism-card--horizontal{display:flex;align-items:flex-start;gap:var(--zemios-space-4)}@keyframes zemios-prism-sweep{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.z-prism-card--aqua{background:radial-gradient(circle at 20% 30%,var(--zemios-sky-500) 8%,transparent 70%),linear-gradient(160deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--sunset{background:radial-gradient(circle at 85% 30%,var(--zemios-violet-500) 6%,transparent 70%),linear-gradient(120deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--lime{background:radial-gradient(circle at 0% 80%,var(--zemios-sky-500) 6%,transparent 70%),linear-gradient(140deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--plasma{background:radial-gradient(circle at 50% 0%,var(--zemios-violet-500) 6%,transparent 70%),linear-gradient(180deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--solar{background:radial-gradient(circle at 70% 90%,var(--zemios-gold-400) 6%,transparent 70%),linear-gradient(150deg,var(--zemios-surface-base),var(--zemios-slate-50))}.z-prism-card--cyber{background:linear-gradient(145deg,var(--zemios-slate-50),var(--zemios-surface-base));border-color:var(--zemios-border-default)}.z-prism-icon{position:relative;display:inline-flex;border-radius:var(--zemios-radius-lg);padding:4px;background:transparent;isolation:isolate}.z-prism-icon:before{content:\"\";position:absolute;inset:0;border-radius:inherit;padding:3px;background:conic-gradient(from 0deg,var(--zemios-rose-500),var(--zemios-gold-400),var(--zemios-success),var(--zemios-sky-500),var(--zemios-violet-500),var(--zemios-rose-500));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;animation:zemios-spin 8s linear infinite;z-index:0}.z-prism-icon__img,.z-prism-icon__box{position:relative;z-index:1;width:3.5rem;height:3.5rem;border-radius:var(--zemios-radius-lg);background:var(--zemios-surface-overlay);padding:var(--zemios-space-3);display:flex;align-items:center;justify-content:center}\n"] }]
        }], propDecorators: { variant: [{
                type: Input,
                args: [{ required: true }]
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], layout: [{
                type: Input
            }], clickable: [{
                type: Input
            }], ctaType: [{
                type: Input
            }], ctaLabel: [{
                type: Input
            }], ctaHref: [{
                type: Input
            }], ctaRouterLink: [{
                type: Input
            }], ctaIcon: [{
                type: Input
            }], ctaVariant: [{
                type: Input
            }], cardClick: [{
                type: Output
            }] } });

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
class NavBarComponent {
    router;
    pages;
    logoVariant = 'iconWithTitle';
    mobileLogoSrc = 'images/zemios_title_simple.svg';
    theme = 'dark';
    menuVisible = false;
    scrolled = true;
    constructor(router) {
        this.router = router;
        if (typeof window !== 'undefined') {
            this.scrolled = this.isNearEdge();
        }
    }
    onScroll() {
        this.scrolled = this.isNearEdge();
    }
    toggleMenu() {
        this.menuVisible = !this.menuVisible;
    }
    closeMenu() {
        this.menuVisible = false;
    }
    isNearEdge() {
        const nearTop = window.scrollY < 50;
        const nearBottom = window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight - 50;
        return nearTop || nearBottom;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: NavBarComponent, deps: [{ token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: NavBarComponent, isStandalone: true, selector: "z-nav-bar", inputs: { pages: "pages", logoVariant: "logoVariant", mobileLogoSrc: "mobileLogoSrc", theme: "theme" }, host: { listeners: { "window:scroll": "onScroll()" } }, ngImport: i0, template: `
    <!-- DESKTOP NAV -->
    <nav
      class="z-nav z-nav--{{ theme }}"
      [class.z-nav--hidden]="scrolled"
    >
      <div class="z-nav__desktop">
        <z-logo [variant]="logoVariant" [titleVisible]="true" [theme]="theme"></z-logo>

        <ul class="z-nav__links">
          @for (page of pages; track page.url) {
            <li>
              <z-nav-item [page]="page"></z-nav-item>
            </li>
          }
        </ul>
      </div>

      <div class="z-nav__mobile">
        <button class="z-nav__menu-button" (click)="toggleMenu()" aria-label="Abrir menú">
          <i class="bi bi-list"></i>
        </button>

        <img
          [src]="mobileLogoSrc"
          [routerLink]="'/'"
          alt="Logo"
          style="height: 1.5rem; cursor: pointer; opacity: 0.95"
        />

        @if (menuVisible) {
          <ul class="z-nav__mobile-menu">
            @for (page of pages; track page.url) {
              <li
                [routerLink]="page.url"
                [class.is-active]="router.url === '/' + page.url"
                (click)="closeMenu()"
              >
                @if (page.icon) {
                  <i class="bi bi-{{ page.icon }} mr-2 opacity-50"></i>
                }
                {{ page.title | translate }}
              </li>
            }
          </ul>
        }
      </div>
    </nav>
  `, isInline: true, styles: [":host{display:block;position:sticky;top:0;z-index:var(--zemios-z-header)}.z-nav{position:fixed;top:0;left:0;right:0;z-index:var(--zemios-z-header);display:flex;align-items:center;justify-content:space-between;padding:var(--zemios-space-4) var(--zemios-space-10);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:transform var(--zemios-duration-moderate) var(--zemios-easing-default),opacity var(--zemios-duration-moderate) var(--zemios-easing-default),background var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-nav--dark{background:#020617cc;border-bottom:1px solid rgba(255,255,255,.08);color:var(--zemios-text-inverse)}.z-nav--light{background:#ffffffd9;border-bottom:1px solid var(--zemios-border-default);color:var(--zemios-text-primary);box-shadow:var(--zemios-shadow-sm)}.z-nav--hidden{opacity:0;transform:translateY(-100%)}.z-nav__desktop{display:none;width:100%;align-items:center;justify-content:space-between}@media(min-width:768px){.z-nav__desktop{display:flex}}.z-nav__mobile{display:flex;width:100%;align-items:center;justify-content:space-between}@media(min-width:768px){.z-nav__mobile{display:none}}.z-nav__links{display:flex;align-items:center;gap:var(--zemios-space-8);margin:0;padding:0;list-style:none;font-family:var(--zemios-font-body);font-weight:600;font-size:var(--zemios-text-base)}.z-nav__menu-button{background:transparent;border:0;cursor:pointer;font-size:var(--zemios-text-3xl);color:inherit;padding:0}.z-nav__mobile-menu{position:absolute;left:0;right:0;top:100%;margin-top:var(--zemios-space-4);padding:var(--zemios-space-2) 0;list-style:none;background:var(--zemios-slate-950);color:var(--zemios-slate-300);font-family:var(--zemios-font-body);font-weight:600;font-size:var(--zemios-text-lg);border-bottom:1px solid var(--zemios-border-glass);border-radius:0 0 var(--zemios-radius-2xl) var(--zemios-radius-2xl);box-shadow:var(--zemios-shadow-2xl);animation:zemios-slide-down var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-nav__mobile-menu li{cursor:pointer;padding:var(--zemios-space-3) var(--zemios-space-6);transition:background var(--zemios-duration-fast) var(--zemios-easing-default),color var(--zemios-duration-fast) var(--zemios-easing-default)}.z-nav__mobile-menu li:hover,.z-nav__mobile-menu li.is-active{background:#ffffff0f;color:var(--zemios-text-inverse)}@keyframes zemios-slide-down{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "component", type: LogoComponent, selector: "z-logo", inputs: ["variant", "titleVisible", "theme", "logoSrc", "titleSrc", "fullLogoSrc", "routerLink", "alt"] }, { kind: "component", type: NavItemComponent, selector: "z-nav-item", inputs: ["page"] }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: NavBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-nav-bar', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                        CommonModule,
                        RouterModule,
                        TranslateModule,
                        LogoComponent,
                        NavItemComponent,
                    ], template: `
    <!-- DESKTOP NAV -->
    <nav
      class="z-nav z-nav--{{ theme }}"
      [class.z-nav--hidden]="scrolled"
    >
      <div class="z-nav__desktop">
        <z-logo [variant]="logoVariant" [titleVisible]="true" [theme]="theme"></z-logo>

        <ul class="z-nav__links">
          @for (page of pages; track page.url) {
            <li>
              <z-nav-item [page]="page"></z-nav-item>
            </li>
          }
        </ul>
      </div>

      <div class="z-nav__mobile">
        <button class="z-nav__menu-button" (click)="toggleMenu()" aria-label="Abrir menú">
          <i class="bi bi-list"></i>
        </button>

        <img
          [src]="mobileLogoSrc"
          [routerLink]="'/'"
          alt="Logo"
          style="height: 1.5rem; cursor: pointer; opacity: 0.95"
        />

        @if (menuVisible) {
          <ul class="z-nav__mobile-menu">
            @for (page of pages; track page.url) {
              <li
                [routerLink]="page.url"
                [class.is-active]="router.url === '/' + page.url"
                (click)="closeMenu()"
              >
                @if (page.icon) {
                  <i class="bi bi-{{ page.icon }} mr-2 opacity-50"></i>
                }
                {{ page.title | translate }}
              </li>
            }
          </ul>
        }
      </div>
    </nav>
  `, styles: [":host{display:block;position:sticky;top:0;z-index:var(--zemios-z-header)}.z-nav{position:fixed;top:0;left:0;right:0;z-index:var(--zemios-z-header);display:flex;align-items:center;justify-content:space-between;padding:var(--zemios-space-4) var(--zemios-space-10);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:transform var(--zemios-duration-moderate) var(--zemios-easing-default),opacity var(--zemios-duration-moderate) var(--zemios-easing-default),background var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-nav--dark{background:#020617cc;border-bottom:1px solid rgba(255,255,255,.08);color:var(--zemios-text-inverse)}.z-nav--light{background:#ffffffd9;border-bottom:1px solid var(--zemios-border-default);color:var(--zemios-text-primary);box-shadow:var(--zemios-shadow-sm)}.z-nav--hidden{opacity:0;transform:translateY(-100%)}.z-nav__desktop{display:none;width:100%;align-items:center;justify-content:space-between}@media(min-width:768px){.z-nav__desktop{display:flex}}.z-nav__mobile{display:flex;width:100%;align-items:center;justify-content:space-between}@media(min-width:768px){.z-nav__mobile{display:none}}.z-nav__links{display:flex;align-items:center;gap:var(--zemios-space-8);margin:0;padding:0;list-style:none;font-family:var(--zemios-font-body);font-weight:600;font-size:var(--zemios-text-base)}.z-nav__menu-button{background:transparent;border:0;cursor:pointer;font-size:var(--zemios-text-3xl);color:inherit;padding:0}.z-nav__mobile-menu{position:absolute;left:0;right:0;top:100%;margin-top:var(--zemios-space-4);padding:var(--zemios-space-2) 0;list-style:none;background:var(--zemios-slate-950);color:var(--zemios-slate-300);font-family:var(--zemios-font-body);font-weight:600;font-size:var(--zemios-text-lg);border-bottom:1px solid var(--zemios-border-glass);border-radius:0 0 var(--zemios-radius-2xl) var(--zemios-radius-2xl);box-shadow:var(--zemios-shadow-2xl);animation:zemios-slide-down var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-nav__mobile-menu li{cursor:pointer;padding:var(--zemios-space-3) var(--zemios-space-6);transition:background var(--zemios-duration-fast) var(--zemios-easing-default),color var(--zemios-duration-fast) var(--zemios-easing-default)}.z-nav__mobile-menu li:hover,.z-nav__mobile-menu li.is-active{background:#ffffff0f;color:var(--zemios-text-inverse)}@keyframes zemios-slide-down{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.Router }], propDecorators: { pages: [{
                type: Input,
                args: [{ required: true }]
            }], logoVariant: [{
                type: Input
            }], mobileLogoSrc: [{
                type: Input
            }], theme: [{
                type: Input
            }], onScroll: [{
                type: HostListener,
                args: ['window:scroll']
            }] } });

class HeroComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: HeroComponent, isStandalone: true, selector: "z-hero", ngImport: i0, template: "<section class=\"hero-section relative flex h-screen items-center justify-center overflow-hidden\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow\"\r\n      style=\"top: -100px; left: -100px; width: 500px; height: 500px; opacity: 0.5\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower\"\r\n      style=\"right: -50px; bottom: -50px; width: 400px; height: 400px; opacity: 0.4\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow\"\r\n      style=\"top: 40%; left: 60%; width: 300px; height: 300px; opacity: 0.35\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower\"\r\n      style=\"top: 10%; right: 10%; width: 450px; height: 450px; opacity: 0.45\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow\"\r\n      style=\"bottom: 20%; left: 5%; width: 350px; height: 350px; opacity: 0.4\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower\"\r\n      style=\"top: 60%; right: 30%; width: 300px; height: 300px; opacity: 0.35\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 px-6 text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span class=\"hero-badge\" data-aos=\"fade-down\" data-aos-delay=\"200\">Digital Future</span>\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-10 h-auto\"\r\n      style=\"width: 50vw; max-width: 500px\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1 class=\"hero-headline\" data-aos=\"fade-up\" data-aos-delay=\"400\">\r\n      {{ 'hero.headline' | translate }}\r\n      <span class=\"z-text-brand-gradient\">{{ 'hero.headlineAccent' | translate }}</span>\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p class=\"hero-subtitle\" data-aos=\"fade-up\" data-aos-delay=\"600\">\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"hero-scroll\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-offset=\"-200\"\r\n    data-aos-delay=\"2500\"\r\n  >\r\n    <span class=\"hero-scroll__label\">Scroll</span>\r\n    <div class=\"hero-scroll__indicator\">\r\n      <div class=\"hero-scroll__dot\"></div>\r\n    </div>\r\n  </div>\r\n</section>", styles: ["@keyframes zemios-float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes zemios-float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}.animate-float-slow{animation:zemios-float-slow 6s ease-in-out infinite}.animate-float-slower{animation:zemios-float-slower 8s ease-in-out infinite}.hero-logo{filter:drop-shadow(0 0 30px rgba(255,255,255,.1));animation:zemios-logo-breathe 4s ease-in-out infinite}@keyframes zemios-logo-breathe{0%,to{filter:drop-shadow(0 0 30px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 50px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}.orb-purple{background:radial-gradient(circle,var(--zemios-violet-500) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,var(--zemios-neon-cyan) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,var(--zemios-neon-magenta) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}.orb-orange{background:radial-gradient(circle,var(--zemios-neon-orange) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,var(--zemios-rose-500) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,var(--zemios-gold-400) 0%,transparent 70%)}.hero-badge{display:inline-block;margin-bottom:var(--zemios-space-8);padding:var(--zemios-space-1\\.5) var(--zemios-space-4);border-radius:var(--zemios-radius-full);border:1px solid rgba(148,163,184,.4);background:#0f172a99;color:var(--zemios-slate-400);font-family:var(--zemios-font-body);font-size:11px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.hero-headline{margin:0 auto var(--zemios-space-6);max-width:48rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:600;line-height:1.1;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.hero-headline{font-size:var(--zemios-text-5xl)}}@media(min-width:1024px){.hero-headline{font-size:var(--zemios-text-6xl)}}.hero-subtitle{margin:0 auto;max-width:36rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.hero-scroll{position:absolute;bottom:var(--zemios-space-12);display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-3);cursor:pointer;opacity:.4;transition:opacity var(--zemios-duration-base) var(--zemios-easing-default)}.hero-scroll:hover{opacity:.8}.hero-scroll__label{font-size:9px;font-weight:500;letter-spacing:.3em;color:var(--zemios-slate-500);text-transform:uppercase}.hero-scroll__indicator{display:flex;align-items:flex-start;justify-content:center;width:1.25rem;height:2rem;padding:.25rem;border:1px solid rgba(148,163,184,.5);border-radius:var(--zemios-radius-full)}.hero-scroll__dot{width:.25rem;height:.5rem;border-radius:var(--zemios-radius-full);background:var(--zemios-slate-400);animation:zemios-bounce 2s ease-in-out infinite}@keyframes zemios-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(8px)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-hero', standalone: true, imports: [CommonModule, TranslateModule], template: "<section class=\"hero-section relative flex h-screen items-center justify-center overflow-hidden\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow\"\r\n      style=\"top: -100px; left: -100px; width: 500px; height: 500px; opacity: 0.5\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower\"\r\n      style=\"right: -50px; bottom: -50px; width: 400px; height: 400px; opacity: 0.4\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow\"\r\n      style=\"top: 40%; left: 60%; width: 300px; height: 300px; opacity: 0.35\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower\"\r\n      style=\"top: 10%; right: 10%; width: 450px; height: 450px; opacity: 0.45\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow\"\r\n      style=\"bottom: 20%; left: 5%; width: 350px; height: 350px; opacity: 0.4\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower\"\r\n      style=\"top: 60%; right: 30%; width: 300px; height: 300px; opacity: 0.35\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 px-6 text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span class=\"hero-badge\" data-aos=\"fade-down\" data-aos-delay=\"200\">Digital Future</span>\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-10 h-auto\"\r\n      style=\"width: 50vw; max-width: 500px\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1 class=\"hero-headline\" data-aos=\"fade-up\" data-aos-delay=\"400\">\r\n      {{ 'hero.headline' | translate }}\r\n      <span class=\"z-text-brand-gradient\">{{ 'hero.headlineAccent' | translate }}</span>\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p class=\"hero-subtitle\" data-aos=\"fade-up\" data-aos-delay=\"600\">\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"hero-scroll\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-offset=\"-200\"\r\n    data-aos-delay=\"2500\"\r\n  >\r\n    <span class=\"hero-scroll__label\">Scroll</span>\r\n    <div class=\"hero-scroll__indicator\">\r\n      <div class=\"hero-scroll__dot\"></div>\r\n    </div>\r\n  </div>\r\n</section>", styles: ["@keyframes zemios-float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes zemios-float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}.animate-float-slow{animation:zemios-float-slow 6s ease-in-out infinite}.animate-float-slower{animation:zemios-float-slower 8s ease-in-out infinite}.hero-logo{filter:drop-shadow(0 0 30px rgba(255,255,255,.1));animation:zemios-logo-breathe 4s ease-in-out infinite}@keyframes zemios-logo-breathe{0%,to{filter:drop-shadow(0 0 30px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 50px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}.orb-purple{background:radial-gradient(circle,var(--zemios-violet-500) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,var(--zemios-neon-cyan) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,var(--zemios-neon-magenta) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}.orb-orange{background:radial-gradient(circle,var(--zemios-neon-orange) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,var(--zemios-rose-500) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,var(--zemios-gold-400) 0%,transparent 70%)}.hero-badge{display:inline-block;margin-bottom:var(--zemios-space-8);padding:var(--zemios-space-1\\.5) var(--zemios-space-4);border-radius:var(--zemios-radius-full);border:1px solid rgba(148,163,184,.4);background:#0f172a99;color:var(--zemios-slate-400);font-family:var(--zemios-font-body);font-size:11px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.hero-headline{margin:0 auto var(--zemios-space-6);max-width:48rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:600;line-height:1.1;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.hero-headline{font-size:var(--zemios-text-5xl)}}@media(min-width:1024px){.hero-headline{font-size:var(--zemios-text-6xl)}}.hero-subtitle{margin:0 auto;max-width:36rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.hero-scroll{position:absolute;bottom:var(--zemios-space-12);display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-3);cursor:pointer;opacity:.4;transition:opacity var(--zemios-duration-base) var(--zemios-easing-default)}.hero-scroll:hover{opacity:.8}.hero-scroll__label{font-size:9px;font-weight:500;letter-spacing:.3em;color:var(--zemios-slate-500);text-transform:uppercase}.hero-scroll__indicator{display:flex;align-items:flex-start;justify-content:center;width:1.25rem;height:2rem;padding:.25rem;border:1px solid rgba(148,163,184,.5);border-radius:var(--zemios-radius-full)}.hero-scroll__dot{width:.25rem;height:.5rem;border-radius:var(--zemios-radius-full);background:var(--zemios-slate-400);animation:zemios-bounce 2s ease-in-out infinite}@keyframes zemios-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(8px)}}\n"] }]
        }] });

class HeroMobileComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroMobileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: HeroMobileComponent, isStandalone: true, selector: "z-hero-mobile", ngImport: i0, template: "<section class=\"hero-mobile-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow\"\r\n      style=\"top: -80px; left: -80px; width: 350px; height: 350px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower\"\r\n      style=\"right: -50px; bottom: -50px; width: 300px; height: 300px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow\"\r\n      style=\"top: 30%; right: 10%; width: 250px; height: 250px; opacity: 0.8; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower\"\r\n      style=\"top: 60%; left: -60px; width: 280px; height: 280px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow\"\r\n      style=\"right: 10%; bottom: 20%; width: 220px; height: 220px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower\"\r\n      style=\"top: 10%; right: -50px; width: 200px; height: 200px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 w-full text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span class=\"hero-mobile-badge\">Digital Future</span>\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-8 h-auto\"\r\n      style=\"width: 55vw\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1 class=\"hero-mobile-headline\" data-aos=\"fade-up\" data-aos-delay=\"300\">\r\n      {{ 'hero.headline' | translate }}\r\n      <span class=\"z-text-brand-gradient\">{{ 'hero.headlineAccent' | translate }}</span>\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p class=\"hero-mobile-subtitle\" data-aos=\"fade-up\" data-aos-delay=\"500\">\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"hero-mobile-scroll\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-delay=\"1000\"\r\n    data-aos-offset=\"-200\"\r\n  >\r\n    <span class=\"hero-mobile-scroll__label\">{{ 'hero.scrollMobile' | translate }}</span>\r\n    <i class=\"bi bi-hand-index animate-bounce text-2xl text-slate-400\"></i>\r\n  </div>\r\n</section>", styles: [":host{display:block}.hero-mobile-section{background:var(--zemios-slate-950)}.hero-logo{filter:drop-shadow(0 0 20px rgba(255,255,255,.1));animation:zemios-logo-breathe 4s ease-in-out infinite}@keyframes zemios-logo-breathe{0%,to{filter:drop-shadow(0 0 20px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 40px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-purple{background:radial-gradient(circle,var(--zemios-violet-500) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,var(--zemios-neon-cyan) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,var(--zemios-neon-magenta) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-orange{background:radial-gradient(circle,var(--zemios-neon-orange) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,var(--zemios-rose-500) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,var(--zemios-gold-400) 0%,transparent 70%)}.hero-mobile-badge{display:inline-block;margin-bottom:var(--zemios-space-6);padding:var(--zemios-space-1) var(--zemios-space-3);border-radius:var(--zemios-radius-full);border:1px solid rgba(148,163,184,.4);background:#0f172a99;color:var(--zemios-slate-400);font-family:var(--zemios-font-body);font-size:10px;font-weight:500;letter-spacing:.25em;text-transform:uppercase;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.hero-mobile-headline{margin:0 auto var(--zemios-space-5);font-family:var(--zemios-font-display);font-size:var(--zemios-text-3xl);font-weight:600;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-inverse)}.hero-mobile-subtitle{margin:0 auto;max-width:24rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-base);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.hero-mobile-scroll{position:absolute;bottom:var(--zemios-space-8);display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-2);opacity:.4}.hero-mobile-scroll__label{font-size:8px;font-weight:500;letter-spacing:.3em;color:var(--zemios-slate-500);text-transform:uppercase}.animate-float-slow{animation:zemios-float-slow 6s ease-in-out infinite}.animate-float-slower{animation:zemios-float-slower 8s ease-in-out infinite reverse}@keyframes zemios-float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes zemios-float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroMobileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-hero-mobile', standalone: true, imports: [CommonModule, TranslateModule], template: "<section class=\"hero-mobile-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow\"\r\n      style=\"top: -80px; left: -80px; width: 350px; height: 350px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower\"\r\n      style=\"right: -50px; bottom: -50px; width: 300px; height: 300px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow\"\r\n      style=\"top: 30%; right: 10%; width: 250px; height: 250px; opacity: 0.8; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower\"\r\n      style=\"top: 60%; left: -60px; width: 280px; height: 280px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow\"\r\n      style=\"right: 10%; bottom: 20%; width: 220px; height: 220px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower\"\r\n      style=\"top: 10%; right: -50px; width: 200px; height: 200px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 w-full text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span class=\"hero-mobile-badge\">Digital Future</span>\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-8 h-auto\"\r\n      style=\"width: 55vw\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1 class=\"hero-mobile-headline\" data-aos=\"fade-up\" data-aos-delay=\"300\">\r\n      {{ 'hero.headline' | translate }}\r\n      <span class=\"z-text-brand-gradient\">{{ 'hero.headlineAccent' | translate }}</span>\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p class=\"hero-mobile-subtitle\" data-aos=\"fade-up\" data-aos-delay=\"500\">\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"hero-mobile-scroll\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-delay=\"1000\"\r\n    data-aos-offset=\"-200\"\r\n  >\r\n    <span class=\"hero-mobile-scroll__label\">{{ 'hero.scrollMobile' | translate }}</span>\r\n    <i class=\"bi bi-hand-index animate-bounce text-2xl text-slate-400\"></i>\r\n  </div>\r\n</section>", styles: [":host{display:block}.hero-mobile-section{background:var(--zemios-slate-950)}.hero-logo{filter:drop-shadow(0 0 20px rgba(255,255,255,.1));animation:zemios-logo-breathe 4s ease-in-out infinite}@keyframes zemios-logo-breathe{0%,to{filter:drop-shadow(0 0 20px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 40px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-purple{background:radial-gradient(circle,var(--zemios-violet-500) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,var(--zemios-neon-cyan) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,var(--zemios-neon-magenta) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-orange{background:radial-gradient(circle,var(--zemios-neon-orange) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,var(--zemios-rose-500) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,var(--zemios-gold-400) 0%,transparent 70%)}.hero-mobile-badge{display:inline-block;margin-bottom:var(--zemios-space-6);padding:var(--zemios-space-1) var(--zemios-space-3);border-radius:var(--zemios-radius-full);border:1px solid rgba(148,163,184,.4);background:#0f172a99;color:var(--zemios-slate-400);font-family:var(--zemios-font-body);font-size:10px;font-weight:500;letter-spacing:.25em;text-transform:uppercase;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.hero-mobile-headline{margin:0 auto var(--zemios-space-5);font-family:var(--zemios-font-display);font-size:var(--zemios-text-3xl);font-weight:600;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-inverse)}.hero-mobile-subtitle{margin:0 auto;max-width:24rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-base);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.hero-mobile-scroll{position:absolute;bottom:var(--zemios-space-8);display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-2);opacity:.4}.hero-mobile-scroll__label{font-size:8px;font-weight:500;letter-spacing:.3em;color:var(--zemios-slate-500);text-transform:uppercase}.animate-float-slow{animation:zemios-float-slow 6s ease-in-out infinite}.animate-float-slower{animation:zemios-float-slower 8s ease-in-out infinite reverse}@keyframes zemios-float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes zemios-float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}\n"] }]
        }] });

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
class FooterComponent {
    pages = [];
    variant = 'default';
    theme = 'light';
    contactEmail = 'info@zemios.com';
    contactPhone = '640 75 09 18';
    year = new Date().getFullYear();
    /** Computes a `tel:` href stripping spaces and special characters. */
    get phoneHref() {
        return 'tel:' + this.contactPhone.replace(/\s+/g, '');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: FooterComponent, isStandalone: true, selector: "z-footer", inputs: { pages: "pages", variant: "variant", theme: "theme", contactEmail: "contactEmail", contactPhone: "contactPhone", year: "year" }, ngImport: i0, template: `
    <footer class="z-footer z-footer--{{ theme }}">
      @if (variant === 'slim') {
        <div class="z-footer__inner">
          <z-logo [variant]="'full'" [theme]="theme"></z-logo>
          <z-made-by [variant]="'pill'" [theme]="theme === 'dark' ? 'dark' : 'light'"></z-made-by>
        </div>
      } @else {
        <div class="z-footer__inner">
          <div class="z-footer__brand">
            <z-logo [variant]="'iconWithTitle'" [theme]="theme"></z-logo>

            <div class="z-footer__contact">
              <a href="mailto:{{ contactEmail }}">{{ contactEmail }}</a>
              <a [href]="phoneHref">{{ contactPhone }}</a>
            </div>

            <ul class="z-footer__socials">
              <li>
                <a class="z-footer__socials--instagram" target="_blank" rel="noopener" href="https://www.instagram.com/zemios_company">Instagram</a>
              </li>
              <li>
                <a target="_blank" rel="noopener" href="https://x.com/zemios_company">Twitter</a>
              </li>
              <li>
                <a class="z-footer__socials--linkedin" target="_blank" rel="noopener" href="https://www.linkedin.com/company/zemios/">LinkedIn</a>
              </li>
            </ul>
          </div>

          <ul class="z-footer__links">
            @for (page of pages; track page.url) {
              <li>
                <a [routerLink]="page.url">{{ page.title }}</a>
              </li>
            }
          </ul>
        </div>

        <div class="z-footer__credit">
          <z-made-by [variant]="'pill'" [theme]="theme === 'dark' ? 'dark' : 'light'"></z-made-by>
        </div>
      }

      <p class="z-footer__legal">
        © {{ year }} Zemios. Todos los derechos reservados.
      </p>
    </footer>
  `, isInline: true, styles: [":host{display:block}.z-footer{padding:var(--zemios-space-12) var(--zemios-space-4);font-family:var(--zemios-font-body)}.z-footer--dark{background:var(--zemios-surface-inverse);color:var(--zemios-text-inverse)}.z-footer--light{background:var(--zemios-surface-raised);color:var(--zemios-text-primary);border-top:1px solid var(--zemios-border-default)}.z-footer__inner{max-width:var(--zemios-content-max);margin:0 auto;display:flex;flex-direction:column;gap:var(--zemios-space-6);align-items:center}@media(min-width:768px){.z-footer__inner{flex-direction:row;justify-content:space-between}}.z-footer__brand{display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-2)}.z-footer__contact{display:flex;flex-direction:column;gap:var(--zemios-space-1);text-align:center}.z-footer__contact a{color:inherit;font-weight:700;text-decoration:none}.z-footer__contact a:hover{color:var(--zemios-accent)}.z-footer__socials{display:flex;flex-wrap:wrap;gap:var(--zemios-space-4);list-style:none;margin:0;padding:0;justify-content:center}.z-footer__socials a{font-weight:700;color:inherit;text-decoration:none;padding:.2em .5em;border-radius:var(--zemios-radius-xs);transition:background var(--zemios-duration-fast) var(--zemios-easing-default)}.z-footer__socials a.z-footer__socials--instagram{background:linear-gradient(90deg,var(--zemios-rose-500),var(--zemios-gold-400));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.z-footer__socials a.z-footer__socials--linkedin{color:var(--zemios-info)}.z-footer__socials a.z-footer__socials--linkedin:hover{background:var(--zemios-info);color:var(--zemios-text-on-brand);-webkit-text-fill-color:var(--zemios-text-on-brand)}.z-footer__links{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:var(--zemios-space-4);justify-content:center}.z-footer__links a{color:inherit;font-weight:600;text-decoration:none;transition:color var(--zemios-duration-fast) var(--zemios-easing-default)}.z-footer__links a:hover{color:var(--zemios-accent)}.z-footer__legal{margin:var(--zemios-space-6) 0 0;text-align:center;font-size:var(--zemios-text-sm);opacity:.6}.z-footer__credit{margin-top:var(--zemios-space-4);text-align:center}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "component", type: LogoComponent, selector: "z-logo", inputs: ["variant", "titleVisible", "theme", "logoSrc", "titleSrc", "fullLogoSrc", "routerLink", "alt"] }, { kind: "component", type: MadeByComponent, selector: "z-made-by", inputs: ["variant", "theme"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-footer', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, TranslateModule, LogoComponent, MadeByComponent], template: `
    <footer class="z-footer z-footer--{{ theme }}">
      @if (variant === 'slim') {
        <div class="z-footer__inner">
          <z-logo [variant]="'full'" [theme]="theme"></z-logo>
          <z-made-by [variant]="'pill'" [theme]="theme === 'dark' ? 'dark' : 'light'"></z-made-by>
        </div>
      } @else {
        <div class="z-footer__inner">
          <div class="z-footer__brand">
            <z-logo [variant]="'iconWithTitle'" [theme]="theme"></z-logo>

            <div class="z-footer__contact">
              <a href="mailto:{{ contactEmail }}">{{ contactEmail }}</a>
              <a [href]="phoneHref">{{ contactPhone }}</a>
            </div>

            <ul class="z-footer__socials">
              <li>
                <a class="z-footer__socials--instagram" target="_blank" rel="noopener" href="https://www.instagram.com/zemios_company">Instagram</a>
              </li>
              <li>
                <a target="_blank" rel="noopener" href="https://x.com/zemios_company">Twitter</a>
              </li>
              <li>
                <a class="z-footer__socials--linkedin" target="_blank" rel="noopener" href="https://www.linkedin.com/company/zemios/">LinkedIn</a>
              </li>
            </ul>
          </div>

          <ul class="z-footer__links">
            @for (page of pages; track page.url) {
              <li>
                <a [routerLink]="page.url">{{ page.title }}</a>
              </li>
            }
          </ul>
        </div>

        <div class="z-footer__credit">
          <z-made-by [variant]="'pill'" [theme]="theme === 'dark' ? 'dark' : 'light'"></z-made-by>
        </div>
      }

      <p class="z-footer__legal">
        © {{ year }} Zemios. Todos los derechos reservados.
      </p>
    </footer>
  `, styles: [":host{display:block}.z-footer{padding:var(--zemios-space-12) var(--zemios-space-4);font-family:var(--zemios-font-body)}.z-footer--dark{background:var(--zemios-surface-inverse);color:var(--zemios-text-inverse)}.z-footer--light{background:var(--zemios-surface-raised);color:var(--zemios-text-primary);border-top:1px solid var(--zemios-border-default)}.z-footer__inner{max-width:var(--zemios-content-max);margin:0 auto;display:flex;flex-direction:column;gap:var(--zemios-space-6);align-items:center}@media(min-width:768px){.z-footer__inner{flex-direction:row;justify-content:space-between}}.z-footer__brand{display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-2)}.z-footer__contact{display:flex;flex-direction:column;gap:var(--zemios-space-1);text-align:center}.z-footer__contact a{color:inherit;font-weight:700;text-decoration:none}.z-footer__contact a:hover{color:var(--zemios-accent)}.z-footer__socials{display:flex;flex-wrap:wrap;gap:var(--zemios-space-4);list-style:none;margin:0;padding:0;justify-content:center}.z-footer__socials a{font-weight:700;color:inherit;text-decoration:none;padding:.2em .5em;border-radius:var(--zemios-radius-xs);transition:background var(--zemios-duration-fast) var(--zemios-easing-default)}.z-footer__socials a.z-footer__socials--instagram{background:linear-gradient(90deg,var(--zemios-rose-500),var(--zemios-gold-400));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.z-footer__socials a.z-footer__socials--linkedin{color:var(--zemios-info)}.z-footer__socials a.z-footer__socials--linkedin:hover{background:var(--zemios-info);color:var(--zemios-text-on-brand);-webkit-text-fill-color:var(--zemios-text-on-brand)}.z-footer__links{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:var(--zemios-space-4);justify-content:center}.z-footer__links a{color:inherit;font-weight:600;text-decoration:none;transition:color var(--zemios-duration-fast) var(--zemios-easing-default)}.z-footer__links a:hover{color:var(--zemios-accent)}.z-footer__legal{margin:var(--zemios-space-6) 0 0;text-align:center;font-size:var(--zemios-text-sm);opacity:.6}.z-footer__credit{margin-top:var(--zemios-space-4);text-align:center}\n"] }]
        }], propDecorators: { pages: [{
                type: Input
            }], variant: [{
                type: Input
            }], theme: [{
                type: Input
            }], contactEmail: [{
                type: Input
            }], contactPhone: [{
                type: Input
            }], year: [{
                type: Input
            }] } });

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
class ModalComponent {
    open = false;
    title;
    size = 'md';
    /** Allow backdrop click to close? */
    closeOnBackdrop = true;
    /** Close on Escape key? */
    closeOnEscape = true;
    /** Whether the dialog has a footer slot. */
    hasFooter = false;
    openChange = new EventEmitter();
    closed = new EventEmitter();
    onBackdropClick(event) {
        if (!this.closeOnBackdrop)
            return;
        if (event.target === event.currentTarget)
            this.close();
    }
    onEscape() {
        if (this.open && this.closeOnEscape)
            this.close();
    }
    close() {
        this.open = false;
        this.openChange.emit(false);
        this.closed.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: ModalComponent, isStandalone: true, selector: "z-modal", inputs: { open: "open", title: "title", size: "size", closeOnBackdrop: "closeOnBackdrop", closeOnEscape: "closeOnEscape", hasFooter: "hasFooter" }, outputs: { openChange: "openChange", closed: "closed" }, host: { listeners: { "document:keydown.escape": "onEscape()" } }, ngImport: i0, template: `
    @if (open) {
      <div
        class="z-modal-backdrop"
        (click)="onBackdropClick($event)"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="z-modal-card"
          [class]="'z-modal-card z-modal-card--' + size"
        >
          @if (title) {
            <div class="z-modal__header">
              <h2 class="z-modal__title">{{ title }}</h2>
              <button class="z-modal__close" (click)="close()" aria-label="Cerrar">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          }

          <div class="z-modal__body">
            <ng-content></ng-content>
          </div>

          @if (hasFooter) {
            <div class="z-modal__footer">
              <ng-content select="[z-footer]"></ng-content>
            </div>
          }
        </div>
      </div>
    }
  `, isInline: true, styles: [":host{display:contents}.z-modal-backdrop{position:fixed;inset:0;background:#0f172ab3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:var(--zemios-z-modal);animation:zemios-fade-in var(--zemios-duration-base) var(--zemios-easing-default)}.z-modal-card{position:relative;background:var(--zemios-surface-base);color:var(--zemios-text-primary);border:1px solid var(--zemios-border-default);border-radius:var(--zemios-radius-card);box-shadow:var(--zemios-shadow-2xl);margin:var(--zemios-space-3);max-height:calc(100vh - var(--zemios-space-12));overflow:auto;width:100%;animation:zemios-pop-in var(--zemios-duration-base) var(--zemios-easing-bounce)}.z-modal-card--sm{max-width:24rem}.z-modal-card--md{max-width:32rem}.z-modal-card--lg{max-width:48rem}.z-modal-card--xl{max-width:64rem}.z-modal__header{display:flex;align-items:center;justify-content:space-between;gap:var(--zemios-space-4);padding:var(--zemios-space-4) var(--zemios-space-6);border-bottom:1px solid var(--zemios-border-subtle)}.z-modal__title{margin:0;font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:700;color:var(--zemios-text-primary)}.z-modal__close{background:transparent;border:0;cursor:pointer;font-size:var(--zemios-text-xl);color:var(--zemios-text-secondary);padding:var(--zemios-space-2);border-radius:var(--zemios-radius-full);transition:background var(--zemios-duration-fast) var(--zemios-easing-default)}.z-modal__close:hover{background:var(--zemios-surface-overlay);color:var(--zemios-error)}.z-modal__body{padding:var(--zemios-space-6)}.z-modal__footer{padding:var(--zemios-space-4) var(--zemios-space-6);border-top:1px solid var(--zemios-border-subtle);display:flex;gap:var(--zemios-space-3);justify-content:flex-end}@keyframes zemios-fade-in{0%{opacity:0}to{opacity:1}}@keyframes zemios-pop-in{0%{opacity:0;transform:translateY(8px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-modal', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule], template: `
    @if (open) {
      <div
        class="z-modal-backdrop"
        (click)="onBackdropClick($event)"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="z-modal-card"
          [class]="'z-modal-card z-modal-card--' + size"
        >
          @if (title) {
            <div class="z-modal__header">
              <h2 class="z-modal__title">{{ title }}</h2>
              <button class="z-modal__close" (click)="close()" aria-label="Cerrar">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          }

          <div class="z-modal__body">
            <ng-content></ng-content>
          </div>

          @if (hasFooter) {
            <div class="z-modal__footer">
              <ng-content select="[z-footer]"></ng-content>
            </div>
          }
        </div>
      </div>
    }
  `, styles: [":host{display:contents}.z-modal-backdrop{position:fixed;inset:0;background:#0f172ab3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:var(--zemios-z-modal);animation:zemios-fade-in var(--zemios-duration-base) var(--zemios-easing-default)}.z-modal-card{position:relative;background:var(--zemios-surface-base);color:var(--zemios-text-primary);border:1px solid var(--zemios-border-default);border-radius:var(--zemios-radius-card);box-shadow:var(--zemios-shadow-2xl);margin:var(--zemios-space-3);max-height:calc(100vh - var(--zemios-space-12));overflow:auto;width:100%;animation:zemios-pop-in var(--zemios-duration-base) var(--zemios-easing-bounce)}.z-modal-card--sm{max-width:24rem}.z-modal-card--md{max-width:32rem}.z-modal-card--lg{max-width:48rem}.z-modal-card--xl{max-width:64rem}.z-modal__header{display:flex;align-items:center;justify-content:space-between;gap:var(--zemios-space-4);padding:var(--zemios-space-4) var(--zemios-space-6);border-bottom:1px solid var(--zemios-border-subtle)}.z-modal__title{margin:0;font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:700;color:var(--zemios-text-primary)}.z-modal__close{background:transparent;border:0;cursor:pointer;font-size:var(--zemios-text-xl);color:var(--zemios-text-secondary);padding:var(--zemios-space-2);border-radius:var(--zemios-radius-full);transition:background var(--zemios-duration-fast) var(--zemios-easing-default)}.z-modal__close:hover{background:var(--zemios-surface-overlay);color:var(--zemios-error)}.z-modal__body{padding:var(--zemios-space-6)}.z-modal__footer{padding:var(--zemios-space-4) var(--zemios-space-6);border-top:1px solid var(--zemios-border-subtle);display:flex;gap:var(--zemios-space-3);justify-content:flex-end}@keyframes zemios-fade-in{0%{opacity:0}to{opacity:1}}@keyframes zemios-pop-in{0%{opacity:0;transform:translateY(8px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}\n"] }]
        }], propDecorators: { open: [{
                type: Input
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], closeOnBackdrop: [{
                type: Input
            }], closeOnEscape: [{
                type: Input
            }], hasFooter: [{
                type: Input
            }], openChange: [{
                type: Output
            }], closed: [{
                type: Output
            }], onEscape: [{
                type: HostListener,
                args: ['document:keydown.escape']
            }] } });

/**
 * CtaComponent
 *
 * Token-driven call-to-action band. Renders a centered big title
 * followed by the consumer's content (typically a contact form or
 * a button pair). All sizing, colour and typography come from
 * `var(--zemios-*)`.
 */
class CtaComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CtaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: CtaComponent, isStandalone: true, selector: "z-cta", ngImport: i0, template: "<!-- CONTACT CTA -->\r\n<section class=\"z-cta\">\r\n  <div class=\"z-cta__inner\">\r\n    <h2 class=\"z-cta__title\">\r\n      {{ 'cta.title' | translate }}\r\n    </h2>\r\n\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-cta{position:relative;padding:var(--zemios-space-24) 0}.z-cta__inner{max-width:var(--zemios-content-max);margin:0 auto;padding:0 var(--zemios-space-6);text-align:center}.z-cta__title{margin:0 0 var(--zemios-space-12);font-family:var(--zemios-font-display);font-weight:700;font-size:var(--zemios-text-5xl);line-height:1.1;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.z-cta__title{font-size:var(--zemios-text-7xl)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CtaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-cta', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, TranslateModule], template: "<!-- CONTACT CTA -->\r\n<section class=\"z-cta\">\r\n  <div class=\"z-cta__inner\">\r\n    <h2 class=\"z-cta__title\">\r\n      {{ 'cta.title' | translate }}\r\n    </h2>\r\n\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-cta{position:relative;padding:var(--zemios-space-24) 0}.z-cta__inner{max-width:var(--zemios-content-max);margin:0 auto;padding:0 var(--zemios-space-6);text-align:center}.z-cta__title{margin:0 0 var(--zemios-space-12);font-family:var(--zemios-font-display);font-weight:700;font-size:var(--zemios-text-5xl);line-height:1.1;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.z-cta__title{font-size:var(--zemios-text-7xl)}}\n"] }]
        }] });

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
class FeaturesGridComponent {
    platformId = inject(PLATFORM_ID);
    isBrowser = isPlatformBrowser(this.platformId);
    features = [
        {
            lottieFile: 'lotties/architecture.lottie',
            title: 'features.scalable.title',
            description: 'features.scalable.description',
            rgbColor: '96,165,250',
            delay: 100,
        },
        {
            lottieFile: 'lotties/system.lottie',
            title: 'features.connected.title',
            description: 'features.connected.description',
            rgbColor: '167,139,250',
            delay: 200,
        },
        {
            lottieFile: 'lotties/secure.lottie',
            title: 'features.secure.title',
            description: 'features.secure.description',
            rgbColor: '196,181,253',
            delay: 300,
        },
    ];
    ngAfterViewInit() {
        if (this.isBrowser) {
            import('@lottiefiles/dotlottie-wc');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: FeaturesGridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: FeaturesGridComponent, isStandalone: true, selector: "z-features-grid", ngImport: i0, template: "<!-- OUR CORE - Open layout with Lottie placeholders -->\r\n<section class=\"z-features-grid\">\r\n  <div class=\"z-features-grid__inner\">\r\n    <div class=\"z-features-grid__grid\">\r\n      @for (feature of features; track feature.title; let i = $index) {\r\n        <div\r\n          class=\"z-feature\"\r\n          data-aos=\"fade-up\"\r\n          [attr.data-aos-delay]=\"feature.delay\"\r\n        >\r\n          <!-- Lottie animation -->\r\n          <div\r\n            class=\"z-feature__icon\"\r\n            [style.--feature-rgb]=\"feature.rgbColor\"\r\n          >\r\n            <dotlottie-wc [attr.src]=\"feature.lottieFile\" autoplay loop></dotlottie-wc>\r\n          </div>\r\n\r\n          <!-- Title -->\r\n          <h3 class=\"z-feature__title\">\r\n            {{ feature.title | translate }}\r\n          </h3>\r\n\r\n          <!-- Description -->\r\n          <p class=\"z-feature__description\">\r\n            {{ feature.description | translate }}\r\n          </p>\r\n\r\n          <!-- Subtle separator (not on last item) -->\r\n          @if (!$last) {\r\n            <div class=\"z-feature__separator\"></div>\r\n          }\r\n        </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-features-grid{position:relative;overflow:hidden;padding:var(--zemios-space-24) 0}.z-features-grid__inner{max-width:var(--zemios-content-wide);margin:0 auto;padding:0 var(--zemios-space-6)}.z-features-grid__grid{display:grid;gap:var(--zemios-space-16);grid-template-columns:1fr}@media(min-width:768px){.z-features-grid__grid{grid-template-columns:repeat(3,1fr)}}.z-feature{display:flex;flex-direction:column;align-items:center;text-align:center}.z-feature__icon{width:200px;height:200px;margin-bottom:var(--zemios-space-8);border-radius:28px;display:flex;align-items:center;justify-content:center;overflow:hidden}.z-feature__icon dotlottie-wc{width:100%;height:100%}.z-feature__title{margin:0 0 var(--zemios-space-3.5);font-family:var(--zemios-font-display);font-size:var(--zemios-text-xl);font-weight:600;line-height:1.25;color:var(--zemios-text-inverse);letter-spacing:-.01em}.z-feature__description{margin:0;max-width:24rem;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);line-height:1.75;font-weight:300;color:var(--zemios-slate-500)}.z-feature__separator{width:40px;height:1px;background:#ffffff0f;margin-top:var(--zemios-space-12)}.z-feature:hover{transform:translateY(-4px);transition:transform var(--zemios-duration-base) var(--zemios-easing-default)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: FeaturesGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-features-grid', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, TranslateModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: "<!-- OUR CORE - Open layout with Lottie placeholders -->\r\n<section class=\"z-features-grid\">\r\n  <div class=\"z-features-grid__inner\">\r\n    <div class=\"z-features-grid__grid\">\r\n      @for (feature of features; track feature.title; let i = $index) {\r\n        <div\r\n          class=\"z-feature\"\r\n          data-aos=\"fade-up\"\r\n          [attr.data-aos-delay]=\"feature.delay\"\r\n        >\r\n          <!-- Lottie animation -->\r\n          <div\r\n            class=\"z-feature__icon\"\r\n            [style.--feature-rgb]=\"feature.rgbColor\"\r\n          >\r\n            <dotlottie-wc [attr.src]=\"feature.lottieFile\" autoplay loop></dotlottie-wc>\r\n          </div>\r\n\r\n          <!-- Title -->\r\n          <h3 class=\"z-feature__title\">\r\n            {{ feature.title | translate }}\r\n          </h3>\r\n\r\n          <!-- Description -->\r\n          <p class=\"z-feature__description\">\r\n            {{ feature.description | translate }}\r\n          </p>\r\n\r\n          <!-- Subtle separator (not on last item) -->\r\n          @if (!$last) {\r\n            <div class=\"z-feature__separator\"></div>\r\n          }\r\n        </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-features-grid{position:relative;overflow:hidden;padding:var(--zemios-space-24) 0}.z-features-grid__inner{max-width:var(--zemios-content-wide);margin:0 auto;padding:0 var(--zemios-space-6)}.z-features-grid__grid{display:grid;gap:var(--zemios-space-16);grid-template-columns:1fr}@media(min-width:768px){.z-features-grid__grid{grid-template-columns:repeat(3,1fr)}}.z-feature{display:flex;flex-direction:column;align-items:center;text-align:center}.z-feature__icon{width:200px;height:200px;margin-bottom:var(--zemios-space-8);border-radius:28px;display:flex;align-items:center;justify-content:center;overflow:hidden}.z-feature__icon dotlottie-wc{width:100%;height:100%}.z-feature__title{margin:0 0 var(--zemios-space-3.5);font-family:var(--zemios-font-display);font-size:var(--zemios-text-xl);font-weight:600;line-height:1.25;color:var(--zemios-text-inverse);letter-spacing:-.01em}.z-feature__description{margin:0;max-width:24rem;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);line-height:1.75;font-weight:300;color:var(--zemios-slate-500)}.z-feature__separator{width:40px;height:1px;background:#ffffff0f;margin-top:var(--zemios-space-12)}.z-feature:hover{transform:translateY(-4px);transition:transform var(--zemios-duration-base) var(--zemios-easing-default)}\n"] }]
        }] });

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
class ProcessComponent {
    steps = [
        {
            number: '01',
            title: 'Descubrimiento',
            description: 'Análisis profundo de necesidades y definición de objetivos estratégicos.',
            color: 'cyan',
        },
        {
            number: '02',
            title: 'Ingeniería',
            description: 'Desarrollo ágil con las tecnologías más avanzadas del mercado.',
            color: 'purple',
        },
        {
            number: '03',
            title: 'Evolución',
            description: 'Despliegue continuo y optimización basada en datos reales.',
            color: 'magenta',
        },
    ];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ProcessComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: ProcessComponent, isStandalone: true, selector: "z-process", inputs: { steps: "steps" }, ngImport: i0, template: "<!-- METHODOLOGY - Process Timeline -->\r\n<section class=\"z-process\">\r\n  <div class=\"z-process__inner\">\r\n    <div class=\"z-process__grid\">\r\n      <div data-aos=\"fade-right\" class=\"z-process__intro\">\r\n        <span class=\"z-process__badge\">{{ 'process.badge' | translate }}</span>\r\n        <h2 class=\"z-process__title\">\r\n          {{ 'process.title' | translate }}\r\n          <span class=\"z-text-brand-gradient\">{{ 'process.titleAccent' | translate }}</span>\r\n        </h2>\r\n        <p class=\"z-process__subtitle\">{{ 'process.subtitle' | translate }}</p>\r\n      </div>\r\n\r\n      <!-- Timeline -->\r\n      <div class=\"z-process__timeline\" data-aos=\"fade-left\">\r\n        @for (step of steps; track step.number; let last = $last) {\r\n          <div class=\"z-process-step\">\r\n            <div class=\"z-process-step__rail\">\r\n              <div class=\"z-process-step__node\">\r\n                <span class=\"z-process-step__number\">{{ step.number }}</span>\r\n              </div>\r\n              @if (!last) {\r\n                <div class=\"z-process-step__connector\"></div>\r\n              }\r\n            </div>\r\n            <div class=\"z-process-step__body\">\r\n              <h4 class=\"z-process-step__title\">{{ step.title }}</h4>\r\n              <p class=\"z-process-step__description\">{{ step.description }}</p>\r\n            </div>\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-process{position:relative;padding:var(--zemios-space-24) 0}.z-process__inner{max-width:var(--zemios-content-max);margin:0 auto;padding:0 var(--zemios-space-6)}.z-process__grid{display:grid;grid-template-columns:1fr;gap:var(--zemios-space-16);align-items:center}@media(min-width:1024px){.z-process__grid{grid-template-columns:1fr 1fr}}.z-process__badge{display:block;margin-bottom:var(--zemios-space-4);font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:700;letter-spacing:.18em;color:var(--zemios-sky-400);text-transform:uppercase}.z-process__title{margin:0 0 var(--zemios-space-8);font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.z-process__title{font-size:var(--zemios-text-5xl)}}.z-process__subtitle{margin:0 0 var(--zemios-space-8);font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.z-process__timeline{position:relative;display:flex;flex-direction:column;gap:var(--zemios-space-6)}.z-process-step{position:relative;display:flex;align-items:flex-start;gap:var(--zemios-space-6)}.z-process-step__rail{display:flex;flex-direction:column;align-items:center}.z-process-step__node{position:relative;z-index:10;display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:2px solid var(--zemios-border-glass);border-radius:var(--zemios-radius-full);background:var(--zemios-sky-500);transition:border-color var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-process-step:hover .z-process-step__node{border-color:var(--zemios-sky-400)}.z-process-step__number{font-family:var(--zemios-font-body);font-size:var(--zemios-text-lg);font-weight:700;color:var(--zemios-sky-400)}.z-process-step__connector{width:2px;height:48px;background:linear-gradient(to bottom,rgba(56,189,248,.5),var(--zemios-violet-300))}.z-process-step__body{padding-top:var(--zemios-space-3)}.z-process-step__title{margin:0 0 var(--zemios-space-2);font-family:var(--zemios-font-display);font-size:var(--zemios-text-xl);font-weight:700;color:var(--zemios-text-inverse)}.z-process-step__description{margin:0;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:400;line-height:1.6;color:var(--zemios-slate-500)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ProcessComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-process', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, TranslateModule], template: "<!-- METHODOLOGY - Process Timeline -->\r\n<section class=\"z-process\">\r\n  <div class=\"z-process__inner\">\r\n    <div class=\"z-process__grid\">\r\n      <div data-aos=\"fade-right\" class=\"z-process__intro\">\r\n        <span class=\"z-process__badge\">{{ 'process.badge' | translate }}</span>\r\n        <h2 class=\"z-process__title\">\r\n          {{ 'process.title' | translate }}\r\n          <span class=\"z-text-brand-gradient\">{{ 'process.titleAccent' | translate }}</span>\r\n        </h2>\r\n        <p class=\"z-process__subtitle\">{{ 'process.subtitle' | translate }}</p>\r\n      </div>\r\n\r\n      <!-- Timeline -->\r\n      <div class=\"z-process__timeline\" data-aos=\"fade-left\">\r\n        @for (step of steps; track step.number; let last = $last) {\r\n          <div class=\"z-process-step\">\r\n            <div class=\"z-process-step__rail\">\r\n              <div class=\"z-process-step__node\">\r\n                <span class=\"z-process-step__number\">{{ step.number }}</span>\r\n              </div>\r\n              @if (!last) {\r\n                <div class=\"z-process-step__connector\"></div>\r\n              }\r\n            </div>\r\n            <div class=\"z-process-step__body\">\r\n              <h4 class=\"z-process-step__title\">{{ step.title }}</h4>\r\n              <p class=\"z-process-step__description\">{{ step.description }}</p>\r\n            </div>\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-process{position:relative;padding:var(--zemios-space-24) 0}.z-process__inner{max-width:var(--zemios-content-max);margin:0 auto;padding:0 var(--zemios-space-6)}.z-process__grid{display:grid;grid-template-columns:1fr;gap:var(--zemios-space-16);align-items:center}@media(min-width:1024px){.z-process__grid{grid-template-columns:1fr 1fr}}.z-process__badge{display:block;margin-bottom:var(--zemios-space-4);font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:700;letter-spacing:.18em;color:var(--zemios-sky-400);text-transform:uppercase}.z-process__title{margin:0 0 var(--zemios-space-8);font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.z-process__title{font-size:var(--zemios-text-5xl)}}.z-process__subtitle{margin:0 0 var(--zemios-space-8);font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.z-process__timeline{position:relative;display:flex;flex-direction:column;gap:var(--zemios-space-6)}.z-process-step{position:relative;display:flex;align-items:flex-start;gap:var(--zemios-space-6)}.z-process-step__rail{display:flex;flex-direction:column;align-items:center}.z-process-step__node{position:relative;z-index:10;display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:2px solid var(--zemios-border-glass);border-radius:var(--zemios-radius-full);background:var(--zemios-sky-500);transition:border-color var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-process-step:hover .z-process-step__node{border-color:var(--zemios-sky-400)}.z-process-step__number{font-family:var(--zemios-font-body);font-size:var(--zemios-text-lg);font-weight:700;color:var(--zemios-sky-400)}.z-process-step__connector{width:2px;height:48px;background:linear-gradient(to bottom,rgba(56,189,248,.5),var(--zemios-violet-300))}.z-process-step__body{padding-top:var(--zemios-space-3)}.z-process-step__title{margin:0 0 var(--zemios-space-2);font-family:var(--zemios-font-display);font-size:var(--zemios-text-xl);font-weight:700;color:var(--zemios-text-inverse)}.z-process-step__description{margin:0;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:400;line-height:1.6;color:var(--zemios-slate-500)}\n"] }]
        }], propDecorators: { steps: [{
                type: Input
            }] } });

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
class SectionShellComponent {
    eyebrow;
    title;
    subtitle;
    maxWidth = 'medium';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: SectionShellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: SectionShellComponent, isStandalone: true, selector: "z-section-shell", inputs: { eyebrow: "eyebrow", title: "title", subtitle: "subtitle", maxWidth: "maxWidth" }, ngImport: i0, template: `
    <section
      class="z-section"
      [class]="'z-section z-section--max-w-' + maxWidth"
    >
      <div class="z-section__inner">
        @if (eyebrow || title || subtitle) {
          <div class="z-section__header">
            @if (eyebrow) {
              <span class="z-section__eyebrow">{{ eyebrow }}</span>
            }
            @if (title) {
              <h2 class="z-section__title">{{ title }}</h2>
            }
            @if (subtitle) {
              <p class="z-section__subtitle">{{ subtitle }}</p>
            }
          </div>
        }

        <ng-content></ng-content>
      </div>
    </section>
  `, isInline: true, styles: [":host{display:block}.z-section{padding:var(--zemios-space-24) var(--zemios-space-6)}.z-section--max-w-narrow .z-section__inner{max-width:var(--zemios-content-narrow)}.z-section--max-w-medium .z-section__inner{max-width:var(--zemios-content-max)}.z-section--max-w-wide .z-section__inner{max-width:var(--zemios-content-wide)}.z-section--max-w-full .z-section__inner{max-width:100%}.z-section__inner{margin:0 auto}.z-section__header{margin-bottom:var(--zemios-space-12);text-align:center}.z-section__eyebrow{display:inline-block;margin-bottom:var(--zemios-space-3);font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--zemios-sky-400)}.z-section__title{margin:0 0 var(--zemios-space-4);font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-primary)}@media(min-width:768px){.z-section__title{font-size:var(--zemios-text-5xl)}}.z-section__subtitle{margin:0 auto;max-width:48rem;font-family:var(--zemios-font-body);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-text-secondary)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: SectionShellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-section-shell', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section
      class="z-section"
      [class]="'z-section z-section--max-w-' + maxWidth"
    >
      <div class="z-section__inner">
        @if (eyebrow || title || subtitle) {
          <div class="z-section__header">
            @if (eyebrow) {
              <span class="z-section__eyebrow">{{ eyebrow }}</span>
            }
            @if (title) {
              <h2 class="z-section__title">{{ title }}</h2>
            }
            @if (subtitle) {
              <p class="z-section__subtitle">{{ subtitle }}</p>
            }
          </div>
        }

        <ng-content></ng-content>
      </div>
    </section>
  `, styles: [":host{display:block}.z-section{padding:var(--zemios-space-24) var(--zemios-space-6)}.z-section--max-w-narrow .z-section__inner{max-width:var(--zemios-content-narrow)}.z-section--max-w-medium .z-section__inner{max-width:var(--zemios-content-max)}.z-section--max-w-wide .z-section__inner{max-width:var(--zemios-content-wide)}.z-section--max-w-full .z-section__inner{max-width:100%}.z-section__inner{margin:0 auto}.z-section__header{margin-bottom:var(--zemios-space-12);text-align:center}.z-section__eyebrow{display:inline-block;margin-bottom:var(--zemios-space-3);font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--zemios-sky-400)}.z-section__title{margin:0 0 var(--zemios-space-4);font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-primary)}@media(min-width:768px){.z-section__title{font-size:var(--zemios-text-5xl)}}.z-section__subtitle{margin:0 auto;max-width:48rem;font-family:var(--zemios-font-body);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-text-secondary)}\n"] }]
        }], propDecorators: { eyebrow: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }] } });

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
const zemiosTokens = {
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
const zemiosSemantic = {
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
const zemiosSurface = {
    body: 'var(--zemios-surface-body)',
    base: 'var(--zemios-surface-base)',
    raised: 'var(--zemios-surface-raised)',
    overlay: 'var(--zemios-surface-overlay)',
    inset: 'var(--zemios-surface-inset)',
    inverse: 'var(--zemios-surface-inverse)',
};
const zemiosText = {
    primary: 'var(--zemios-text-primary)',
    secondary: 'var(--zemios-text-secondary)',
    muted: 'var(--zemios-text-muted)',
    inverse: 'var(--zemios-text-inverse)',
    onBrand: 'var(--zemios-text-on-brand)',
    link: 'var(--zemios-text-link)',
};
const zemiosBorder = {
    subtle: 'var(--zemios-border-subtle)',
    default: 'var(--zemios-border-default)',
    strong: 'var(--zemios-border-strong)',
    focus: 'var(--zemios-border-focus)',
    glass: 'var(--zemios-border-glass)',
};
const zemiosSpacing = {
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
const zemiosRadius = {
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
const zemiosShadow = {
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
const zemiosFont = {
    display: 'var(--zemios-font-display)',
    body: 'var(--zemios-font-body)',
    mono: 'var(--zemios-font-mono)',
};
const zemiosFontSize = {
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
const zemiosMotion = {
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
const zemiosZ = {
    base: 'var(--zemios-z-base)',
    header: 'var(--zemios-z-header)',
    dropdown: 'var(--zemios-z-dropdown)',
    overlay: 'var(--zemios-z-overlay)',
    modal: 'var(--zemios-z-modal)',
    popover: 'var(--zemios-z-popover)',
    toast: 'var(--zemios-z-toast)',
};
const zemiosGradient = {
    brand: 'var(--zemios-gradient-brand)',
    sunset: 'var(--zemios-gradient-sunset)',
    ocean: 'var(--zemios-gradient-ocean)',
    neon: 'var(--zemios-gradient-neon)',
    radial: 'var(--zemios-gradient-radial)',
    text: 'var(--zemios-gradient-text)',
};

const ZEMIOS_THEME_STORAGE_KEY = 'zemios-theme';
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
class ThemeService {
    doc;
    isBrowser;
    storageKey = ZEMIOS_THEME_STORAGE_KEY;
    /** Reactive current theme. Defaults to the user's system setting, then
     *  to whatever was persisted, then to `light`. */
    current = signal(this.resolveInitialTheme(), ...(ngDevMode ? [{ debugName: "current" }] : /* istanbul ignore next */ []));
    constructor(doc, platformId) {
        this.doc = doc;
        this.isBrowser = isPlatformBrowser(platformId);
        effect(() => {
            const theme = this.current();
            if (!this.isBrowser)
                return;
            this.doc.documentElement.setAttribute('data-theme', theme);
            try {
                localStorage.setItem(this.storageKey, theme);
            }
            catch {
                /* storage might be blocked (private mode / SSR) — ignore. */
            }
        });
    }
    set(theme) {
        this.current.set(theme);
    }
    toggle(next) {
        const order = ['light', 'dark', 'neon'];
        if (next) {
            this.current.set(next);
            return;
        }
        const idx = order.indexOf(this.current());
        this.current.set(order[(idx + 1) % order.length]);
    }
    resolveInitialTheme() {
        if (typeof window === 'undefined')
            return 'light';
        const persisted = (() => {
            try {
                return localStorage.getItem(this.storageKey);
            }
            catch {
                return null;
            }
        })();
        if (persisted === 'light' || persisted === 'dark' || persisted === 'neon') {
            return persisted;
        }
        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ThemeService, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ThemeService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });

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
const zemiosTokensStylesheet = '@zemios/landkit/tokens';

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
class PhoneMockupComponent {
    width = 210;
    height = 210;
    tilt = 'none';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: PhoneMockupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: PhoneMockupComponent, isStandalone: true, selector: "z-phone-mockup", inputs: { width: "width", height: "height", tilt: "tilt" }, ngImport: i0, template: `
    <div
      class="z-phone"
      [class.z-phone--tilt-left]="tilt === 'left'"
      [class.z-phone--tilt-right]="tilt === 'right'"
      [style.width.px]="width"
      [style.height.px]="height * 2"
    >
      <div class="z-phone__notch"></div>
      <div class="z-phone__screen">
        <div class="z-phone__status">
          <ng-content select="[zPhoneStatus]">09:41</ng-content>
          <div class="z-phone__status-icons" aria-hidden>
            <svg viewBox="0 0 16 12" width="14" height="10" fill="currentColor">
              <rect x="0" y="8" width="2" height="4" rx="0.5" />
              <rect x="4" y="6" width="2" height="6" rx="0.5" />
              <rect x="8" y="3" width="2" height="9" rx="0.5" />
              <rect x="12" y="0" width="2" height="12" rx="0.5" />
            </svg>
            <svg
              viewBox="0 0 16 12"
              width="14"
              height="10"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 5 Q8 -2 15 5" />
              <path d="M3 7 Q8 2 13 7" />
              <path d="M5 9 Q8 6 11 9" />
              <circle cx="8" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
            </svg>
            <svg viewBox="0 0 24 12" width="20" height="10" fill="none" stroke="currentColor">
              <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" />
              <rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor" stroke="none" />
              <rect x="21" y="3.5" width="1.5" height="5" rx="0.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>

        <div class="z-phone__header">
          <ng-content select="[zPhoneHeader]"></ng-content>
        </div>

        <div class="z-phone__body">
          <ng-content></ng-content>
        </div>

        <div class="z-phone__tabbar">
          <ng-content select="[zPhoneTabbar]"></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: [":host{display:inline-block;line-height:0}.z-phone{position:relative;background:var(--zemios-slate-900);border-radius:var(--zemios-radius-3xl);padding:6px;box-shadow:0 40px 80px -20px var(--zemios-shadow-xl),0 12px 32px -8px var(--zemios-shadow-md);transition:transform var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-phone--tilt-left{transform:rotate(-12deg)}.z-phone--tilt-right{transform:rotate(12deg)}.z-phone--tilt-left:hover,.z-phone--tilt-right:hover{transform:rotate(0) scale(1.02)}.z-phone__notch{position:absolute;top:14px;left:50%;transform:translate(-50%);width:70px;height:18px;background:var(--zemios-slate-900);border-radius:var(--zemios-radius-full);z-index:5}.z-phone__screen{position:relative;width:100%;height:100%;border-radius:var(--zemios-radius-2xl);overflow:hidden;background:linear-gradient(180deg,var(--zemios-surface-base) 0%,var(--zemios-slate-100) 100%);display:flex;flex-direction:column;font-family:var(--zemios-font-body)}.z-phone__status{display:flex;justify-content:space-between;align-items:center;padding:var(--zemios-space-2) var(--zemios-space-4) 0;font-size:.6rem;font-weight:600;color:var(--zemios-slate-900)}.z-phone__status-icons{display:flex;align-items:center;gap:var(--zemios-space-1);color:var(--zemios-slate-900)}.z-phone__status-icons svg{display:block}.z-phone__header{padding:var(--zemios-space-2) var(--zemios-space-3.5) var(--zemios-space-2.5);min-height:0}.z-phone__header:empty{display:none}.z-phone__body{flex:1 1 auto;min-height:0;overflow:hidden;display:flex;flex-direction:column}.z-phone__tabbar{margin-top:auto;flex-shrink:0;min-height:0}.z-phone__tabbar:empty{display:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: PhoneMockupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-phone-mockup', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div
      class="z-phone"
      [class.z-phone--tilt-left]="tilt === 'left'"
      [class.z-phone--tilt-right]="tilt === 'right'"
      [style.width.px]="width"
      [style.height.px]="height * 2"
    >
      <div class="z-phone__notch"></div>
      <div class="z-phone__screen">
        <div class="z-phone__status">
          <ng-content select="[zPhoneStatus]">09:41</ng-content>
          <div class="z-phone__status-icons" aria-hidden>
            <svg viewBox="0 0 16 12" width="14" height="10" fill="currentColor">
              <rect x="0" y="8" width="2" height="4" rx="0.5" />
              <rect x="4" y="6" width="2" height="6" rx="0.5" />
              <rect x="8" y="3" width="2" height="9" rx="0.5" />
              <rect x="12" y="0" width="2" height="12" rx="0.5" />
            </svg>
            <svg
              viewBox="0 0 16 12"
              width="14"
              height="10"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 5 Q8 -2 15 5" />
              <path d="M3 7 Q8 2 13 7" />
              <path d="M5 9 Q8 6 11 9" />
              <circle cx="8" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
            </svg>
            <svg viewBox="0 0 24 12" width="20" height="10" fill="none" stroke="currentColor">
              <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" />
              <rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor" stroke="none" />
              <rect x="21" y="3.5" width="1.5" height="5" rx="0.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>

        <div class="z-phone__header">
          <ng-content select="[zPhoneHeader]"></ng-content>
        </div>

        <div class="z-phone__body">
          <ng-content></ng-content>
        </div>

        <div class="z-phone__tabbar">
          <ng-content select="[zPhoneTabbar]"></ng-content>
        </div>
      </div>
    </div>
  `, styles: [":host{display:inline-block;line-height:0}.z-phone{position:relative;background:var(--zemios-slate-900);border-radius:var(--zemios-radius-3xl);padding:6px;box-shadow:0 40px 80px -20px var(--zemios-shadow-xl),0 12px 32px -8px var(--zemios-shadow-md);transition:transform var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-phone--tilt-left{transform:rotate(-12deg)}.z-phone--tilt-right{transform:rotate(12deg)}.z-phone--tilt-left:hover,.z-phone--tilt-right:hover{transform:rotate(0) scale(1.02)}.z-phone__notch{position:absolute;top:14px;left:50%;transform:translate(-50%);width:70px;height:18px;background:var(--zemios-slate-900);border-radius:var(--zemios-radius-full);z-index:5}.z-phone__screen{position:relative;width:100%;height:100%;border-radius:var(--zemios-radius-2xl);overflow:hidden;background:linear-gradient(180deg,var(--zemios-surface-base) 0%,var(--zemios-slate-100) 100%);display:flex;flex-direction:column;font-family:var(--zemios-font-body)}.z-phone__status{display:flex;justify-content:space-between;align-items:center;padding:var(--zemios-space-2) var(--zemios-space-4) 0;font-size:.6rem;font-weight:600;color:var(--zemios-slate-900)}.z-phone__status-icons{display:flex;align-items:center;gap:var(--zemios-space-1);color:var(--zemios-slate-900)}.z-phone__status-icons svg{display:block}.z-phone__header{padding:var(--zemios-space-2) var(--zemios-space-3.5) var(--zemios-space-2.5);min-height:0}.z-phone__header:empty{display:none}.z-phone__body{flex:1 1 auto;min-height:0;overflow:hidden;display:flex;flex-direction:column}.z-phone__tabbar{margin-top:auto;flex-shrink:0;min-height:0}.z-phone__tabbar:empty{display:none}\n"] }]
        }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], tilt: [{
                type: Input
            }] } });

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
class CardHoverDirective {
    el;
    renderer;
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-4px)');
        this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'var(--zemios-shadow-xl)');
    }
    onMouseLeave() {
        this.renderer.removeStyle(this.el.nativeElement, 'transform');
        this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CardHoverDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.23", type: CardHoverDirective, isStandalone: true, selector: "[appCardHover]", host: { listeners: { "mouseenter": "onMouseEnter()", "mouseleave": "onMouseLeave()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CardHoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appCardHover]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter']
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave']
            }] } });

/*
 * @zemios/landkit — Public API
 *
 * Angular building blocks (atoms + molecules + organisms + templates) and
 * design-token helpers for the Zemios design system.
 *
 * Consumers import components and TypeScript token helpers from this entry.
 * The CSS custom properties live behind the `./tokens` sub-entry, which the
 * package.json `exports` field maps to `dist/tokens/zemios.css`.
 *
 * Quick start:
 *   pnpm add @zemios/landkit @angular/common @angular/core @angular/router
 *
 *   /* in styles.css *
 *   @import '@zemios/landkit/tokens';
 *
 *   /* in component *
 *   import { HeroComponent, CtaComponent, ButtonComponent } from '@zemios/landkit';
 *
 * Every visual primitive (button, badge, card, nav, hero, footer, …)
 * is built on top of the same `var(--zemios-*)` token scale, so a
 * single change to a token ripples across every component.
 */
// ── Atoms ─────────────────────────────────────────────────────────

/**
 * Generated bundle index. Do not edit.
 */

export { BadgeComponent, ButtonComponent, CardComponent, CardHoverDirective, CtaComponent, DividerComponent, FeaturesGridComponent, FooterComponent, HeroComponent, HeroMobileComponent, InputComponent, InputFieldComponent, LogoComponent, MadeByComponent, ModalComponent, NavBarComponent, NavItemComponent, PhoneMockupComponent, ProcessComponent, SectionShellComponent, SpinnerComponent, ThemeService, TitleComponent, ZEMIOS_THEME_STORAGE_KEY, zemiosBorder, zemiosFont, zemiosFontSize, zemiosGradient, zemiosMotion, zemiosRadius, zemiosSemantic, zemiosShadow, zemiosSpacing, zemiosSurface, zemiosText, zemiosTokens, zemiosTokensStylesheet, zemiosZ };
//# sourceMappingURL=zemios-landkit.mjs.map
