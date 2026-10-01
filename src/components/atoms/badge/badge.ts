import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

export type BadgeSize = 'sm' | 'md' | 'lg'

/**
 * BadgeComponent — small status / category pill.
 *
 * Token-driven; renders inline-flex with `var(--zemios-*)` colour pairs.
 *
 * Usage:
 *   <z-badge variant="success">Activo</z-badge>
 *   <z-badge variant="primary" size="lg">Beta</z-badge>
 */
@Component({
  selector: 'z-badge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="z-badge"
      [class]="'z-badge z-badge--' + variant + ' z-badge--' + size"
    >
      <ng-content></ng-content>
    </span>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      .z-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--zemios-space-1);
        border-radius: var(--zemios-radius-full);
        font-family: var(--zemios-font-body);
        font-weight: 500;
        line-height: 1;
      }

      /* ── Sizes ───────────────────────────────────────── */
      .z-badge--sm {
        padding: var(--zemios-space-0\.5) var(--zemios-space-2);
        font-size: 0.6875rem;
      }
      .z-badge--md {
        padding: var(--zemios-space-1) var(--zemios-space-2\.5);
        font-size: var(--zemios-text-xs);
      }
      .z-badge--lg {
        padding: var(--zemios-space-1\.5) var(--zemios-space-3);
        font-size: var(--zemios-text-sm);
      }

      /* ── Variants ────────────────────────────────────── */
      .z-badge--default {
        background: var(--zemios-surface-overlay);
        color: var(--zemios-text-secondary);
        border: 1px solid var(--zemios-border-default);
      }

      .z-badge--primary {
        background: var(--zemios-sky-100);
        color: var(--zemios-sky-700);
      }
      :host-context([data-theme='dark']) .z-badge--primary,
      :host-context(.dark) .z-badge--primary,
      [data-theme='dark'] .z-badge--primary,
      .dark .z-badge--primary {
        background: var(--zemios-sky-900);
        color: var(--zemios-sky-200);
      }

      .z-badge--accent {
        background: var(--zemios-violet-100);
        color: var(--zemios-violet-700);
      }
      :host-context([data-theme='dark']) .z-badge--accent,
      :host-context(.dark) .z-badge--accent,
      [data-theme='dark'] .z-badge--accent,
      .dark .z-badge--accent {
        background: var(--zemios-violet-900);
        color: var(--zemios-violet-200);
      }

      .z-badge--success {
        background: var(--zemios-success-bg);
        color: var(--zemios-success);
      }
      [data-theme='dark'] .z-badge--success,
      .dark .z-badge--success {
        color: var(--zemios-success);
      }

      .z-badge--warning {
        background: var(--zemios-warning-bg);
        color: var(--zemios-warning);
      }

      .z-badge--error {
        background: var(--zemios-error-bg);
        color: var(--zemios-error);
      }

      .z-badge--info {
        background: var(--zemios-info-bg);
        color: var(--zemios-info);
      }
    `,
  ],
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default'
  @Input() size: BadgeSize = 'md'
}