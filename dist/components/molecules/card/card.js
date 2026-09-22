var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button';
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
let CardComponent = class CardComponent {
    constructor() {
        this.layout = 'vertical';
        this.clickable = false;
        this.ctaVariant = 'base';
        /** Emits when the card is clicked (when `clickable`). */
        this.cardClick = new EventEmitter();
    }
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
};
__decorate([
    Input({ required: true })
], CardComponent.prototype, "variant", void 0);
__decorate([
    Input()
], CardComponent.prototype, "title", void 0);
__decorate([
    Input()
], CardComponent.prototype, "description", void 0);
__decorate([
    Input()
], CardComponent.prototype, "icon", void 0);
__decorate([
    Input()
], CardComponent.prototype, "iconClass", void 0);
__decorate([
    Input()
], CardComponent.prototype, "layout", void 0);
__decorate([
    Input()
], CardComponent.prototype, "clickable", void 0);
__decorate([
    Input()
], CardComponent.prototype, "ctaType", void 0);
__decorate([
    Input()
], CardComponent.prototype, "ctaLabel", void 0);
__decorate([
    Input()
], CardComponent.prototype, "ctaHref", void 0);
__decorate([
    Input()
], CardComponent.prototype, "ctaRouterLink", void 0);
__decorate([
    Input()
], CardComponent.prototype, "ctaIcon", void 0);
__decorate([
    Input()
], CardComponent.prototype, "ctaVariant", void 0);
__decorate([
    Output()
], CardComponent.prototype, "cardClick", void 0);
CardComponent = __decorate([
    Component({
        selector: 'z-card',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [NgClass, ButtonComponent],
        styles: [
            `
      :host {
        display: block;
      }

      .z-card {
        position: relative;
        overflow: hidden;
        border-radius: var(--zemios-radius-card);
        background: var(--zemios-surface-base);
        border: 1px solid var(--zemios-border-default);
        box-shadow: var(--zemios-shadow-sm);
        transition:
          transform var(--zemios-duration-base) var(--zemios-easing-default),
          box-shadow var(--zemios-duration-base) var(--zemios-easing-default),
          border-color var(--zemios-duration-base) var(--zemios-easing-default);
      }

      .z-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--zemios-shadow-lg);
        border-color: var(--zemios-border-strong);
      }

      /* ── Default / outline body padding ───────────────── */
      .z-card__body {
        padding: var(--zemios-space-6);
      }

      /* ── CTA variant ───────────────────────────────────── */
      .z-cta-card {
        height: 100%;
        width: 100%;
        border-radius: var(--zemios-radius-xl);
        padding: var(--zemios-space-5) var(--zemios-space-6);
        display: flex;
        flex-direction: column;
        gap: var(--zemios-space-4);
        justify-content: space-between;
        background: var(--zemios-surface-base);
        border: 1px solid var(--zemios-border-default);
        box-shadow: var(--zemios-shadow-sm);
        position: relative;
        overflow: hidden;
      }
      .z-cta-card--support {
        background: radial-gradient(
            circle at 0% 0%,
            var(--zemios-violet-100),
            transparent 65%
          ),
          var(--zemios-surface-base);
      }
      .z-cta-card--business {
        background: radial-gradient(
            circle at 100% 100%,
            var(--zemios-violet-100),
            transparent 65%
          ),
          var(--zemios-surface-base);
      }
      .z-cta-card__title {
        margin: 0 0 var(--zemios-space-1);
        font-family: var(--zemios-font-display);
        font-size: var(--zemios-text-lg);
        font-weight: 600;
        color: var(--zemios-text-primary);
      }
      .z-cta-card__text {
        margin: 0;
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-sm);
        line-height: 1.5;
        color: var(--zemios-text-secondary);
      }

      /* ── Prism variant ─────────────────────────────────── */
      .z-prism-card {
        position: relative;
        border-radius: var(--zemios-radius-2xl);
        padding: var(--zemios-space-5) var(--zemios-space-6);
        overflow: hidden;
        background: var(--zemios-surface-base);
        transition:
          transform var(--zemios-duration-base) var(--zemios-easing-default),
          box-shadow var(--zemios-duration-base) var(--zemios-easing-default),
          border-color var(--zemios-duration-base) var(--zemios-easing-default);
      }

      .z-prism-card::before {
        content: '';
        position: absolute;
        inset: -40%;
        background: conic-gradient(
          from 220deg,
          rgba(56, 189, 248, 0.06),
          rgba(148, 163, 184, 0.08),
          rgba(56, 189, 248, 0.06),
          rgba(148, 163, 184, 0.08)
        );
        opacity: 0.5;
        animation: zemios-prism-sweep 18s linear infinite;
        pointer-events: none;
      }

      .z-prism-card::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        border: 1px solid var(--zemios-border-default);
        box-shadow:
          var(--zemios-shadow-sm),
          inset 0 0 0 1px var(--zemios-slate-50);
        pointer-events: none;
      }

      .z-prism-card__title {
        margin: 0 0 var(--zemios-space-1);
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-lg);
        font-weight: 600;
        color: var(--zemios-sky-100);
      }
      .z-prism-card__text {
        margin: 0;
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-sm);
        color: var(--zemios-slate-300);
      }

      .z-prism-card--horizontal {
        display: flex;
        align-items: flex-start;
        gap: var(--zemios-space-4);
      }

      @keyframes zemios-prism-sweep {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      /* ── Prism colour variants ─────────────────────────── */
      .z-prism-card--aqua {
        background: radial-gradient(
            circle at 20% 30%,
            var(--zemios-sky-500) 8%,
            transparent 70%
          ),
          linear-gradient(160deg, var(--zemios-surface-base), var(--zemios-slate-50));
      }
      .z-prism-card--sunset {
        background: radial-gradient(
            circle at 85% 30%,
            var(--zemios-violet-500) 6%,
            transparent 70%
          ),
          linear-gradient(120deg, var(--zemios-surface-base), var(--zemios-slate-50));
      }
      .z-prism-card--lime {
        background: radial-gradient(
            circle at 0% 80%,
            var(--zemios-sky-500) 6%,
            transparent 70%
          ),
          linear-gradient(140deg, var(--zemios-surface-base), var(--zemios-slate-50));
      }
      .z-prism-card--plasma {
        background: radial-gradient(
            circle at 50% 0%,
            var(--zemios-violet-500) 6%,
            transparent 70%
          ),
          linear-gradient(180deg, var(--zemios-surface-base), var(--zemios-slate-50));
      }
      .z-prism-card--solar {
        background: radial-gradient(
            circle at 70% 90%,
            var(--zemios-gold-400) 6%,
            transparent 70%
          ),
          linear-gradient(150deg, var(--zemios-surface-base), var(--zemios-slate-50));
      }
      .z-prism-card--cyber {
        background: linear-gradient(145deg, var(--zemios-slate-50), var(--zemios-surface-base));
        border-color: var(--zemios-border-default);
      }

      /* ── Rainbow icon border ───────────────────────────── */
      .z-prism-icon {
        position: relative;
        display: inline-flex;
        border-radius: var(--zemios-radius-lg);
        padding: 4px;
        background: transparent;
        isolation: isolate;
      }
      .z-prism-icon::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 3px;
        background: conic-gradient(
          from 0deg,
          var(--zemios-rose-500),
          var(--zemios-gold-400),
          var(--zemios-success),
          var(--zemios-sky-500),
          var(--zemios-violet-500),
          var(--zemios-rose-500)
        );
        mask:
          linear-gradient(#000 0 0) content-box,
          linear-gradient(#000 0 0);
        mask-composite: exclude;
        animation: zemios-spin 8s linear infinite;
        z-index: 0;
      }
      .z-prism-icon__img,
      .z-prism-icon__box {
        position: relative;
        z-index: 1;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: var(--zemios-radius-lg);
        background: var(--zemios-surface-overlay);
        padding: var(--zemios-space-3);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
        ],
        template: `
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
  `,
    })
], CardComponent);
export { CardComponent };
