import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputState = 'default' | 'error' | 'success'

/**
 * InputComponent — token-driven text input with optional form binding.
 *
 * Two modes:
 * - Standalone (template-driven): set `value` / listen `(valueChange)`.
 * - Reactive forms: register via `providers` on the parent with
 *   `NG_VALUE_ACCESSOR`. The component implements
 *   `ControlValueAccessor`.
 *
 * All styling comes from `var(--zemios-*)`, including focus ring
 * (`var(--zemios-shadow-ring)`) and state colours.
 */
@Component({
  selector: 'z-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input
      class="z-input"
      [class]="'z-input z-input--' + size + ' z-input--' + state"
      [type]="type"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [value]="value ?? ''"
      (input)="handleInput($event)"
      (blur)="onTouchedFn()"
    />
  `,
  styles: [
    `
      :host {
        display: inline-block;
        width: 100%;
      }

      .z-input {
        display: block;
        width: 100%;
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-sm);
        color: var(--zemios-text-primary);
        background: var(--zemios-surface-base);
        border: 1px solid var(--zemios-border-default);
        border-radius: var(--zemios-radius-control);
        outline: none;
        transition:
          border-color var(--zemios-duration-fast) var(--zemios-easing-default),
          box-shadow var(--zemios-duration-fast) var(--zemios-easing-default);
      }

      .z-input::placeholder {
        color: var(--zemios-text-muted);
      }

      .z-input:focus {
        border-color: var(--zemios-border-focus);
        box-shadow: var(--zemios-shadow-ring);
      }

      .z-input:disabled {
        background: var(--zemios-surface-overlay);
        cursor: not-allowed;
        opacity: 0.6;
      }

      /* ── Sizes ─────────────────────────────────────────── */
      .z-input--sm {
        padding: var(--zemios-space-1\.5) var(--zemios-space-3);
        font-size: var(--zemios-text-xs);
      }
      .z-input--md {
        padding: var(--zemios-space-2\.5) var(--zemios-space-3\.5);
        font-size: var(--zemios-text-sm);
      }
      .z-input--lg {
        padding: var(--zemios-space-3) var(--zemios-space-4);
        font-size: var(--zemios-text-base);
      }

      /* ── States ────────────────────────────────────────── */
      .z-input--error {
        border-color: var(--zemios-error);
      }
      .z-input--error:focus {
        box-shadow: 0 0 0 4px var(--zemios-error-bg);
      }

      .z-input--success {
        border-color: var(--zemios-success);
      }
      .z-input--success:focus {
        box-shadow: 0 0 0 4px var(--zemios-success-bg);
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: InputType = 'text'
  @Input() placeholder = ''
  @Input() disabled = false
  @Input() size: InputSize = 'md'
  @Input() state: InputState = 'default'
  @Input() value: string | null = ''

  @Output() valueChange = new EventEmitter<string>()

  private onChangeFn: (val: string) => void = () => {}
  onTouchedFn: () => void = () => {}

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement
    this.value = target.value
    this.valueChange.emit(this.value)
    this.onChangeFn(this.value)
  }

  writeValue(value: string | null): void {
    this.value = value ?? ''
  }
  registerOnChange(fn: (val: string) => void): void {
    this.onChangeFn = fn
  }
  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
}