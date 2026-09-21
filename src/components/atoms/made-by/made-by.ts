import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

export type MadeByVariant = 'plain' | 'pill'
export type MadeByTheme = 'light' | 'dark'

/**
 * MadeByComponent
 *
 * Reusable "made by Zemios" attribution badge. Two visual variants:
 *
 * - `plain` (default): minimal text link, opacity 0.55, suitable for
 *   sidebars and inline footers where you want the badge to blend
 *   into the page chrome. This was the original look.
 * - `pill`: the rounded pill with a heart icon, a "with love" word in
 *   the brand rose colour, and a hover-state that lifts the background
 *   opacity. Suited for marketing-page footers on a dark surface.
 *
 * `theme` controls the heart / accent colour contrast. `light` is the
 * default (rose-400 works on both light and dark backgrounds). `dark`
 * lightens the heart to a softer rose-300 and bumps the link weight.
 *
 * Backwards compat: existing consumers (Chronos, Even2Me, Courses)
 * render `<z-made-by></z-made-by>` and get the original `plain` +
 * `light` look because both inputs default to their initial values.
 */
@Component({
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
        font-family: inherit;
        color: inherit;
        text-decoration: none;
        transition: opacity 0.3s ease;
      }

      /* ===== plain (default) — minimal text link ===== */
      .z-made-by--plain {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.35em;
        padding: 0.75rem 0;
        font-size: 0.8rem;
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
        transition: opacity 0.2s ease;
      }
      .z-made-by--plain .z-made-by__link:hover {
        opacity: 1;
        text-decoration: underline;
      }

      /* ===== pill — heart + "with love" badge ===== */
      .z-made-by--pill {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.875rem;
        border-radius: 9999px;
        font-size: 0.8rem;
        background: rgba(15, 23, 42, 0.7);
        color: #e2e8f0;
        min-height: 44px;
      }
      .z-made-by--pill:hover {
        background: rgba(15, 23, 42, 0.85);
      }
      .z-made-by--pill .z-made-by__heart {
        width: 0.875rem;
        height: 0.875rem;
        color: #fb7185; /* rose-400 */
        flex-shrink: 0;
      }
      .z-made-by--pill .z-made-by__copy {
        display: inline-flex;
        align-items: baseline;
        gap: 0.25rem;
        flex-wrap: wrap;
      }
      .z-made-by--pill .z-made-by__love {
        color: #fb7185;
        font-weight: 500;
      }
      .z-made-by--pill .z-made-by__brand {
        color: #ffffff;
        font-weight: 600;
      }

      /* Dark theme: lift the heart to rose-300 for better contrast. */
      .z-made-by--pill.z-made-by--dark .z-made-by__heart,
      .z-made-by--pill.z-made-by--dark .z-made-by__love {
        color: #fda4af;
      }
    `
  ]
})
export class MadeByComponent {
  @Input() variant: MadeByVariant = 'plain'
  @Input() theme: MadeByTheme = 'light'
}
