var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
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
let LogoComponent = class LogoComponent {
    constructor() {
        this.titleVisible = true;
        this.theme = 'dark';
        this.logoSrc = 'images/zemios_logo.svg';
        this.titleSrc = 'images/zemios_title_simple.svg';
        this.routerLink = '/';
        this.alt = 'Zemios';
    }
    get src() {
        if (this.variant === 'full' && this.fullLogoSrc)
            return this.fullLogoSrc;
        return this.logoSrc;
    }
};
__decorate([
    Input({ required: true })
], LogoComponent.prototype, "variant", void 0);
__decorate([
    Input()
], LogoComponent.prototype, "titleVisible", void 0);
__decorate([
    Input()
], LogoComponent.prototype, "theme", void 0);
__decorate([
    Input()
], LogoComponent.prototype, "logoSrc", void 0);
__decorate([
    Input()
], LogoComponent.prototype, "titleSrc", void 0);
__decorate([
    Input()
], LogoComponent.prototype, "fullLogoSrc", void 0);
__decorate([
    Input()
], LogoComponent.prototype, "routerLink", void 0);
__decorate([
    Input()
], LogoComponent.prototype, "alt", void 0);
LogoComponent = __decorate([
    Component({
        selector: 'z-logo',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [RouterModule],
        styles: [
            `
      :host {
        display: inline-flex;
        align-items: center;
      }

      .z-logo {
        display: inline-flex;
        align-items: center;
        gap: var(--zemios-space-2);
      }

      .z-logo__icon,
      .z-logo__title {
        height: 2rem;
        width: auto;
        display: block;
        cursor: pointer;
      }

      .z-logo__icon--dark {
        filter: brightness(1.05);
      }

      .z-logo__title {
        max-width: 200px;
        opacity: 1;
        transition: opacity var(--zemios-duration-base) var(--zemios-easing-default);
      }

      .z-logo__title--hidden {
        display: none;
      }

      .z-logo__title--gold-filter {
        filter: invert(1);
      }
    `,
        ],
        template: `
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
  `,
    })
], LogoComponent);
export { LogoComponent };
