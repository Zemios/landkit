var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Input, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from '../../atoms/logo/logo';
import { NavItemComponent } from '../../atoms/nav-link/nav-link';
/**
 * NavBarComponent — responsive top navigation.
 *
 * Renders a desktop bar with logo + nav-items and a mobile bar with a
 * hamburger toggle. Auto-hides on scroll. Token-driven; every Zemios
 * product that needs a top nav uses this same component so the look
 * stays consistent.
 *
 * Usage:
 *   <z-nav-bar
 *     [pages]="[{ title: 'Inicio', url: '' }, { title: 'Proyectos', url: 'projects' }]"
 *     theme="dark"
 *   ></z-nav-bar>
 */
let NavBarComponent = class NavBarComponent {
    constructor(router) {
        this.router = router;
        this.logoVariant = 'iconWithTitle';
        this.mobileLogoSrc = 'images/zemios_title_simple.svg';
        this.theme = 'dark';
        this.menuVisible = false;
        this.scrolled = true;
        if (typeof window !== 'undefined') {
            this.scrolled = this.isNearEdge();
        }
    }
    onScroll() {
        this.scrolled = this.isNearEdge();
    }
    toggleMenu() {
        this.menuVisible = !this.menuVisible;
    }
    closeMenu() {
        this.menuVisible = false;
    }
    isNearEdge() {
        const nearTop = window.scrollY < 50;
        const nearBottom = window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight - 50;
        return nearTop || nearBottom;
    }
};
__decorate([
    Input({ required: true })
], NavBarComponent.prototype, "pages", void 0);
__decorate([
    Input()
], NavBarComponent.prototype, "logoVariant", void 0);
__decorate([
    Input()
], NavBarComponent.prototype, "mobileLogoSrc", void 0);
__decorate([
    Input()
], NavBarComponent.prototype, "theme", void 0);
__decorate([
    HostListener('window:scroll')
], NavBarComponent.prototype, "onScroll", null);
NavBarComponent = __decorate([
    Component({
        selector: 'z-nav-bar',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [
            CommonModule,
            RouterModule,
            TranslateModule,
            LogoComponent,
            NavItemComponent,
        ],
        styles: [
            `
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: var(--zemios-z-header);
      }

      .z-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: var(--zemios-z-header);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--zemios-space-4) var(--zemios-space-10);
        backdrop-filter: blur(12px);
        transition:
          transform var(--zemios-duration-moderate) var(--zemios-easing-default),
          opacity var(--zemios-duration-moderate) var(--zemios-easing-default),
          background var(--zemios-duration-moderate) var(--zemios-easing-default);
      }

      .z-nav--dark {
        background: rgba(2, 6, 23, 0.8);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        color: var(--zemios-text-inverse);
      }
      .z-nav--light {
        background: rgba(255, 255, 255, 0.85);
        border-bottom: 1px solid var(--zemios-border-default);
        color: var(--zemios-text-primary);
        box-shadow: var(--zemios-shadow-sm);
      }

      .z-nav--hidden {
        opacity: 0;
        transform: translateY(-100%);
      }

      .z-nav__desktop {
        display: none;
        width: 100%;
        align-items: center;
        justify-content: space-between;
      }
      @media (min-width: 768px) {
        .z-nav__desktop {
          display: flex;
        }
      }

      .z-nav__mobile {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
      }
      @media (min-width: 768px) {
        .z-nav__mobile {
          display: none;
        }
      }

      .z-nav__links {
        display: flex;
        align-items: center;
        gap: var(--zemios-space-8);
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: var(--zemios-font-body);
        font-weight: 600;
        font-size: var(--zemios-text-base);
      }

      .z-nav__menu-button {
        background: transparent;
        border: 0;
        cursor: pointer;
        font-size: var(--zemios-text-3xl);
        color: inherit;
        padding: 0;
      }

      .z-nav__mobile-menu {
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        margin-top: var(--zemios-space-4);
        padding: var(--zemios-space-2) 0;
        list-style: none;
        background: var(--zemios-slate-950);
        color: var(--zemios-slate-300);
        font-family: var(--zemios-font-body);
        font-weight: 600;
        font-size: var(--zemios-text-lg);
        border-bottom: 1px solid var(--zemios-border-glass);
        border-radius: 0 0 var(--zemios-radius-2xl) var(--zemios-radius-2xl);
        box-shadow: var(--zemios-shadow-2xl);
        animation: zemios-slide-down var(--zemios-duration-moderate) var(--zemios-easing-default);
      }

      .z-nav__mobile-menu li {
        cursor: pointer;
        padding: var(--zemios-space-3) var(--zemios-space-6);
        transition:
          background var(--zemios-duration-fast) var(--zemios-easing-default),
          color var(--zemios-duration-fast) var(--zemios-easing-default);
      }

      .z-nav__mobile-menu li:hover,
      .z-nav__mobile-menu li.is-active {
        background: rgba(255, 255, 255, 0.06);
        color: var(--zemios-text-inverse);
      }

      @keyframes zemios-slide-down {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
        ],
        template: `
    <!-- DESKTOP NAV -->
    <nav
      class="z-nav z-nav--{{ theme }}"
      [class.z-nav--hidden]="scrolled"
    >
      <div class="z-nav__desktop">
        <z-logo [variant]="logoVariant" [titleVisible]="true" [theme]="theme"></z-logo>

        <ul class="z-nav__links">
          @for (page of pages; track page.url) {
            <li>
              <z-nav-item [page]="page"></z-nav-item>
            </li>
          }
        </ul>
      </div>

      <div class="z-nav__mobile">
        <button class="z-nav__menu-button" (click)="toggleMenu()" aria-label="Abrir menú">
          <i class="bi bi-list"></i>
        </button>

        <img
          [src]="mobileLogoSrc"
          [routerLink]="'/'"
          alt="Logo"
          style="height: 1.5rem; cursor: pointer; opacity: 0.95"
        />

        @if (menuVisible) {
          <ul class="z-nav__mobile-menu">
            @for (page of pages; track page.url) {
              <li
                [routerLink]="page.url"
                [class.is-active]="router.url === '/' + page.url"
                (click)="closeMenu()"
              >
                @if (page.icon) {
                  <i class="bi bi-{{ page.icon }} mr-2 opacity-50"></i>
                }
                {{ page.title | translate }}
              </li>
            }
          </ul>
        }
      </div>
    </nav>
  `,
    })
], NavBarComponent);
export { NavBarComponent };
