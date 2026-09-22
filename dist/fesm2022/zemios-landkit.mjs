import * as i1 from '@angular/common';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as i0 from '@angular/core';
import { Input, Component, ChangeDetectionStrategy, PLATFORM_ID, Inject, CUSTOM_ELEMENTS_SCHEMA, HostListener, Directive } from '@angular/core';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1$1 from '@ngx-translate/core';
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
  `, isInline: true, styles: [".btn{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;padding:var(--zemios-space-2\\.5) var(--zemios-space-5);border-radius:var(--zemios-radius-full);border:1px solid var(--zemios-border-glass);font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:600;letter-spacing:.01em;line-height:1;background:var(--zemios-surface-raised);color:var(--zemios-text-primary);text-decoration:none;cursor:pointer;transition:transform var(--zemios-duration-fast) var(--zemios-easing-default),box-shadow var(--zemios-duration-fast) var(--zemios-easing-default),background var(--zemios-duration-fast) var(--zemios-easing-default),border-color var(--zemios-duration-fast) var(--zemios-easing-default),filter var(--zemios-duration-fast) var(--zemios-easing-default)}.btn:hover{transform:translateY(-1px);filter:brightness(1.03);border-color:var(--zemios-border-strong);text-decoration:none}.btn--primary{background:linear-gradient(135deg,var(--zemios-sky-500),var(--zemios-sky-600));border-color:var(--zemios-sky-300);color:var(--zemios-text-on-brand);box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--primary:hover{filter:brightness(1.08);box-shadow:var(--zemios-shadow-lg),0 0 0 1px var(--zemios-sky-300)}.btn--accent{background:var(--zemios-gold-400);color:var(--zemios-slate-900);border:none;box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--accent:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.05)}.btn--light{background:linear-gradient(135deg,var(--zemios-slate-50),var(--zemios-slate-200));color:var(--zemios-slate-950);box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--light:hover{filter:brightness(.97)}.btn--danger{background:linear-gradient(135deg,var(--zemios-rose-500),var(--zemios-rose-700));color:var(--zemios-rose-50);border:1px solid var(--zemios-rose-400);box-shadow:var(--zemios-shadow-md),0 0 0 1px var(--zemios-surface-inverse)}.btn--danger:hover{filter:brightness(1.08)}.btn--outline{background:transparent;color:var(--zemios-text-primary);border:1px solid var(--zemios-border-strong);box-shadow:none}.btn--outline:hover{background:var(--zemios-surface-overlay)}.btn--ghost{background:transparent;border:none;color:var(--zemios-text-secondary);box-shadow:none}.btn--ghost:hover{color:var(--zemios-text-primary);filter:brightness(1.05)}.btn:disabled,.btn[disabled]{opacity:.5;cursor:not-allowed;transform:none;filter:none}.btn i,.btn svg{margin-right:var(--zemios-space-1\\.5);font-size:1rem;line-height:1}.btn--prism-primary{background-image:linear-gradient(135deg,var(--zemios-sky-400),var(--zemios-violet-500),var(--zemios-rose-500));color:var(--zemios-slate-950);border:none;box-shadow:var(--zemios-shadow-lg),var(--zemios-shadow-glow),0 0 0 1px var(--zemios-slate-900)}.btn--prism-primary:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.08)}.btn--prism-outline{background:radial-gradient(circle at 0 0,var(--zemios-sky-500) 35%,transparent 55%),var(--zemios-surface-inverse);color:var(--zemios-sky-100);border:1px solid var(--zemios-border-strong);box-shadow:none}.btn--prism-outline:hover{border-color:var(--zemios-slate-50);box-shadow:var(--zemios-shadow-xl)}.btn--prism-ghost{background:var(--zemios-slate-900);color:var(--zemios-slate-100);border:1px solid var(--zemios-slate-700)}.btn--prism-ghost:hover{border-color:var(--zemios-slate-400);background:var(--zemios-slate-950)}.btn--social{background:var(--zemios-slate-900);border:1px solid var(--zemios-slate-700);color:var(--zemios-slate-300);padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--social:hover{box-shadow:0 0 25px var(--zemios-slate-400);border-color:var(--zemios-slate-300);color:var(--zemios-slate-50)}.btn--circle{border-radius:var(--zemios-radius-full);padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--circle i,.btn--circle svg{margin-right:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
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

class HeroComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: HeroComponent, isStandalone: true, selector: "z-hero", ngImport: i0, template: "<section class=\"hero-section relative flex h-screen items-center justify-center overflow-hidden\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow\"\r\n      style=\"top: -100px; left: -100px; width: 500px; height: 500px; opacity: 0.5\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower\"\r\n      style=\"right: -50px; bottom: -50px; width: 400px; height: 400px; opacity: 0.4\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow\"\r\n      style=\"top: 40%; left: 60%; width: 300px; height: 300px; opacity: 0.35\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower\"\r\n      style=\"top: 10%; right: 10%; width: 450px; height: 450px; opacity: 0.45\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow\"\r\n      style=\"bottom: 20%; left: 5%; width: 350px; height: 350px; opacity: 0.4\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower\"\r\n      style=\"top: 60%; right: 30%; width: 300px; height: 300px; opacity: 0.35\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 px-6 text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span class=\"hero-badge\" data-aos=\"fade-down\" data-aos-delay=\"200\">Digital Future</span>\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-10 h-auto\"\r\n      style=\"width: 50vw; max-width: 500px\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1 class=\"hero-headline\" data-aos=\"fade-up\" data-aos-delay=\"400\">\r\n      {{ 'hero.headline' | translate }}\r\n      <span class=\"z-text-brand-gradient\">{{ 'hero.headlineAccent' | translate }}</span>\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p class=\"hero-subtitle\" data-aos=\"fade-up\" data-aos-delay=\"600\">\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"hero-scroll\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-offset=\"-200\"\r\n    data-aos-delay=\"2500\"\r\n  >\r\n    <span class=\"hero-scroll__label\">Scroll</span>\r\n    <div class=\"hero-scroll__indicator\">\r\n      <div class=\"hero-scroll__dot\"></div>\r\n    </div>\r\n  </div>\r\n</section>", styles: ["@keyframes zemios-float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes zemios-float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}.animate-float-slow{animation:zemios-float-slow 6s ease-in-out infinite}.animate-float-slower{animation:zemios-float-slower 8s ease-in-out infinite}.hero-logo{filter:drop-shadow(0 0 30px rgba(255,255,255,.1));animation:zemios-logo-breathe 4s ease-in-out infinite}@keyframes zemios-logo-breathe{0%,to{filter:drop-shadow(0 0 30px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 50px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}.orb-purple{background:radial-gradient(circle,var(--zemios-violet-500) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,var(--zemios-neon-cyan) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,var(--zemios-neon-magenta) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}.orb-orange{background:radial-gradient(circle,var(--zemios-neon-orange) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,var(--zemios-rose-500) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,var(--zemios-gold-400) 0%,transparent 70%)}.hero-badge{display:inline-block;margin-bottom:var(--zemios-space-8);padding:var(--zemios-space-1\\.5) var(--zemios-space-4);border-radius:var(--zemios-radius-full);border:1px solid rgba(148,163,184,.4);background:#0f172a99;color:var(--zemios-slate-400);font-family:var(--zemios-font-body);font-size:11px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.hero-headline{margin:0 auto var(--zemios-space-6);max-width:48rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:600;line-height:1.1;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.hero-headline{font-size:var(--zemios-text-5xl)}}@media(min-width:1024px){.hero-headline{font-size:var(--zemios-text-6xl)}}.hero-subtitle{margin:0 auto;max-width:36rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.hero-scroll{position:absolute;bottom:var(--zemios-space-12);display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-3);cursor:pointer;opacity:.4;transition:opacity var(--zemios-duration-base) var(--zemios-easing-default)}.hero-scroll:hover{opacity:.8}.hero-scroll__label{font-size:9px;font-weight:500;letter-spacing:.3em;color:var(--zemios-slate-500);text-transform:uppercase}.hero-scroll__indicator{display:flex;align-items:flex-start;justify-content:center;width:1.25rem;height:2rem;padding:.25rem;border:1px solid rgba(148,163,184,.5);border-radius:var(--zemios-radius-full)}.hero-scroll__dot{width:.25rem;height:.5rem;border-radius:var(--zemios-radius-full);background:var(--zemios-slate-400);animation:zemios-bounce 2s ease-in-out infinite}@keyframes zemios-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(8px)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-hero', standalone: true, imports: [CommonModule, TranslateModule], template: "<section class=\"hero-section relative flex h-screen items-center justify-center overflow-hidden\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow\"\r\n      style=\"top: -100px; left: -100px; width: 500px; height: 500px; opacity: 0.5\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower\"\r\n      style=\"right: -50px; bottom: -50px; width: 400px; height: 400px; opacity: 0.4\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow\"\r\n      style=\"top: 40%; left: 60%; width: 300px; height: 300px; opacity: 0.35\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower\"\r\n      style=\"top: 10%; right: 10%; width: 450px; height: 450px; opacity: 0.45\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow\"\r\n      style=\"bottom: 20%; left: 5%; width: 350px; height: 350px; opacity: 0.4\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower\"\r\n      style=\"top: 60%; right: 30%; width: 300px; height: 300px; opacity: 0.35\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 px-6 text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span class=\"hero-badge\" data-aos=\"fade-down\" data-aos-delay=\"200\">Digital Future</span>\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-10 h-auto\"\r\n      style=\"width: 50vw; max-width: 500px\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1 class=\"hero-headline\" data-aos=\"fade-up\" data-aos-delay=\"400\">\r\n      {{ 'hero.headline' | translate }}\r\n      <span class=\"z-text-brand-gradient\">{{ 'hero.headlineAccent' | translate }}</span>\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p class=\"hero-subtitle\" data-aos=\"fade-up\" data-aos-delay=\"600\">\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"hero-scroll\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-offset=\"-200\"\r\n    data-aos-delay=\"2500\"\r\n  >\r\n    <span class=\"hero-scroll__label\">Scroll</span>\r\n    <div class=\"hero-scroll__indicator\">\r\n      <div class=\"hero-scroll__dot\"></div>\r\n    </div>\r\n  </div>\r\n</section>", styles: ["@keyframes zemios-float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes zemios-float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}.animate-float-slow{animation:zemios-float-slow 6s ease-in-out infinite}.animate-float-slower{animation:zemios-float-slower 8s ease-in-out infinite}.hero-logo{filter:drop-shadow(0 0 30px rgba(255,255,255,.1));animation:zemios-logo-breathe 4s ease-in-out infinite}@keyframes zemios-logo-breathe{0%,to{filter:drop-shadow(0 0 30px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 50px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}.orb-purple{background:radial-gradient(circle,var(--zemios-violet-500) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,var(--zemios-neon-cyan) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,var(--zemios-neon-magenta) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}.orb-orange{background:radial-gradient(circle,var(--zemios-neon-orange) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,var(--zemios-rose-500) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,var(--zemios-gold-400) 0%,transparent 70%)}.hero-badge{display:inline-block;margin-bottom:var(--zemios-space-8);padding:var(--zemios-space-1\\.5) var(--zemios-space-4);border-radius:var(--zemios-radius-full);border:1px solid rgba(148,163,184,.4);background:#0f172a99;color:var(--zemios-slate-400);font-family:var(--zemios-font-body);font-size:11px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.hero-headline{margin:0 auto var(--zemios-space-6);max-width:48rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:600;line-height:1.1;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.hero-headline{font-size:var(--zemios-text-5xl)}}@media(min-width:1024px){.hero-headline{font-size:var(--zemios-text-6xl)}}.hero-subtitle{margin:0 auto;max-width:36rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.hero-scroll{position:absolute;bottom:var(--zemios-space-12);display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-3);cursor:pointer;opacity:.4;transition:opacity var(--zemios-duration-base) var(--zemios-easing-default)}.hero-scroll:hover{opacity:.8}.hero-scroll__label{font-size:9px;font-weight:500;letter-spacing:.3em;color:var(--zemios-slate-500);text-transform:uppercase}.hero-scroll__indicator{display:flex;align-items:flex-start;justify-content:center;width:1.25rem;height:2rem;padding:.25rem;border:1px solid rgba(148,163,184,.5);border-radius:var(--zemios-radius-full)}.hero-scroll__dot{width:.25rem;height:.5rem;border-radius:var(--zemios-radius-full);background:var(--zemios-slate-400);animation:zemios-bounce 2s ease-in-out infinite}@keyframes zemios-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(8px)}}\n"] }]
        }] });

class HeroMobileComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroMobileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: HeroMobileComponent, isStandalone: true, selector: "z-hero-mobile", ngImport: i0, template: "<section class=\"hero-mobile-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow\"\r\n      style=\"top: -80px; left: -80px; width: 350px; height: 350px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower\"\r\n      style=\"right: -50px; bottom: -50px; width: 300px; height: 300px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow\"\r\n      style=\"top: 30%; right: 10%; width: 250px; height: 250px; opacity: 0.8; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower\"\r\n      style=\"top: 60%; left: -60px; width: 280px; height: 280px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow\"\r\n      style=\"right: 10%; bottom: 20%; width: 220px; height: 220px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower\"\r\n      style=\"top: 10%; right: -50px; width: 200px; height: 200px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 w-full text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span class=\"hero-mobile-badge\">Digital Future</span>\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-8 h-auto\"\r\n      style=\"width: 55vw\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1 class=\"hero-mobile-headline\" data-aos=\"fade-up\" data-aos-delay=\"300\">\r\n      {{ 'hero.headline' | translate }}\r\n      <span class=\"z-text-brand-gradient\">{{ 'hero.headlineAccent' | translate }}</span>\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p class=\"hero-mobile-subtitle\" data-aos=\"fade-up\" data-aos-delay=\"500\">\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"hero-mobile-scroll\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-delay=\"1000\"\r\n    data-aos-offset=\"-200\"\r\n  >\r\n    <span class=\"hero-mobile-scroll__label\">{{ 'hero.scrollMobile' | translate }}</span>\r\n    <i class=\"bi bi-hand-index animate-bounce text-2xl text-slate-400\"></i>\r\n  </div>\r\n</section>", styles: [":host{display:block}.hero-mobile-section{background:var(--zemios-slate-950)}.hero-logo{filter:drop-shadow(0 0 20px rgba(255,255,255,.1));animation:zemios-logo-breathe 4s ease-in-out infinite}@keyframes zemios-logo-breathe{0%,to{filter:drop-shadow(0 0 20px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 40px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-purple{background:radial-gradient(circle,var(--zemios-violet-500) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,var(--zemios-neon-cyan) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,var(--zemios-neon-magenta) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-orange{background:radial-gradient(circle,var(--zemios-neon-orange) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,var(--zemios-rose-500) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,var(--zemios-gold-400) 0%,transparent 70%)}.hero-mobile-badge{display:inline-block;margin-bottom:var(--zemios-space-6);padding:var(--zemios-space-1) var(--zemios-space-3);border-radius:var(--zemios-radius-full);border:1px solid rgba(148,163,184,.4);background:#0f172a99;color:var(--zemios-slate-400);font-family:var(--zemios-font-body);font-size:10px;font-weight:500;letter-spacing:.25em;text-transform:uppercase;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.hero-mobile-headline{margin:0 auto var(--zemios-space-5);font-family:var(--zemios-font-display);font-size:var(--zemios-text-3xl);font-weight:600;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-inverse)}.hero-mobile-subtitle{margin:0 auto;max-width:24rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-base);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.hero-mobile-scroll{position:absolute;bottom:var(--zemios-space-8);display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-2);opacity:.4}.hero-mobile-scroll__label{font-size:8px;font-weight:500;letter-spacing:.3em;color:var(--zemios-slate-500);text-transform:uppercase}.animate-float-slow{animation:zemios-float-slow 6s ease-in-out infinite}.animate-float-slower{animation:zemios-float-slower 8s ease-in-out infinite reverse}@keyframes zemios-float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes zemios-float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroMobileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-hero-mobile', standalone: true, imports: [CommonModule, TranslateModule], template: "<section class=\"hero-mobile-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow\"\r\n      style=\"top: -80px; left: -80px; width: 350px; height: 350px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower\"\r\n      style=\"right: -50px; bottom: -50px; width: 300px; height: 300px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow\"\r\n      style=\"top: 30%; right: 10%; width: 250px; height: 250px; opacity: 0.8; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower\"\r\n      style=\"top: 60%; left: -60px; width: 280px; height: 280px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow\"\r\n      style=\"right: 10%; bottom: 20%; width: 220px; height: 220px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower\"\r\n      style=\"top: 10%; right: -50px; width: 200px; height: 200px; opacity: 0.7; filter: blur(50px)\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 w-full text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span class=\"hero-mobile-badge\">Digital Future</span>\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-8 h-auto\"\r\n      style=\"width: 55vw\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1 class=\"hero-mobile-headline\" data-aos=\"fade-up\" data-aos-delay=\"300\">\r\n      {{ 'hero.headline' | translate }}\r\n      <span class=\"z-text-brand-gradient\">{{ 'hero.headlineAccent' | translate }}</span>\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p class=\"hero-mobile-subtitle\" data-aos=\"fade-up\" data-aos-delay=\"500\">\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"hero-mobile-scroll\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-delay=\"1000\"\r\n    data-aos-offset=\"-200\"\r\n  >\r\n    <span class=\"hero-mobile-scroll__label\">{{ 'hero.scrollMobile' | translate }}</span>\r\n    <i class=\"bi bi-hand-index animate-bounce text-2xl text-slate-400\"></i>\r\n  </div>\r\n</section>", styles: [":host{display:block}.hero-mobile-section{background:var(--zemios-slate-950)}.hero-logo{filter:drop-shadow(0 0 20px rgba(255,255,255,.1));animation:zemios-logo-breathe 4s ease-in-out infinite}@keyframes zemios-logo-breathe{0%,to{filter:drop-shadow(0 0 20px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 40px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-purple{background:radial-gradient(circle,var(--zemios-violet-500) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,var(--zemios-neon-cyan) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,var(--zemios-neon-magenta) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-orange{background:radial-gradient(circle,var(--zemios-neon-orange) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,var(--zemios-rose-500) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,var(--zemios-gold-400) 0%,transparent 70%)}.hero-mobile-badge{display:inline-block;margin-bottom:var(--zemios-space-6);padding:var(--zemios-space-1) var(--zemios-space-3);border-radius:var(--zemios-radius-full);border:1px solid rgba(148,163,184,.4);background:#0f172a99;color:var(--zemios-slate-400);font-family:var(--zemios-font-body);font-size:10px;font-weight:500;letter-spacing:.25em;text-transform:uppercase;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.hero-mobile-headline{margin:0 auto var(--zemios-space-5);font-family:var(--zemios-font-display);font-size:var(--zemios-text-3xl);font-weight:600;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-inverse)}.hero-mobile-subtitle{margin:0 auto;max-width:24rem;font-family:var(--zemios-font-display);font-size:var(--zemios-text-base);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.hero-mobile-scroll{position:absolute;bottom:var(--zemios-space-8);display:flex;flex-direction:column;align-items:center;gap:var(--zemios-space-2);opacity:.4}.hero-mobile-scroll__label{font-size:8px;font-weight:500;letter-spacing:.3em;color:var(--zemios-slate-500);text-transform:uppercase}.animate-float-slow{animation:zemios-float-slow 6s ease-in-out infinite}.animate-float-slower{animation:zemios-float-slower 8s ease-in-out infinite reverse}@keyframes zemios-float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes zemios-float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}\n"] }]
        }] });

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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: CtaComponent, isStandalone: true, selector: "z-cta", ngImport: i0, template: "<!-- CONTACT CTA -->\r\n<section class=\"z-cta\">\r\n  <div class=\"z-cta__inner\">\r\n    <h2 class=\"z-cta__title\">\r\n      {{ 'cta.title' | translate }}\r\n    </h2>\r\n\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-cta{position:relative;padding:var(--zemios-space-24) 0}.z-cta__inner{max-width:var(--zemios-content-max);margin:0 auto;padding:0 var(--zemios-space-6);text-align:center}.z-cta__title{margin:0 0 var(--zemios-space-12);font-family:var(--zemios-font-display);font-weight:700;font-size:var(--zemios-text-5xl);line-height:1.1;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.z-cta__title{font-size:var(--zemios-text-7xl)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
    platformId;
    isBrowser;
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
    constructor(platformId) {
        this.platformId = platformId;
        this.isBrowser = isPlatformBrowser(this.platformId);
    }
    ngAfterViewInit() {
        if (this.isBrowser) {
            import('@lottiefiles/dotlottie-wc');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: FeaturesGridComponent, deps: [{ token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: FeaturesGridComponent, isStandalone: true, selector: "z-features-grid", ngImport: i0, template: "<!-- OUR CORE - Open layout with Lottie placeholders -->\r\n<section class=\"z-features-grid\">\r\n  <div class=\"z-features-grid__inner\">\r\n    <div class=\"z-features-grid__grid\">\r\n      @for (feature of features; track feature.title; let i = $index) {\r\n        <div\r\n          class=\"z-feature\"\r\n          data-aos=\"fade-up\"\r\n          [attr.data-aos-delay]=\"feature.delay\"\r\n        >\r\n          <!-- Lottie animation -->\r\n          <div\r\n            class=\"z-feature__icon\"\r\n            [style.--feature-rgb]=\"feature.rgbColor\"\r\n          >\r\n            <dotlottie-wc [attr.src]=\"feature.lottieFile\" autoplay loop></dotlottie-wc>\r\n          </div>\r\n\r\n          <!-- Title -->\r\n          <h3 class=\"z-feature__title\">\r\n            {{ feature.title | translate }}\r\n          </h3>\r\n\r\n          <!-- Description -->\r\n          <p class=\"z-feature__description\">\r\n            {{ feature.description | translate }}\r\n          </p>\r\n\r\n          <!-- Subtle separator (not on last item) -->\r\n          @if (!$last) {\r\n            <div class=\"z-feature__separator\"></div>\r\n          }\r\n        </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-features-grid{position:relative;overflow:hidden;padding:var(--zemios-space-24) 0}.z-features-grid__inner{max-width:var(--zemios-content-wide);margin:0 auto;padding:0 var(--zemios-space-6)}.z-features-grid__grid{display:grid;gap:var(--zemios-space-16);grid-template-columns:1fr}@media(min-width:768px){.z-features-grid__grid{grid-template-columns:repeat(3,1fr)}}.z-feature{display:flex;flex-direction:column;align-items:center;text-align:center}.z-feature__icon{width:200px;height:200px;margin-bottom:var(--zemios-space-8);border-radius:28px;display:flex;align-items:center;justify-content:center;overflow:hidden}.z-feature__icon dotlottie-wc{width:100%;height:100%}.z-feature__title{margin:0 0 var(--zemios-space-3.5);font-family:var(--zemios-font-display);font-size:var(--zemios-text-xl);font-weight:600;line-height:1.25;color:var(--zemios-text-inverse);letter-spacing:-.01em}.z-feature__description{margin:0;max-width:24rem;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);line-height:1.75;font-weight:300;color:var(--zemios-slate-500)}.z-feature__separator{width:40px;height:1px;background:#ffffff0f;margin-top:var(--zemios-space-12)}.z-feature:hover{transform:translateY(-4px);transition:transform var(--zemios-duration-base) var(--zemios-easing-default)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: FeaturesGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-features-grid', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, TranslateModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: "<!-- OUR CORE - Open layout with Lottie placeholders -->\r\n<section class=\"z-features-grid\">\r\n  <div class=\"z-features-grid__inner\">\r\n    <div class=\"z-features-grid__grid\">\r\n      @for (feature of features; track feature.title; let i = $index) {\r\n        <div\r\n          class=\"z-feature\"\r\n          data-aos=\"fade-up\"\r\n          [attr.data-aos-delay]=\"feature.delay\"\r\n        >\r\n          <!-- Lottie animation -->\r\n          <div\r\n            class=\"z-feature__icon\"\r\n            [style.--feature-rgb]=\"feature.rgbColor\"\r\n          >\r\n            <dotlottie-wc [attr.src]=\"feature.lottieFile\" autoplay loop></dotlottie-wc>\r\n          </div>\r\n\r\n          <!-- Title -->\r\n          <h3 class=\"z-feature__title\">\r\n            {{ feature.title | translate }}\r\n          </h3>\r\n\r\n          <!-- Description -->\r\n          <p class=\"z-feature__description\">\r\n            {{ feature.description | translate }}\r\n          </p>\r\n\r\n          <!-- Subtle separator (not on last item) -->\r\n          @if (!$last) {\r\n            <div class=\"z-feature__separator\"></div>\r\n          }\r\n        </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-features-grid{position:relative;overflow:hidden;padding:var(--zemios-space-24) 0}.z-features-grid__inner{max-width:var(--zemios-content-wide);margin:0 auto;padding:0 var(--zemios-space-6)}.z-features-grid__grid{display:grid;gap:var(--zemios-space-16);grid-template-columns:1fr}@media(min-width:768px){.z-features-grid__grid{grid-template-columns:repeat(3,1fr)}}.z-feature{display:flex;flex-direction:column;align-items:center;text-align:center}.z-feature__icon{width:200px;height:200px;margin-bottom:var(--zemios-space-8);border-radius:28px;display:flex;align-items:center;justify-content:center;overflow:hidden}.z-feature__icon dotlottie-wc{width:100%;height:100%}.z-feature__title{margin:0 0 var(--zemios-space-3.5);font-family:var(--zemios-font-display);font-size:var(--zemios-text-xl);font-weight:600;line-height:1.25;color:var(--zemios-text-inverse);letter-spacing:-.01em}.z-feature__description{margin:0;max-width:24rem;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);line-height:1.75;font-weight:300;color:var(--zemios-slate-500)}.z-feature__separator{width:40px;height:1px;background:#ffffff0f;margin-top:var(--zemios-space-12)}.z-feature:hover{transform:translateY(-4px);transition:transform var(--zemios-duration-base) var(--zemios-easing-default)}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });

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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: ProcessComponent, isStandalone: true, selector: "z-process", inputs: { steps: "steps" }, ngImport: i0, template: "<!-- METHODOLOGY - Process Timeline -->\r\n<section class=\"z-process\">\r\n  <div class=\"z-process__inner\">\r\n    <div class=\"z-process__grid\">\r\n      <div data-aos=\"fade-right\" class=\"z-process__intro\">\r\n        <span class=\"z-process__badge\">{{ 'process.badge' | translate }}</span>\r\n        <h2 class=\"z-process__title\">\r\n          {{ 'process.title' | translate }}\r\n          <span class=\"z-text-brand-gradient\">{{ 'process.titleAccent' | translate }}</span>\r\n        </h2>\r\n        <p class=\"z-process__subtitle\">{{ 'process.subtitle' | translate }}</p>\r\n      </div>\r\n\r\n      <!-- Timeline -->\r\n      <div class=\"z-process__timeline\" data-aos=\"fade-left\">\r\n        @for (step of steps; track step.number; let last = $last) {\r\n          <div class=\"z-process-step\">\r\n            <div class=\"z-process-step__rail\">\r\n              <div class=\"z-process-step__node\">\r\n                <span class=\"z-process-step__number\">{{ step.number }}</span>\r\n              </div>\r\n              @if (!last) {\r\n                <div class=\"z-process-step__connector\"></div>\r\n              }\r\n            </div>\r\n            <div class=\"z-process-step__body\">\r\n              <h4 class=\"z-process-step__title\">{{ step.title }}</h4>\r\n              <p class=\"z-process-step__description\">{{ step.description }}</p>\r\n            </div>\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-process{position:relative;padding:var(--zemios-space-24) 0}.z-process__inner{max-width:var(--zemios-content-max);margin:0 auto;padding:0 var(--zemios-space-6)}.z-process__grid{display:grid;grid-template-columns:1fr;gap:var(--zemios-space-16);align-items:center}@media(min-width:1024px){.z-process__grid{grid-template-columns:1fr 1fr}}.z-process__badge{display:block;margin-bottom:var(--zemios-space-4);font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:700;letter-spacing:.18em;color:var(--zemios-sky-400);text-transform:uppercase}.z-process__title{margin:0 0 var(--zemios-space-8);font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.z-process__title{font-size:var(--zemios-text-5xl)}}.z-process__subtitle{margin:0 0 var(--zemios-space-8);font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.z-process__timeline{position:relative;display:flex;flex-direction:column;gap:var(--zemios-space-6)}.z-process-step{position:relative;display:flex;align-items:flex-start;gap:var(--zemios-space-6)}.z-process-step__rail{display:flex;flex-direction:column;align-items:center}.z-process-step__node{position:relative;z-index:10;display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:2px solid var(--zemios-border-glass);border-radius:var(--zemios-radius-full);background:var(--zemios-sky-500);transition:border-color var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-process-step:hover .z-process-step__node{border-color:var(--zemios-sky-400)}.z-process-step__number{font-family:var(--zemios-font-body);font-size:var(--zemios-text-lg);font-weight:700;color:var(--zemios-sky-400)}.z-process-step__connector{width:2px;height:48px;background:linear-gradient(to bottom,rgba(56,189,248,.5),var(--zemios-violet-300))}.z-process-step__body{padding-top:var(--zemios-space-3)}.z-process-step__title{margin:0 0 var(--zemios-space-2);font-family:var(--zemios-font-display);font-size:var(--zemios-text-xl);font-weight:700;color:var(--zemios-text-inverse)}.z-process-step__description{margin:0;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:400;line-height:1.6;color:var(--zemios-slate-500)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ProcessComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-process', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, TranslateModule], template: "<!-- METHODOLOGY - Process Timeline -->\r\n<section class=\"z-process\">\r\n  <div class=\"z-process__inner\">\r\n    <div class=\"z-process__grid\">\r\n      <div data-aos=\"fade-right\" class=\"z-process__intro\">\r\n        <span class=\"z-process__badge\">{{ 'process.badge' | translate }}</span>\r\n        <h2 class=\"z-process__title\">\r\n          {{ 'process.title' | translate }}\r\n          <span class=\"z-text-brand-gradient\">{{ 'process.titleAccent' | translate }}</span>\r\n        </h2>\r\n        <p class=\"z-process__subtitle\">{{ 'process.subtitle' | translate }}</p>\r\n      </div>\r\n\r\n      <!-- Timeline -->\r\n      <div class=\"z-process__timeline\" data-aos=\"fade-left\">\r\n        @for (step of steps; track step.number; let last = $last) {\r\n          <div class=\"z-process-step\">\r\n            <div class=\"z-process-step__rail\">\r\n              <div class=\"z-process-step__node\">\r\n                <span class=\"z-process-step__number\">{{ step.number }}</span>\r\n              </div>\r\n              @if (!last) {\r\n                <div class=\"z-process-step__connector\"></div>\r\n              }\r\n            </div>\r\n            <div class=\"z-process-step__body\">\r\n              <h4 class=\"z-process-step__title\">{{ step.title }}</h4>\r\n              <p class=\"z-process-step__description\">{{ step.description }}</p>\r\n            </div>\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>", styles: [":host{display:block}.z-process{position:relative;padding:var(--zemios-space-24) 0}.z-process__inner{max-width:var(--zemios-content-max);margin:0 auto;padding:0 var(--zemios-space-6)}.z-process__grid{display:grid;grid-template-columns:1fr;gap:var(--zemios-space-16);align-items:center}@media(min-width:1024px){.z-process__grid{grid-template-columns:1fr 1fr}}.z-process__badge{display:block;margin-bottom:var(--zemios-space-4);font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:700;letter-spacing:.18em;color:var(--zemios-sky-400);text-transform:uppercase}.z-process__title{margin:0 0 var(--zemios-space-8);font-family:var(--zemios-font-display);font-size:var(--zemios-text-4xl);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:var(--zemios-text-inverse)}@media(min-width:768px){.z-process__title{font-size:var(--zemios-text-5xl)}}.z-process__subtitle{margin:0 0 var(--zemios-space-8);font-family:var(--zemios-font-display);font-size:var(--zemios-text-lg);font-weight:300;line-height:1.6;color:var(--zemios-slate-400)}.z-process__timeline{position:relative;display:flex;flex-direction:column;gap:var(--zemios-space-6)}.z-process-step{position:relative;display:flex;align-items:flex-start;gap:var(--zemios-space-6)}.z-process-step__rail{display:flex;flex-direction:column;align-items:center}.z-process-step__node{position:relative;z-index:10;display:flex;align-items:center;justify-content:center;width:56px;height:56px;border:2px solid var(--zemios-border-glass);border-radius:var(--zemios-radius-full);background:var(--zemios-sky-500);transition:border-color var(--zemios-duration-moderate) var(--zemios-easing-default)}.z-process-step:hover .z-process-step__node{border-color:var(--zemios-sky-400)}.z-process-step__number{font-family:var(--zemios-font-body);font-size:var(--zemios-text-lg);font-weight:700;color:var(--zemios-sky-400)}.z-process-step__connector{width:2px;height:48px;background:linear-gradient(to bottom,rgba(56,189,248,.5),var(--zemios-violet-300))}.z-process-step__body{padding-top:var(--zemios-space-3)}.z-process-step__title{margin:0 0 var(--zemios-space-2);font-family:var(--zemios-font-display);font-size:var(--zemios-text-xl);font-weight:700;color:var(--zemios-text-inverse)}.z-process-step__description{margin:0;font-family:var(--zemios-font-body);font-size:var(--zemios-text-sm);font-weight:400;line-height:1.6;color:var(--zemios-slate-500)}\n"] }]
        }], propDecorators: { steps: [{
                type: Input
            }] } });

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
 * Consumers import from this entry only. The package.json `exports`
 * field maps the root entry, the tokens sub-entry and the css sub-entry
 * to the right files.
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
 * single change to a token ripples across every Zemios product.
 */
// ── Atoms ─────────────────────────────────────────────────────────

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, CardHoverDirective, CtaComponent, FeaturesGridComponent, HeroComponent, HeroMobileComponent, MadeByComponent, PhoneMockupComponent, ProcessComponent, TitleComponent };
//# sourceMappingURL=zemios-landkit.mjs.map
