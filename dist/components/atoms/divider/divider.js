var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/**
 * DividerComponent — token-driven horizontal / vertical rule.
 *
 * Usage:
 *   <z-divider></z-divider>
 *   <z-divider orientation="vertical"></z-divider>
 *   <z-divider spacing="lg"></z-divider>
 */
let DividerComponent = class DividerComponent {
    constructor() {
        this.orientation = 'horizontal';
        this.spacing = 'md';
    }
};
__decorate([
    Input()
], DividerComponent.prototype, "orientation", void 0);
__decorate([
    Input()
], DividerComponent.prototype, "spacing", void 0);
DividerComponent = __decorate([
    Component({
        selector: 'z-divider',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <span
      class="z-divider"
      [class.z-divider--vertical]="orientation === 'vertical'"
      [class]="'z-divider z-divider--' + orientation + ' z-divider--space-' + spacing"
    ></span>
  `,
        styles: [
            `
      :host {
        display: block;
      }

      .z-divider {
        display: block;
        background: var(--zemios-border-default);
      }
      .z-divider--horizontal {
        width: 100%;
        height: 1px;
      }
      .z-divider--vertical {
        width: 1px;
        height: 100%;
        min-height: 1rem;
      }

      .z-divider--space-none {
        margin: 0;
      }
      .z-divider--space-sm {
        margin: var(--zemios-space-2) 0;
      }
      .z-divider--space-md {
        margin: var(--zemios-space-6) 0;
      }
      .z-divider--space-lg {
        margin: var(--zemios-space-12) 0;
      }
      .z-divider--space-xl {
        margin: var(--zemios-space-24) 0;
      }

      .z-divider--vertical.z-divider--space-sm {
        margin: 0 var(--zemios-space-2);
      }
      .z-divider--vertical.z-divider--space-md {
        margin: 0 var(--zemios-space-6);
      }
      .z-divider--vertical.z-divider--space-lg {
        margin: 0 var(--zemios-space-12);
      }
      .z-divider--vertical.z-divider--space-xl {
        margin: 0 var(--zemios-space-24);
      }
    `,
        ],
    })
], DividerComponent);
export { DividerComponent };
