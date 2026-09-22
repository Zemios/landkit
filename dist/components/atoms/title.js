var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
let TitleComponent = class TitleComponent {
    constructor() {
        this.accentText = false;
        /** @deprecated Use accentText instead */
        this.rainbowText = false;
    }
};
__decorate([
    Input()
], TitleComponent.prototype, "accentText", void 0);
__decorate([
    Input()
], TitleComponent.prototype, "rainbowText", void 0);
TitleComponent = __decorate([
    Component({
        selector: 'z-title',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
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
  `,
        styles: [
            `
      :host {
        display: block;
        color: var(--zemios-text-primary);
      }

      .z-title__inner {
        max-width: var(--zemios-content-narrow);
        margin: 0 auto;
        padding: 0 var(--zemios-space-6);
        text-align: center;
      }

      .z-title__lead {
        font-family: var(--zemios-font-display);
        font-weight: 300;
        font-size: var(--zemios-text-3xl);
        line-height: 1.25;
        margin: 0;
        letter-spacing: -0.01em;
        color: var(--zemios-text-primary);
      }

      @media (min-width: 768px) {
        .z-title__lead {
          font-size: var(--zemios-text-4xl);
        }
      }
      @media (min-width: 1024px) {
        .z-title__lead {
          font-size: var(--zemios-text-5xl);
        }
      }

      .z-title__gradient {
        background: linear-gradient(
          135deg,
          var(--zemios-slate-200),
          var(--zemios-slate-400)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        font-weight: 600;
      }
    `,
        ],
    })
], TitleComponent);
export { TitleComponent };
