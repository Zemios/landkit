import * as i1 from '@angular/common';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as i0 from '@angular/core';
import { Input, Component, ChangeDetectionStrategy, PLATFORM_ID, Inject, CUSTOM_ELEMENTS_SCHEMA, HostListener, HostBinding, Directive } from '@angular/core';
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
  `, isInline: true, styles: [".btn{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;padding:.6rem 1.2rem;border-radius:9999px;border:1px solid rgba(148,163,184,.5);font-size:.9rem;font-weight:600;letter-spacing:.01em;background:#0f172af2;color:#e5e7eb;text-decoration:none;cursor:pointer;transition:transform .16s ease,box-shadow .16s ease,background .16s ease,border-color .16s ease,filter .16s ease}.btn:hover{transform:translateY(-1px);filter:brightness(1.05);border-color:#f8fafccc}.btn--primary{background:linear-gradient(135deg,#0ea5e9,#0284c7);border-color:#38bdf880;color:#f8fafc;box-shadow:0 10px 30px #38bdf840,0 0 0 1px #0f172ad9}.btn--primary:hover{filter:brightness(1.1);box-shadow:0 14px 40px #38bdf84d,0 0 0 1px #38bdf899}.btn--accent{background:#fbbf24;color:#1f2937;border:none;box-shadow:0 12px 30px #facc1573,0 0 0 1px #0f172ae6}.btn--accent:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.05)}.btn--light{background:linear-gradient(135deg,#f9fafb,#e5e7eb);color:#020617;box-shadow:0 12px 35px #0f172af2,0 0 0 1px #0f172ae6}.btn--light:hover{filter:brightness(.95)}.btn--danger{background:linear-gradient(135deg,#ef4444,#b91c1c);color:#fef2f2;border:1px solid rgba(239,68,68,.5);box-shadow:0 10px 25px #ef444440,0 0 0 1px #0f172acc}.btn--danger:hover{filter:brightness(1.1)}.btn--outline{background:transparent;color:#e5e7eb;border:1px solid rgba(148,163,184,.6);box-shadow:none}.btn--outline:hover{background:#94a3b826}.btn--ghost{background:transparent;border:none;color:#cbd5e1;box-shadow:none}.btn--ghost:hover{color:#f1f5f9;filter:brightness(1.1)}.btn:disabled,.btn[disabled]{opacity:.6;cursor:not-allowed;transform:none;filter:none}.btn i,.btn svg{margin-right:.4rem;font-size:1rem;line-height:1}.btn--prism-primary{background-image:linear-gradient(135deg,#38bdf8,#6366f1,#ec4899);color:#020617;border:none;box-shadow:0 10px 30px #38bdf866,0 0 0 1px #0f172ab3}.btn--prism-primary:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.1)}.btn--prism-outline{background:radial-gradient(circle at 0 0,rgba(56,189,248,.35),transparent 55%),#0f172ad9;color:#e0f2fe;border:1px solid rgba(148,163,184,.7);box-shadow:none}.btn--prism-outline:hover{border-color:#f8fafce6;box-shadow:0 12px 35px #0f172ae6}.btn--prism-ghost{background:#0f172ad9;color:#f1f5f9e6;border:1px solid rgba(71,85,105,.6)}.btn--prism-ghost:hover{border-color:#94a3b8cc;background:#0f172af2}.btn--social{background:#0f172a99;border:1px solid rgba(71,85,105,.7);color:#cbd5e1;padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--social:hover{box-shadow:0 0 25px #94a3b873;border-color:#94a3b8f2;color:#fff}.btn--circle{border-radius:9999px;padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--circle i,.btn--circle svg{margin-right:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
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
  `, styles: [".btn{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;padding:.6rem 1.2rem;border-radius:9999px;border:1px solid rgba(148,163,184,.5);font-size:.9rem;font-weight:600;letter-spacing:.01em;background:#0f172af2;color:#e5e7eb;text-decoration:none;cursor:pointer;transition:transform .16s ease,box-shadow .16s ease,background .16s ease,border-color .16s ease,filter .16s ease}.btn:hover{transform:translateY(-1px);filter:brightness(1.05);border-color:#f8fafccc}.btn--primary{background:linear-gradient(135deg,#0ea5e9,#0284c7);border-color:#38bdf880;color:#f8fafc;box-shadow:0 10px 30px #38bdf840,0 0 0 1px #0f172ad9}.btn--primary:hover{filter:brightness(1.1);box-shadow:0 14px 40px #38bdf84d,0 0 0 1px #38bdf899}.btn--accent{background:#fbbf24;color:#1f2937;border:none;box-shadow:0 12px 30px #facc1573,0 0 0 1px #0f172ae6}.btn--accent:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.05)}.btn--light{background:linear-gradient(135deg,#f9fafb,#e5e7eb);color:#020617;box-shadow:0 12px 35px #0f172af2,0 0 0 1px #0f172ae6}.btn--light:hover{filter:brightness(.95)}.btn--danger{background:linear-gradient(135deg,#ef4444,#b91c1c);color:#fef2f2;border:1px solid rgba(239,68,68,.5);box-shadow:0 10px 25px #ef444440,0 0 0 1px #0f172acc}.btn--danger:hover{filter:brightness(1.1)}.btn--outline{background:transparent;color:#e5e7eb;border:1px solid rgba(148,163,184,.6);box-shadow:none}.btn--outline:hover{background:#94a3b826}.btn--ghost{background:transparent;border:none;color:#cbd5e1;box-shadow:none}.btn--ghost:hover{color:#f1f5f9;filter:brightness(1.1)}.btn:disabled,.btn[disabled]{opacity:.6;cursor:not-allowed;transform:none;filter:none}.btn i,.btn svg{margin-right:.4rem;font-size:1rem;line-height:1}.btn--prism-primary{background-image:linear-gradient(135deg,#38bdf8,#6366f1,#ec4899);color:#020617;border:none;box-shadow:0 10px 30px #38bdf866,0 0 0 1px #0f172ab3}.btn--prism-primary:hover{transform:translateY(-1px) scale(1.02);filter:brightness(1.1)}.btn--prism-outline{background:radial-gradient(circle at 0 0,rgba(56,189,248,.35),transparent 55%),#0f172ad9;color:#e0f2fe;border:1px solid rgba(148,163,184,.7);box-shadow:none}.btn--prism-outline:hover{border-color:#f8fafce6;box-shadow:0 12px 35px #0f172ae6}.btn--prism-ghost{background:#0f172ad9;color:#f1f5f9e6;border:1px solid rgba(71,85,105,.6)}.btn--prism-ghost:hover{border-color:#94a3b8cc;background:#0f172af2}.btn--social{background:#0f172a99;border:1px solid rgba(71,85,105,.7);color:#cbd5e1;padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--social:hover{box-shadow:0 0 25px #94a3b873;border-color:#94a3b8f2;color:#fff}.btn--circle{border-radius:9999px;padding:0;width:2.75rem;height:2.75rem;display:inline-flex;align-items:center;justify-content:center}.btn--circle i,.btn--circle svg{margin-right:0}\n"] }]
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
 *   into the page chrome. This was the original look.
 * - `pill`: the rounded pill with a heart icon, a "with love" word in
 *   the brand rose colour, and a hover-state that lifts the background
 *   opacity. Suited for marketing-page footers on a dark surface.
 *
 * `theme` controls the heart / accent colour contrast. `light` is the
 * default (rose-400 works on both light and dark backgrounds). `dark`
 * lightens the heart to a softer rose-300 and bumps the link weight.
 *
 * Backwards compat: existing consumers (Chronos, Even2Me, Courses)
 * render `<z-made-by></z-made-by>` and get the original `plain` +
 * `light` look because both inputs default to their initial values.
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
  `, isInline: true, styles: [".z-made-by{font-family:inherit;color:inherit;text-decoration:none;transition:opacity .3s ease}.z-made-by--plain{display:flex;align-items:center;justify-content:center;gap:.35em;padding:.75rem 0;font-size:.8rem;letter-spacing:.04em;opacity:.55}.z-made-by--plain:hover{opacity:.85}.z-made-by--plain .z-made-by__text{font-weight:300}.z-made-by--plain .z-made-by__link{color:inherit;font-weight:600;text-decoration:none;transition:opacity .2s ease}.z-made-by--plain .z-made-by__link:hover{opacity:1;text-decoration:underline}.z-made-by--pill{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem .875rem;border-radius:9999px;font-size:.8rem;background:#0f172ab3;color:#e2e8f0;min-height:44px}.z-made-by--pill:hover{background:#0f172ad9}.z-made-by--pill .z-made-by__heart{width:.875rem;height:.875rem;color:#fb7185;flex-shrink:0}.z-made-by--pill .z-made-by__copy{display:inline-flex;align-items:baseline;gap:.25rem;flex-wrap:wrap}.z-made-by--pill .z-made-by__love{color:#fb7185;font-weight:500}.z-made-by--pill .z-made-by__brand{color:#fff;font-weight:600}.z-made-by--pill.z-made-by--dark .z-made-by__heart,.z-made-by--pill.z-made-by--dark .z-made-by__love{color:#fda4af}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
  `, styles: [".z-made-by{font-family:inherit;color:inherit;text-decoration:none;transition:opacity .3s ease}.z-made-by--plain{display:flex;align-items:center;justify-content:center;gap:.35em;padding:.75rem 0;font-size:.8rem;letter-spacing:.04em;opacity:.55}.z-made-by--plain:hover{opacity:.85}.z-made-by--plain .z-made-by__text{font-weight:300}.z-made-by--plain .z-made-by__link{color:inherit;font-weight:600;text-decoration:none;transition:opacity .2s ease}.z-made-by--plain .z-made-by__link:hover{opacity:1;text-decoration:underline}.z-made-by--pill{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem .875rem;border-radius:9999px;font-size:.8rem;background:#0f172ab3;color:#e2e8f0;min-height:44px}.z-made-by--pill:hover{background:#0f172ad9}.z-made-by--pill .z-made-by__heart{width:.875rem;height:.875rem;color:#fb7185;flex-shrink:0}.z-made-by--pill .z-made-by__copy{display:inline-flex;align-items:baseline;gap:.25rem;flex-wrap:wrap}.z-made-by--pill .z-made-by__love{color:#fb7185;font-weight:500}.z-made-by--pill .z-made-by__brand{color:#fff;font-weight:600}.z-made-by--pill.z-made-by--dark .z-made-by__heart,.z-made-by--pill.z-made-by--dark .z-made-by__love{color:#fda4af}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], theme: [{
                type: Input
            }] } });

