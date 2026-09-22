var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
/**
 * NavItemComponent — single nav-link with a brand-violet underline.
 *
 * Token-driven; reads `--zemios-accent` for the underline / hover
 * colour so a single token change re-themes every Zemios product.
 *
 * Usage:
 *   <z-nav-item [page]="{ title: 'Inicio', url: '' }"></z-nav-item>
 */
let NavItemComponent = class NavItemComponent {
    constructor(router) {
        this.router = router;
    }
};
__decorate([
    Input({ required: true })
], NavItemComponent.prototype, "page", void 0);
NavItemComponent = __decorate([
    Component({
        selector: 'z-nav-item',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [RouterModule, TranslateModule],
        styles: [
            `
      :host {
        display: inline-block;
      }

      .z-nav-link {
        position: relative;
        display: inline-block;
        padding-bottom: var(--zemios-space-1);
        font-family: var(--zemios-font-body);
        font-weight: 600;
        font-size: var(--zemios-text-base);
        color: inherit;
        text-decoration: none;
        transition: color var(--zemios-duration-base) var(--zemios-easing-default);
      }

      .z-nav-link::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        height: 2px;
        width: 0;
        transform: translateX(-50%);
        background: var(--zemios-accent);
        border-radius: var(--zemios-radius-full);
        transition: width var(--zemios-duration-moderate) var(--zemios-easing-default);
      }

      .z-nav-link:hover {
        color: var(--zemios-accent);
        text-decoration: none;
      }

      .z-nav-link:hover::after {
        width: 100%;
      }

      .z-nav-link--active {
        color: var(--zemios-accent);
      }

      .z-nav-link--active::after {
        width: 100%;
        background: var(--zemios-accent);
      }
    `,
        ],
        template: `
    <a
      [routerLink]="page.url"
      class="z-nav-link"
      [class.z-nav-link--active]="router.url === '/' + page.url"
    >
      {{ page.title | translate }}
    </a>
  `,
    })
], NavItemComponent);
export { NavItemComponent };
