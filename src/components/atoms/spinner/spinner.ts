import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

export type SpinnerSize = 'sm' | 'md' | 'lg'

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
@Component({
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
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'md'
  @Input() label = 'Cargando…'
}