var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
let SpinnerComponent = class SpinnerComponent {
    constructor() {
        this.size = 'md';
        this.label = 'Cargando…';
    }
};
__decorate([
    Input()
], SpinnerComponent.prototype, "size", void 0);
__decorate([
    Input()
], SpinnerComponent.prototype, "label", void 0);
SpinnerComponent = __decorate([
    Component({
        selector: 'z-spinner',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <span
      class="z-spinner"
      [class]="'z-spinner z-spinner--' + size"
      role="status"
      [attr.aria-label]="label"
    ></span>
  `,
        styles: [
            `
      :host {
        display: inline-block;
        color: var(--zemios-primary);
      }

      .z-spinner {
        display: inline-block;
        border: 2px solid currentColor;
        border-right-color: transparent;
        border-radius: var(--zemios-radius-full);
        animation: zemios-spin var(--zemios-duration-slower) linear infinite;
        opacity: 0.7;
      }

      .z-spinner--sm {
        width: 12px;
        height: 12px;
      }
      .z-spinner--md {
        width: 18px;
        height: 18px;
      }
      .z-spinner--lg {
        width: 28px;
        height: 28px;
        border-width: 3px;
      }

      @keyframes zemios-spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
        ],
    })
], SpinnerComponent);
export { SpinnerComponent };