class TitleComponent {
    accentText = false;
    /** @deprecated Use accentText instead */
    rainbowText = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: TitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: TitleComponent, isStandalone: true, selector: "z-title", inputs: { accentText: "accentText", rainbowText: "rainbowText" }, ngImport: i0, template: `
    <section class="relative py-12 md:py-16">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <p
          class="text-3xl leading-relaxed font-light md:text-4xl lg:text-5xl"
          style="font-family: 'Outfit', sans-serif;"
          [class.text-white]="!accentText"
        >
          @if (!accentText) {
            <ng-content></ng-content>
          }
          @if (accentText) {
            <span
              style="background: linear-gradient(135deg, #e2e8f0, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
              class="font-semibold"
              ><ng-content></ng-content
            ></span>
          }
        </p>
      </div>
    </section>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: TitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'z-title',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <section class="relative py-12 md:py-16">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <p
          class="text-3xl leading-relaxed font-light md:text-4xl lg:text-5xl"
          style="font-family: 'Outfit', sans-serif;"
          [class.text-white]="!accentText"
        >
          @if (!accentText) {
            <ng-content></ng-content>
          }
          @if (accentText) {
            <span
              style="background: linear-gradient(135deg, #e2e8f0, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
              class="font-semibold"
              ><ng-content></ng-content
            ></span>
          }
        </p>
      </div>
    </section>
  `
                }]
        }], propDecorators: { accentText: [{
                type: Input
            }], rainbowText: [{
                type: Input
            }] } });

class HeroComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: HeroComponent, isStandalone: true, selector: "z-hero", ngImport: i0, template: "<section class=\"hero-section relative flex h-screen items-center justify-center overflow-hidden\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div class=\"neon-orb orb-purple animate-float-slow top-[-100px] left-[-100px] h-[500px] w-[500px] opacity-50\"></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower right-[-50px] bottom-[-50px] h-[400px] w-[400px] opacity-40\"\r\n    ></div>\r\n    <div class=\"neon-orb orb-magenta animate-float-slow top-[40%] left-[60%] h-[300px] w-[300px] opacity-35\"></div>\r\n    <div class=\"warm-orb orb-orange animate-float-slower top-[10%] right-[10%] h-[450px] w-[450px] opacity-45\"></div>\r\n    <div class=\"warm-orb orb-red animate-float-slow bottom-[20%] left-[5%] h-[350px] w-[350px] opacity-40\"></div>\r\n    <div class=\"warm-orb orb-yellow animate-float-slower top-[60%] right-[30%] h-[300px] w-[300px] opacity-35\"></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 px-6 text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span\r\n      class=\"mb-8 inline-block rounded-full border border-slate-700/50 bg-slate-900/60 px-4 py-1.5 text-[11px] font-medium tracking-[0.3em] text-slate-400 uppercase backdrop-blur-sm\"\r\n      data-aos=\"fade-down\"\r\n      data-aos-delay=\"200\"\r\n      >Digital Future</span\r\n    >\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-10 h-auto w-[50vw] max-w-[500px] md:w-[35vw] lg:w-[25vw]\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1\r\n      class=\"mx-auto mb-6 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl lg:text-6xl\"\r\n      style=\"font-family: &quot;Outfit&quot;, sans-serif\"\r\n      data-aos=\"fade-up\"\r\n      data-aos-delay=\"400\"\r\n    >\r\n      {{ 'hero.headline' | translate }}\r\n      <span\r\n        style=\"\r\n          background: linear-gradient(135deg, #60a5fa, #a78bfa);\r\n          -webkit-background-clip: text;\r\n          -webkit-text-fill-color: transparent;\r\n          background-clip: text;\r\n        \"\r\n        >{{ 'hero.headlineAccent' | translate }}</span\r\n      >\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p\r\n      class=\"mx-auto max-w-xl text-lg leading-relaxed font-light text-slate-400\"\r\n      style=\"font-family: &quot;Outfit&quot;, sans-serif\"\r\n      data-aos=\"fade-up\"\r\n      data-aos-delay=\"600\"\r\n    >\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"absolute bottom-12 flex cursor-pointer flex-col items-center gap-3 opacity-40 transition-opacity hover:opacity-80\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-offset=\"-200\"\r\n    data-aos-delay=\"2500\"\r\n  >\r\n    <span class=\"text-[9px] font-medium tracking-[0.3em] text-slate-500 uppercase\">Scroll</span>\r\n    <div class=\"flex h-8 w-5 items-start justify-center rounded-full border border-slate-600/50 p-1\">\r\n      <div class=\"h-2 w-1 animate-bounce rounded-full bg-slate-400\"></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n", styles: ["@keyframes float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}.animate-float-slow{animation:float-slow 6s ease-in-out infinite}.animate-float-slower{animation:float-slower 8s ease-in-out infinite}.hero-logo{filter:drop-shadow(0 0 30px rgba(255,255,255,.1));animation:logo-breathe 4s ease-in-out infinite}@keyframes logo-breathe{0%,to{filter:drop-shadow(0 0 30px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 50px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;filter:blur(50px)}.orb-purple{background:radial-gradient(circle,rgba(139,92,246,.8) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,rgba(6,182,212,.8) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,rgba(217,70,239,.8) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;filter:blur(50px)}.orb-orange{background:radial-gradient(circle,rgba(251,146,60,.7) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,rgba(239,68,68,.7) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,rgba(250,204,21,.7) 0%,transparent 70%)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-hero', standalone: true, imports: [CommonModule, TranslateModule], template: "<section class=\"hero-section relative flex h-screen items-center justify-center overflow-hidden\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div class=\"neon-orb orb-purple animate-float-slow top-[-100px] left-[-100px] h-[500px] w-[500px] opacity-50\"></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower right-[-50px] bottom-[-50px] h-[400px] w-[400px] opacity-40\"\r\n    ></div>\r\n    <div class=\"neon-orb orb-magenta animate-float-slow top-[40%] left-[60%] h-[300px] w-[300px] opacity-35\"></div>\r\n    <div class=\"warm-orb orb-orange animate-float-slower top-[10%] right-[10%] h-[450px] w-[450px] opacity-45\"></div>\r\n    <div class=\"warm-orb orb-red animate-float-slow bottom-[20%] left-[5%] h-[350px] w-[350px] opacity-40\"></div>\r\n    <div class=\"warm-orb orb-yellow animate-float-slower top-[60%] right-[30%] h-[300px] w-[300px] opacity-35\"></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 px-6 text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span\r\n      class=\"mb-8 inline-block rounded-full border border-slate-700/50 bg-slate-900/60 px-4 py-1.5 text-[11px] font-medium tracking-[0.3em] text-slate-400 uppercase backdrop-blur-sm\"\r\n      data-aos=\"fade-down\"\r\n      data-aos-delay=\"200\"\r\n      >Digital Future</span\r\n    >\r\n\r\n    <!-- Brand SVG -->\r\n    <img\r\n      src=\"images/zemios_title_simple.svg\"\r\n      alt=\"ZEMIOS\"\r\n      class=\"hero-logo mx-auto mb-10 h-auto w-[50vw] max-w-[500px] md:w-[35vw] lg:w-[25vw]\"\r\n    />\r\n\r\n    <!-- Headline -->\r\n    <h1\r\n      class=\"mx-auto mb-6 max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-white md:text-5xl lg:text-6xl\"\r\n      style=\"font-family: &quot;Outfit&quot;, sans-serif\"\r\n      data-aos=\"fade-up\"\r\n      data-aos-delay=\"400\"\r\n    >\r\n      {{ 'hero.headline' | translate }}\r\n      <span\r\n        style=\"\r\n          background: linear-gradient(135deg, #60a5fa, #a78bfa);\r\n          -webkit-background-clip: text;\r\n          -webkit-text-fill-color: transparent;\r\n          background-clip: text;\r\n        \"\r\n        >{{ 'hero.headlineAccent' | translate }}</span\r\n      >\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p\r\n      class=\"mx-auto max-w-xl text-lg leading-relaxed font-light text-slate-400\"\r\n      style=\"font-family: &quot;Outfit&quot;, sans-serif\"\r\n      data-aos=\"fade-up\"\r\n      data-aos-delay=\"600\"\r\n    >\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"absolute bottom-12 flex cursor-pointer flex-col items-center gap-3 opacity-40 transition-opacity hover:opacity-80\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-offset=\"-200\"\r\n    data-aos-delay=\"2500\"\r\n  >\r\n    <span class=\"text-[9px] font-medium tracking-[0.3em] text-slate-500 uppercase\">Scroll</span>\r\n    <div class=\"flex h-8 w-5 items-start justify-center rounded-full border border-slate-600/50 p-1\">\r\n      <div class=\"h-2 w-1 animate-bounce rounded-full bg-slate-400\"></div>\r\n    </div>\r\n  </div>\r\n</section>\r\n", styles: ["@keyframes float-slow{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes float-slower{0%,to{transform:translateY(0) translate(0)}50%{transform:translateY(-15px) translate(10px)}}.animate-float-slow{animation:float-slow 6s ease-in-out infinite}.animate-float-slower{animation:float-slower 8s ease-in-out infinite}.hero-logo{filter:drop-shadow(0 0 30px rgba(255,255,255,.1));animation:logo-breathe 4s ease-in-out infinite}@keyframes logo-breathe{0%,to{filter:drop-shadow(0 0 30px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 50px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;filter:blur(50px)}.orb-purple{background:radial-gradient(circle,rgba(139,92,246,.8) 0%,transparent 70%)}.orb-cyan{background:radial-gradient(circle,rgba(6,182,212,.8) 0%,transparent 70%)}.orb-magenta{background:radial-gradient(circle,rgba(217,70,239,.8) 0%,transparent 70%)}.warm-orb{position:absolute;border-radius:50%;filter:blur(50px)}.orb-orange{background:radial-gradient(circle,rgba(251,146,60,.7) 0%,transparent 70%)}.orb-red{background:radial-gradient(circle,rgba(239,68,68,.7) 0%,transparent 70%)}.orb-yellow{background:radial-gradient(circle,rgba(250,204,21,.7) 0%,transparent 70%)}\n"] }]
        }] });

class HeroMobileComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroMobileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: HeroMobileComponent, isStandalone: true, selector: "z-hero-mobile", ngImport: i0, template: "<section class=\"hero-mobile-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow top-[-80px] left-[-80px] h-[350px] w-[350px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower right-[-50px] bottom-[-50px] h-[300px] w-[300px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow top-[30%] right-[10%] h-[250px] w-[250px] opacity-80 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower top-[60%] left-[-60px] h-[280px] w-[280px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow right-[10%] bottom-[20%] h-[220px] w-[220px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower top-[10%] right-[-50px] h-[200px] w-[200px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 w-full text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span\r\n      class=\"mb-6 inline-block rounded-full border border-slate-700/50 bg-slate-900/60 px-3 py-1 text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase backdrop-blur-sm\"\r\n      >Digital Future</span\r\n    >\r\n\r\n    <!-- Brand SVG -->\r\n    <img src=\"images/zemios_title_simple.svg\" alt=\"ZEMIOS\" class=\"hero-logo mx-auto mb-8 h-auto w-[55vw]\" />\r\n\r\n    <!-- Headline -->\r\n    <h1\r\n      class=\"mx-auto mb-5 text-3xl leading-tight font-semibold tracking-tight text-white\"\r\n      style=\"font-family: &quot;Outfit&quot;, sans-serif\"\r\n      data-aos=\"fade-up\"\r\n      data-aos-delay=\"300\"\r\n    >\r\n      {{ 'hero.headline' | translate }}\r\n      <span\r\n        style=\"\r\n          background: linear-gradient(135deg, #60a5fa, #a78bfa);\r\n          -webkit-background-clip: text;\r\n          -webkit-text-fill-color: transparent;\r\n          background-clip: text;\r\n        \"\r\n        >{{ 'hero.headlineAccent' | translate }}</span\r\n      >\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p\r\n      class=\"mx-auto max-w-sm text-base leading-relaxed font-light text-slate-400\"\r\n      style=\"font-family: &quot;Outfit&quot;, sans-serif\"\r\n      data-aos=\"fade-up\"\r\n      data-aos-delay=\"500\"\r\n    >\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"absolute bottom-8 flex flex-col items-center gap-2 opacity-40\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-delay=\"1000\"\r\n    data-aos-offset=\"-200\"\r\n  >\r\n    <span class=\"text-[8px] font-medium tracking-[0.3em] text-slate-500 uppercase\"\r\n      >{{ 'hero.scrollMobile' | translate }}</span\r\n    >\r\n    <i class=\"bi bi-hand-index animate-bounce text-2xl text-slate-400\"></i>\r\n  </div>\r\n</section>\r\n", styles: [":host{display:block}.hero-mobile-section{background:#020617}.hero-logo{filter:drop-shadow(0 0 20px rgba(255,255,255,.1));animation:logo-breathe 4s ease-in-out infinite}@keyframes logo-breathe{0%,to{filter:drop-shadow(0 0 20px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 40px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-purple{background:radial-gradient(circle,#a855f7,#8b5cf600 70%)}.orb-cyan{background:radial-gradient(circle,#06b6d4,#0891b200 70%)}.orb-magenta{background:radial-gradient(circle,#d946ef,#c026d300 70%)}.warm-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-orange{background:radial-gradient(circle,#fb923c,#f9731600 70%)}.orb-red{background:radial-gradient(circle,#ef4444,#dc262600 70%)}.orb-yellow{background:radial-gradient(circle,#facc15,#eab30800 70%)}.animate-float-slow{animation:float 6s ease-in-out infinite}.animate-float-slower{animation:float 8s ease-in-out infinite reverse}@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: HeroMobileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-hero-mobile', standalone: true, imports: [CommonModule, TranslateModule], template: "<section class=\"hero-mobile-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20\">\r\n  <!-- Background Orbs -->\r\n  <div class=\"pointer-events-none absolute inset-0 overflow-hidden\">\r\n    <div\r\n      class=\"neon-orb orb-purple animate-float-slow top-[-80px] left-[-80px] h-[350px] w-[350px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-cyan animate-float-slower right-[-50px] bottom-[-50px] h-[300px] w-[300px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"neon-orb orb-magenta animate-float-slow top-[30%] right-[10%] h-[250px] w-[250px] opacity-80 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-orange animate-float-slower top-[60%] left-[-60px] h-[280px] w-[280px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-red animate-float-slow right-[10%] bottom-[20%] h-[220px] w-[220px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n    <div\r\n      class=\"warm-orb orb-yellow animate-float-slower top-[10%] right-[-50px] h-[200px] w-[200px] opacity-70 blur-[50px]\"\r\n    ></div>\r\n  </div>\r\n\r\n  <!-- Main Content -->\r\n  <div class=\"relative z-10 w-full text-center\" data-aos=\"fade-in\" data-aos-duration=\"1500\">\r\n    <!-- Badge -->\r\n    <span\r\n      class=\"mb-6 inline-block rounded-full border border-slate-700/50 bg-slate-900/60 px-3 py-1 text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase backdrop-blur-sm\"\r\n      >Digital Future</span\r\n    >\r\n\r\n    <!-- Brand SVG -->\r\n    <img src=\"images/zemios_title_simple.svg\" alt=\"ZEMIOS\" class=\"hero-logo mx-auto mb-8 h-auto w-[55vw]\" />\r\n\r\n    <!-- Headline -->\r\n    <h1\r\n      class=\"mx-auto mb-5 text-3xl leading-tight font-semibold tracking-tight text-white\"\r\n      style=\"font-family: &quot;Outfit&quot;, sans-serif\"\r\n      data-aos=\"fade-up\"\r\n      data-aos-delay=\"300\"\r\n    >\r\n      {{ 'hero.headline' | translate }}\r\n      <span\r\n        style=\"\r\n          background: linear-gradient(135deg, #60a5fa, #a78bfa);\r\n          -webkit-background-clip: text;\r\n          -webkit-text-fill-color: transparent;\r\n          background-clip: text;\r\n        \"\r\n        >{{ 'hero.headlineAccent' | translate }}</span\r\n      >\r\n    </h1>\r\n\r\n    <!-- Subtitle -->\r\n    <p\r\n      class=\"mx-auto max-w-sm text-base leading-relaxed font-light text-slate-400\"\r\n      style=\"font-family: &quot;Outfit&quot;, sans-serif\"\r\n      data-aos=\"fade-up\"\r\n      data-aos-delay=\"500\"\r\n    >\r\n      {{ 'hero.subtitle' | translate }}\r\n    </p>\r\n  </div>\r\n\r\n  <!-- Scroll Indicator -->\r\n  <div\r\n    class=\"absolute bottom-8 flex flex-col items-center gap-2 opacity-40\"\r\n    data-aos=\"fade-up\"\r\n    data-aos-delay=\"1000\"\r\n    data-aos-offset=\"-200\"\r\n  >\r\n    <span class=\"text-[8px] font-medium tracking-[0.3em] text-slate-500 uppercase\"\r\n      >{{ 'hero.scrollMobile' | translate }}</span\r\n    >\r\n    <i class=\"bi bi-hand-index animate-bounce text-2xl text-slate-400\"></i>\r\n  </div>\r\n</section>\r\n", styles: [":host{display:block}.hero-mobile-section{background:#020617}.hero-logo{filter:drop-shadow(0 0 20px rgba(255,255,255,.1));animation:logo-breathe 4s ease-in-out infinite}@keyframes logo-breathe{0%,to{filter:drop-shadow(0 0 20px rgba(255,255,255,.1))}50%{filter:drop-shadow(0 0 40px rgba(255,255,255,.15))}}.neon-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-purple{background:radial-gradient(circle,#a855f7,#8b5cf600 70%)}.orb-cyan{background:radial-gradient(circle,#06b6d4,#0891b200 70%)}.orb-magenta{background:radial-gradient(circle,#d946ef,#c026d300 70%)}.warm-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-orange{background:radial-gradient(circle,#fb923c,#f9731600 70%)}.orb-red{background:radial-gradient(circle,#ef4444,#dc262600 70%)}.orb-yellow{background:radial-gradient(circle,#facc15,#eab30800 70%)}.animate-float-slow{animation:float 6s ease-in-out infinite}.animate-float-slower{animation:float 8s ease-in-out infinite reverse}@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}\n"] }]
        }] });

class CtaComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CtaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: CtaComponent, isStandalone: true, selector: "z-cta", ngImport: i0, template: "<!-- CONTACT CTA -->\r\n<section class=\"relative py-32\">\r\n  <div class=\"mx-auto max-w-4xl px-6 text-center\">\r\n    <h2 class=\"mb-12 text-5xl font-bold text-white md:text-7xl\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n      {{ 'cta.title' | translate }}\r\n    </h2>\r\n\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CtaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-cta', standalone: true, imports: [CommonModule, TranslateModule], template: "<!-- CONTACT CTA -->\r\n<section class=\"relative py-32\">\r\n  <div class=\"mx-auto max-w-4xl px-6 text-center\">\r\n    <h2 class=\"mb-12 text-5xl font-bold text-white md:text-7xl\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n      {{ 'cta.title' | translate }}\r\n    </h2>\r\n\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n" }]
        }] });

class FeaturesGridComponent {
    platformId;
    isBrowser;
    features = [
        {
            lottieFile: 'lotties/architecture.lottie',
            title: 'features.scalable.title',
            description: 'features.scalable.description',
            rgbColor: '96,165,250',
            delay: 100
        },
        {
            lottieFile: 'lotties/system.lottie',
            title: 'features.connected.title',
            description: 'features.connected.description',
            rgbColor: '167,139,250',
            delay: 200
        },
        {
            lottieFile: 'lotties/secure.lottie',
            title: 'features.secure.title',
            description: 'features.secure.description',
            rgbColor: '196,181,253',
            delay: 300
        }
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.2.23", type: FeaturesGridComponent, isStandalone: true, selector: "z-features-grid", ngImport: i0, template: "<!-- OUR CORE - Open layout with Lottie placeholders -->\r\n<section style=\"position: relative; overflow: hidden; padding: 7rem 0\">\r\n  <div style=\"max-width: 80rem; margin: 0 auto; padding: 0 1.5rem\">\r\n    <div class=\"features-grid\" style=\"display: grid; gap: 4rem; grid-template-columns: 1fr\">\r\n      @for (feature of features; track feature.title; let i = $index) {\r\n      <div\r\n        data-aos=\"fade-up\"\r\n        [attr.data-aos-delay]=\"feature.delay\"\r\n        style=\"display: flex; flex-direction: column; align-items: center; text-align: center\"\r\n      >\r\n        <!-- Lottie animation -->\r\n        <div\r\n          style=\"\r\n            width: 200px;\r\n            height: 200px;\r\n            margin-bottom: 2rem;\r\n            border-radius: 28px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            overflow: hidden;\r\n          \"\r\n        >\r\n          <dotlottie-wc [attr.src]=\"feature.lottieFile\" autoplay loop></dotlottie-wc>\r\n        </div>\r\n\r\n        <!-- Title -->\r\n        <h3\r\n          style=\"\r\n            font-family: &quot;Outfit&quot;, sans-serif;\r\n            font-size: 1.375rem;\r\n            font-weight: 600;\r\n            color: #f8fafc;\r\n            margin: 0 0 0.875rem 0;\r\n            letter-spacing: -0.01em;\r\n          \"\r\n        >\r\n          {{ feature.title | translate }}\r\n        </h3>\r\n\r\n        <!-- Description -->\r\n        <p\r\n          style=\"font-size: 0.9375rem; line-height: 1.75; color: #64748b; margin: 0; font-weight: 300; max-width: 24rem\"\r\n        >\r\n          {{ feature.description | translate }}\r\n        </p>\r\n\r\n        <!-- Subtle separator (not on last item) -->\r\n        <div style=\"width: 40px; height: 1px; background: rgba(255, 255, 255, 0.06); margin-top: 3rem\"></div>\r\n      </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>\r\n", styles: ["@media(min-width:768px){.features-grid{grid-template-columns:repeat(3,1fr)!important}}.feature-card:hover{transform:translateY(-4px);box-shadow:0 24px 48px -12px #00000080;border-color:#ffffff1a!important}dotlottie-wc{width:100%;height:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: FeaturesGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-features-grid', standalone: true, imports: [CommonModule, TranslateModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: "<!-- OUR CORE - Open layout with Lottie placeholders -->\r\n<section style=\"position: relative; overflow: hidden; padding: 7rem 0\">\r\n  <div style=\"max-width: 80rem; margin: 0 auto; padding: 0 1.5rem\">\r\n    <div class=\"features-grid\" style=\"display: grid; gap: 4rem; grid-template-columns: 1fr\">\r\n      @for (feature of features; track feature.title; let i = $index) {\r\n      <div\r\n        data-aos=\"fade-up\"\r\n        [attr.data-aos-delay]=\"feature.delay\"\r\n        style=\"display: flex; flex-direction: column; align-items: center; text-align: center\"\r\n      >\r\n        <!-- Lottie animation -->\r\n        <div\r\n          style=\"\r\n            width: 200px;\r\n            height: 200px;\r\n            margin-bottom: 2rem;\r\n            border-radius: 28px;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            overflow: hidden;\r\n          \"\r\n        >\r\n          <dotlottie-wc [attr.src]=\"feature.lottieFile\" autoplay loop></dotlottie-wc>\r\n        </div>\r\n\r\n        <!-- Title -->\r\n        <h3\r\n          style=\"\r\n            font-family: &quot;Outfit&quot;, sans-serif;\r\n            font-size: 1.375rem;\r\n            font-weight: 600;\r\n            color: #f8fafc;\r\n            margin: 0 0 0.875rem 0;\r\n            letter-spacing: -0.01em;\r\n          \"\r\n        >\r\n          {{ feature.title | translate }}\r\n        </h3>\r\n\r\n        <!-- Description -->\r\n        <p\r\n          style=\"font-size: 0.9375rem; line-height: 1.75; color: #64748b; margin: 0; font-weight: 300; max-width: 24rem\"\r\n        >\r\n          {{ feature.description | translate }}\r\n        </p>\r\n\r\n        <!-- Subtle separator (not on last item) -->\r\n        <div style=\"width: 40px; height: 1px; background: rgba(255, 255, 255, 0.06); margin-top: 3rem\"></div>\r\n      </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</section>\r\n", styles: ["@media(min-width:768px){.features-grid{grid-template-columns:repeat(3,1fr)!important}}.feature-card:hover{transform:translateY(-4px);box-shadow:0 24px 48px -12px #00000080;border-color:#ffffff1a!important}dotlottie-wc{width:100%;height:100%}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }] });

class ProcessComponent {
    steps = [
        {
            number: '01',
            title: 'Descubrimiento',
            description: 'Análisis profundo de necesidades y definición de objetivos estratégicos.',
            color: 'cyan'
        },
        {
            number: '02',
            title: 'Ingeniería',
            description: 'Desarrollo ágil con las tecnologías más avanzadas del mercado.',
            color: 'purple'
        },
        {
            number: '03',
            title: 'Evolución',
            description: 'Despliegue continuo y optimización basada en datos reales.',
            color: 'magenta'
        }
    ];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ProcessComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.2.23", type: ProcessComponent, isStandalone: true, selector: "z-process", inputs: { steps: "steps" }, ngImport: i0, template: "<!-- METHODOLOGY - Process Timeline -->\r\n<section class=\"relative py-32\">\r\n  <div class=\"mx-auto max-w-7xl px-6\">\r\n    <div class=\"grid grid-cols-1 items-center gap-16 lg:grid-cols-2\">\r\n      <div data-aos=\"fade-right\">\r\n        <span class=\"mb-4 block text-sm font-bold tracking-widest text-blue-400 uppercase\"\r\n          >{{ 'process.badge' | translate }}</span\r\n        >\r\n        <h2 class=\"mb-8 text-4xl font-bold text-white md:text-5xl\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n          {{ 'process.title' | translate }} <br />\r\n          <span\r\n            style=\"\r\n              background: linear-gradient(to right, #60a5fa, #a78bfa);\r\n              -webkit-background-clip: text;\r\n              -webkit-text-fill-color: transparent;\r\n              background-clip: text;\r\n            \"\r\n            >{{ 'process.titleAccent' | translate }}</span\r\n          >\r\n        </h2>\r\n        <p class=\"mb-8 text-lg leading-relaxed font-light text-slate-400\">{{ 'process.subtitle' | translate }}</p>\r\n      </div>\r\n\r\n      <!-- Timeline -->\r\n      <div class=\"relative\" data-aos=\"fade-left\">\r\n        <!-- Step 1: Descubrimiento -->\r\n        <div class=\"group relative flex items-start gap-6\">\r\n          <div class=\"flex flex-col items-center\">\r\n            <div\r\n              class=\"relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-blue-400\"\r\n              style=\"width: 56px; height: 56px; border-color: rgba(59, 130, 246, 0.4); background: #60a5fa30\"\r\n            >\r\n              <span class=\"text-lg font-bold text-blue-400\">01</span>\r\n            </div>\r\n            <!-- Connector line -->\r\n            <div\r\n              style=\"width: 2px; height: 48px; background: linear-gradient(to bottom, rgba(59, 130, 246, 0.5), #f5cfff)\"\r\n            ></div>\r\n          </div>\r\n          <div style=\"padding-top: 12px\">\r\n            <h4 class=\"mb-2 text-xl font-bold text-white\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n              {{ 'process.step1.title' | translate }}\r\n            </h4>\r\n            <p class=\"text-sm leading-relaxed text-slate-500\">{{ 'process.step1.description' | translate }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Step 2: Ingenier\u00EDa -->\r\n        <div class=\"group relative flex items-start gap-6\">\r\n          <div class=\"flex flex-col items-center\">\r\n            <div\r\n              class=\"relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-purple-400\"\r\n              style=\"width: 56px; height: 56px; border-color: rgba(147, 51, 234, 0.4); background: #60a5fa80\"\r\n            >\r\n              <span class=\"text-lg font-bold text-purple-400\">02</span>\r\n            </div>\r\n            <!-- Connector line -->\r\n            <div\r\n              style=\"\r\n                width: 2px;\r\n                height: 48px;\r\n                background: linear-gradient(to bottom, rgba(147, 51, 234, 0.5), rgba(139, 92, 246, 0.5));\r\n              \"\r\n            ></div>\r\n          </div>\r\n          <div style=\"padding-top: 12px\">\r\n            <h4 class=\"mb-2 text-xl font-bold text-white\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n              {{ 'process.step2.title' | translate }}\r\n            </h4>\r\n            <p class=\"text-sm leading-relaxed text-slate-500\">{{ 'process.step2.description' | translate }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Step 3: Evoluci\u00F3n -->\r\n        <div class=\"group relative flex items-start gap-6\">\r\n          <div class=\"flex flex-col items-center\">\r\n            <div\r\n              class=\"relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-violet-400\"\r\n              style=\"width: 56px; height: 56px; border-color: rgba(139, 92, 246, 0.4); background: #a78bfabb\"\r\n            >\r\n              <span class=\"text-lg font-bold text-violet-400\">03</span>\r\n            </div>\r\n          </div>\r\n          <div style=\"padding-top: 12px\">\r\n            <h4 class=\"mb-2 text-xl font-bold text-white\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n              {{ 'process.step3.title' | translate }}\r\n            </h4>\r\n            <p class=\"text-sm leading-relaxed text-slate-500\">{{ 'process.step3.description' | translate }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$1.TranslatePipe, name: "translate" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: ProcessComponent, decorators: [{
            type: Component,
            args: [{ selector: 'z-process', standalone: true, imports: [CommonModule, TranslateModule], template: "<!-- METHODOLOGY - Process Timeline -->\r\n<section class=\"relative py-32\">\r\n  <div class=\"mx-auto max-w-7xl px-6\">\r\n    <div class=\"grid grid-cols-1 items-center gap-16 lg:grid-cols-2\">\r\n      <div data-aos=\"fade-right\">\r\n        <span class=\"mb-4 block text-sm font-bold tracking-widest text-blue-400 uppercase\"\r\n          >{{ 'process.badge' | translate }}</span\r\n        >\r\n        <h2 class=\"mb-8 text-4xl font-bold text-white md:text-5xl\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n          {{ 'process.title' | translate }} <br />\r\n          <span\r\n            style=\"\r\n              background: linear-gradient(to right, #60a5fa, #a78bfa);\r\n              -webkit-background-clip: text;\r\n              -webkit-text-fill-color: transparent;\r\n              background-clip: text;\r\n            \"\r\n            >{{ 'process.titleAccent' | translate }}</span\r\n          >\r\n        </h2>\r\n        <p class=\"mb-8 text-lg leading-relaxed font-light text-slate-400\">{{ 'process.subtitle' | translate }}</p>\r\n      </div>\r\n\r\n      <!-- Timeline -->\r\n      <div class=\"relative\" data-aos=\"fade-left\">\r\n        <!-- Step 1: Descubrimiento -->\r\n        <div class=\"group relative flex items-start gap-6\">\r\n          <div class=\"flex flex-col items-center\">\r\n            <div\r\n              class=\"relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-blue-400\"\r\n              style=\"width: 56px; height: 56px; border-color: rgba(59, 130, 246, 0.4); background: #60a5fa30\"\r\n            >\r\n              <span class=\"text-lg font-bold text-blue-400\">01</span>\r\n            </div>\r\n            <!-- Connector line -->\r\n            <div\r\n              style=\"width: 2px; height: 48px; background: linear-gradient(to bottom, rgba(59, 130, 246, 0.5), #f5cfff)\"\r\n            ></div>\r\n          </div>\r\n          <div style=\"padding-top: 12px\">\r\n            <h4 class=\"mb-2 text-xl font-bold text-white\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n              {{ 'process.step1.title' | translate }}\r\n            </h4>\r\n            <p class=\"text-sm leading-relaxed text-slate-500\">{{ 'process.step1.description' | translate }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Step 2: Ingenier\u00EDa -->\r\n        <div class=\"group relative flex items-start gap-6\">\r\n          <div class=\"flex flex-col items-center\">\r\n            <div\r\n              class=\"relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-purple-400\"\r\n              style=\"width: 56px; height: 56px; border-color: rgba(147, 51, 234, 0.4); background: #60a5fa80\"\r\n            >\r\n              <span class=\"text-lg font-bold text-purple-400\">02</span>\r\n            </div>\r\n            <!-- Connector line -->\r\n            <div\r\n              style=\"\r\n                width: 2px;\r\n                height: 48px;\r\n                background: linear-gradient(to bottom, rgba(147, 51, 234, 0.5), rgba(139, 92, 246, 0.5));\r\n              \"\r\n            ></div>\r\n          </div>\r\n          <div style=\"padding-top: 12px\">\r\n            <h4 class=\"mb-2 text-xl font-bold text-white\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n              {{ 'process.step2.title' | translate }}\r\n            </h4>\r\n            <p class=\"text-sm leading-relaxed text-slate-500\">{{ 'process.step2.description' | translate }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Step 3: Evoluci\u00F3n -->\r\n        <div class=\"group relative flex items-start gap-6\">\r\n          <div class=\"flex flex-col items-center\">\r\n            <div\r\n              class=\"relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-violet-400\"\r\n              style=\"width: 56px; height: 56px; border-color: rgba(139, 92, 246, 0.4); background: #a78bfabb\"\r\n            >\r\n              <span class=\"text-lg font-bold text-violet-400\">03</span>\r\n            </div>\r\n          </div>\r\n          <div style=\"padding-top: 12px\">\r\n            <h4 class=\"mb-2 text-xl font-bold text-white\" style=\"font-family: &quot;Outfit&quot;, sans-serif\">\r\n              {{ 'process.step3.title' | translate }}\r\n            </h4>\r\n            <p class=\"text-sm leading-relaxed text-slate-500\">{{ 'process.step3.description' | translate }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n" }]
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
 * The component is self-contained: it ships its own scoped styles,
 * so it works in any app regardless of the consumer's CSS framework
 * (no Tailwind utility required).
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
  `, isInline: true, styles: [":host{display:inline-block;line-height:0}.z-phone{position:relative;background:#0f172a;border-radius:32px;padding:6px;box-shadow:0 40px 80px -20px #0f172a66,0 12px 32px -8px #0f172a26;transition:transform .3s ease}.z-phone--tilt-left{transform:rotate(-12deg)}.z-phone--tilt-right{transform:rotate(12deg)}.z-phone--tilt-left:hover,.z-phone--tilt-right:hover{transform:rotate(0) scale(1.02)}.z-phone__notch{position:absolute;top:14px;left:50%;transform:translate(-50%);width:70px;height:18px;background:#0f172a;border-radius:999px;z-index:5}.z-phone__screen{position:relative;width:100%;height:100%;border-radius:26px;overflow:hidden;background:linear-gradient(180deg,#fbfcfd,#f1f5f9);display:flex;flex-direction:column;font-family:inherit}.z-phone__status{display:flex;justify-content:space-between;align-items:center;padding:.5rem 1rem 0;font-size:.6rem;font-weight:600;color:#0f172a}.z-phone__status-icons{display:flex;align-items:center;gap:.35rem;color:#0f172a}.z-phone__status-icons svg{display:block}.z-phone__header{padding:.5rem .875rem .625rem;min-height:0}.z-phone__header:empty{display:none}.z-phone__body{flex:1 1 auto;min-height:0;overflow:hidden;display:flex;flex-direction:column}.z-phone__tabbar{margin-top:auto;flex-shrink:0;min-height:0}.z-phone__tabbar:empty{display:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
  `, styles: [":host{display:inline-block;line-height:0}.z-phone{position:relative;background:#0f172a;border-radius:32px;padding:6px;box-shadow:0 40px 80px -20px #0f172a66,0 12px 32px -8px #0f172a26;transition:transform .3s ease}.z-phone--tilt-left{transform:rotate(-12deg)}.z-phone--tilt-right{transform:rotate(12deg)}.z-phone--tilt-left:hover,.z-phone--tilt-right:hover{transform:rotate(0) scale(1.02)}.z-phone__notch{position:absolute;top:14px;left:50%;transform:translate(-50%);width:70px;height:18px;background:#0f172a;border-radius:999px;z-index:5}.z-phone__screen{position:relative;width:100%;height:100%;border-radius:26px;overflow:hidden;background:linear-gradient(180deg,#fbfcfd,#f1f5f9);display:flex;flex-direction:column;font-family:inherit}.z-phone__status{display:flex;justify-content:space-between;align-items:center;padding:.5rem 1rem 0;font-size:.6rem;font-weight:600;color:#0f172a}.z-phone__status-icons{display:flex;align-items:center;gap:.35rem;color:#0f172a}.z-phone__status-icons svg{display:block}.z-phone__header{padding:.5rem .875rem .625rem;min-height:0}.z-phone__header:empty{display:none}.z-phone__body{flex:1 1 auto;min-height:0;overflow:hidden;display:flex;flex-direction:column}.z-phone__tabbar{margin-top:auto;flex-shrink:0;min-height:0}.z-phone__tabbar:empty{display:none}\n"] }]
        }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], tilt: [{
                type: Input
            }] } });

class CardHoverDirective {
    transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    transform = null;
    boxShadow = null;
    onMouseEnter() {
        this.transform = 'translateY(-4px)';
        this.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
    }
    onMouseLeave() {
        this.transform = null;
        this.boxShadow = null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CardHoverDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "21.2.23", type: CardHoverDirective, isStandalone: true, selector: "[appCardHover]", host: { listeners: { "mouseenter": "onMouseEnter()", "mouseleave": "onMouseLeave()" }, properties: { "style.transition": "this.transition", "style.transform": "this.transform", "style.boxShadow": "this.boxShadow" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.2.23", ngImport: i0, type: CardHoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appCardHover]',
                    standalone: true
                }]
        }], propDecorators: { transition: [{
                type: HostBinding,
                args: ['style.transition']
            }], transform: [{
                type: HostBinding,
                args: ['style.transform']
            }], boxShadow: [{
                type: HostBinding,
                args: ['style.boxShadow']
            }], onMouseEnter: [{
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
