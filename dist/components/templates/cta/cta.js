var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
/**
 * CtaComponent
 *
 * Token-driven call-to-action band. Renders a centered big title
 * followed by the consumer's content (typically a contact form or
 * a button pair). All sizing, colour and typography come from
 * `var(--zemios-*)`.
 */
let CtaComponent = class CtaComponent {
};
CtaComponent = __decorate([
    Component({
        selector: 'z-cta',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CommonModule, TranslateModule],
        templateUrl: './cta.html',
        styles: [
            `
      :host {
        display: block;
      }

      .z-cta {
        position: relative;
        padding: var(--zemios-space-24) 0;
      }

      .z-cta__inner {
        max-width: var(--zemios-content-max);
        margin: 0 auto;
        padding: 0 var(--zemios-space-6);
        text-align: center;
      }

      .z-cta__title {
        margin: 0 0 var(--zemios-space-12);
        font-family: var(--zemios-font-display);
        font-weight: 700;
        font-size: var(--zemios-text-5xl);
        line-height: 1.1;
        letter-spacing: -0.02em;
        color: var(--zemios-text-inverse);
      }

      @media (min-width: 768px) {
        .z-cta__title {
          font-size: var(--zemios-text-7xl);
        }
      }
    `,
        ],
    })
], CtaComponent);
export { CtaComponent };
