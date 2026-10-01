import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

export type LogoVariant = 'icon' | 'iconWithTitle' | 'full'
export type LogoTheme = 'dark' | 'light'

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
@Component({
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
export class LogoComponent {
  @Input({ required: true }) variant!: LogoVariant
  @Input() titleVisible = true
  @Input() theme: LogoTheme = 'dark'
  @Input() logoSrc = 'images/zemios_logo.svg'
  @Input() titleSrc = 'images/zemios_title_simple.svg'
  @Input() fullLogoSrc?: string
  @Input() routerLink: string | string[] = '/'
  @Input() alt = 'Zemios'

  get src(): string {
    if (this.variant === 'full' && this.fullLogoSrc) return this.fullLogoSrc
    return this.logoSrc
  }
}