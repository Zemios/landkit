var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/**
 * MadeByComponent
 *
 * Reusable "made by Zemios" attribution badge. Two visual variants:
 *
 * - `plain` (default): minimal text link, opacity 0.55, suitable for
 *   sidebars and inline footers where you want the badge to blend
 *   into the page chrome.
 * - `pill`: the rounded pill with a heart icon, a "with love" word in
 *   the brand rose colour, and a hover-state that lifts the background
 *   opacity. Suited for marketing-page footers on a dark surface.
 *
 * `theme` controls the heart / accent colour contrast. `light` is the
 * default (rose-400 works on both light and dark backgrounds). `dark`
 * lightens the heart to a softer rose-300 and bumps the link weight.
 *
 * Every colour / radius / shadow in the component is sourced from
 * `var(--zemios-*)` so it stays on brand automatically under any
 * theme (light, dark or neon).
 */
let MadeByComponent = class MadeByComponent {
    constructor() {
        this.variant = 'plain';
        this.theme = 'light';
    }
};
__decorate([
    Input()
], MadeByComponent.prototype, "variant", void 0);
__decorate([
    Input()
], MadeByComponent.prototype, "theme", void 0);
MadeByComponent = __decorate([
    Component({
        selector: 'z-made-by',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
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
  `,
        styles: [
            `
      /* ===== Shared ===== */
      .z-made-by {
        font-family: var(--zemios-font-body);
        color: inherit;
        text-decoration: none;
        transition: opacity var(--zemios-duration-moderate) var(--zemios-easing-default);
      }

      /* ===== plain (default) — minimal text link ===== */
      .z-made-by--plain {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--zemios-space-1);
        padding: var(--zemios-space-3) 0;
        font-size: var(--zemios-text-sm);
        letter-spacing: 0.04em;
        opacity: 0.55;
      }
      .z-made-by--plain:hover {
        opacity: 0.85;
      }
      .z-made-by--plain .z-made-by__text {
        font-weight: 300;
      }
      .z-made-by--plain .z-made-by__link {
        color: inherit;
        font-weight: 600;
        text-decoration: none;
        transition: opacity var(--zemios-duration-fast) var(--zemios-easing-default);
      }
      .z-made-by--plain .z-made-by__link:hover {
        opacity: 1;
        text-decoration: underline;
      }

      /* ===== pill — heart + "with love" badge ===== */
      .z-made-by--pill {
        display: inline-flex;
        align-items: center;
        gap: var(--zemios-space-2);
        padding: var(--zemios-space-2) var(--zemios-space-3\.5);
        border-radius: var(--zemios-radius-full);
        font-size: var(--zemios-text-sm);
        background: var(--zemios-slate-900);
        color: var(--zemios-slate-200);
        min-height: 44px;
        backdrop-filter: blur(8px);
      }
      .z-made-by--pill:hover {
        background: var(--zemios-slate-950);
      }
      .z-made-by--pill .z-made-by__heart {
        width: 0.875rem;
        height: 0.875rem;
        color: var(--zemios-rose-400);
        flex-shrink: 0;
      }
      .z-made-by--pill .z-made-by__copy {
        display: inline-flex;
        align-items: baseline;
        gap: var(--zemios-space-1);
        flex-wrap: wrap;
      }
      .z-made-by--pill .z-made-by__love {
        color: var(--zemios-rose-400);
        font-weight: 500;
      }
      .z-made-by--pill .z-made-by__brand {
        color: var(--zemios-text-inverse);
        font-weight: 600;
      }

      /* Dark theme: lift the heart to rose-300 for better contrast. */
      .z-made-by--pill.z-made-by--dark .z-made-by__heart,
      .z-made-by--pill.z-made-by--dark .z-made-by__love {
        color: var(--zemios-rose-300);
      }
    `,
        ],
    })
], MadeByComponent);
export { MadeByComponent };
