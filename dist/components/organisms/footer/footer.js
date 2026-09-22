var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MadeByComponent } from '../../atoms/made-by/made-by';
import { LogoComponent } from '../../atoms/logo/logo';
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
let FooterComponent = class FooterComponent {
    constructor() {
        this.pages = [];
        this.variant = 'default';
        this.theme = 'light';
        this.contactEmail = 'info@zemios.com';
        this.contactPhone = '640 75 09 18';
        this.year = new Date().getFullYear();
    }
    /** Computes a `tel:` href stripping spaces and special characters. */
    get phoneHref() {
        return 'tel:' + this.contactPhone.replace(/\s+/g, '');
    }
};
__decorate([
    Input()
], FooterComponent.prototype, "pages", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "variant", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "theme", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "contactEmail", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "contactPhone", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "year", void 0);
FooterComponent = __decorate([
    Component({
        selector: 'z-footer',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CommonModule, RouterModule, TranslateModule, LogoComponent, MadeByComponent],
        styles: [
            `
      :host {
        display: block;
      }

      .z-footer {
        padding: var(--zemios-space-12) var(--zemios-space-4);
        font-family: var(--zemios-font-body);
      }
      .z-footer--dark {
        background: var(--zemios-surface-inverse);
        color: var(--zemios-text-inverse);
      }
      .z-footer--light {
        background: var(--zemios-surface-raised);
        color: var(--zemios-text-primary);
        border-top: 1px solid var(--zemios-border-default);
      }

      .z-footer__inner {
        max-width: var(--zemios-content-max);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--zemios-space-6);
        align-items: center;
      }
      @media (min-width: 768px) {
        .z-footer__inner {
          flex-direction: row;
          justify-content: space-between;
        }
      }

      .z-footer__brand {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--zemios-space-2);
      }

      .z-footer__contact {
        display: flex;
        flex-direction: column;
        gap: var(--zemios-space-1);
        text-align: center;
      }
      .z-footer__contact a {
        color: inherit;
        font-weight: 700;
        text-decoration: none;
      }
      .z-footer__contact a:hover {
        color: var(--zemios-accent);
      }

      .z-footer__socials {
        display: flex;
        flex-wrap: wrap;
        gap: var(--zemios-space-4);
        list-style: none;
        margin: 0;
        padding: 0;
        justify-content: center;
      }

      .z-footer__socials a {
        font-weight: 700;
        color: inherit;
        text-decoration: none;
        padding: 0.2em 0.5em;
        border-radius: var(--zemios-radius-xs);
        transition: background var(--zemios-duration-fast) var(--zemios-easing-default);
      }
      .z-footer__socials a.z-footer__socials--instagram {
        background: linear-gradient(90deg, var(--zemios-rose-500), var(--zemios-gold-400));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .z-footer__socials a.z-footer__socials--linkedin {
        color: var(--zemios-info);
      }
      .z-footer__socials a.z-footer__socials--linkedin:hover {
        background: var(--zemios-info);
        color: var(--zemios-text-on-brand);
        -webkit-text-fill-color: var(--zemios-text-on-brand);
      }

      .z-footer__links {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: var(--zemios-space-4);
        justify-content: center;
      }
      .z-footer__links a {
        color: inherit;
        font-weight: 600;
        text-decoration: none;
        transition: color var(--zemios-duration-fast) var(--zemios-easing-default);
      }
      .z-footer__links a:hover {
        color: var(--zemios-accent);
      }

      .z-footer__legal {
        margin: var(--zemios-space-6) 0 0;
        text-align: center;
        font-size: var(--zemios-text-sm);
        opacity: 0.6;
      }

      .z-footer__credit {
        margin-top: var(--zemios-space-4);
        text-align: center;
      }
    `,
        ],
        template: `
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
  `,
    })
], FooterComponent);
export { FooterComponent };
