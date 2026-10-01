import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { InputComponent } from '../input/input'

export type InputFieldState = 'default' | 'error' | 'success'

/**
 * InputFieldComponent — labelled wrapper around `<z-input>` with
 * hint and error message support.
 *
 * Usage:
 *   <z-input-field
 *     label="Email"
 *     type="email"
 *     placeholder="hola@zemios.com"
 *     hint="No compartiremos tu correo."
 *   ></z-input-field>
 *
 *   <z-input-field
 *     label="Campo obligatorio"
 *     state="error"
 *     errorMessage="Este campo es obligatorio."
 *   ></z-input-field>
 */
@Component({
  selector: 'z-input-field',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, InputComponent],
  template: `
    <label class="z-input-field">
      <span class="z-input-field__label">
        {{ label }}
        @if (required) { <span class="z-input-field__required">*</span> }
      </span>
      <z-input
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [size]="size"
        [state]="state"
        [(value)]="value"
      ></z-input>
      @if (state === 'error' && errorMessage) {
        <span class="z-input-field__error">{{ errorMessage }}</span>
      } @else if (hint) {
        <span class="z-input-field__hint">{{ hint }}</span>
      }
    </label>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .z-input-field {
        display: flex;
        flex-direction: column;
        gap: var(--zemios-space-1);
        width: 100%;
      }

      .z-input-field__label {
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-sm);
        font-weight: 500;
        color: var(--zemios-text-secondary);
      }

      .z-input-field__required {
        color: var(--zemios-error);
        margin-left: var(--zemios-space-1);
      }

      .z-input-field__hint {
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-xs);
        color: var(--zemios-text-muted);
      }

      .z-input-field__error {
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-xs);
        font-weight: 500;
        color: var(--zemios-error);
      }
    `,
  ],
})
export class InputFieldComponent {
  @Input() label = ''
  @Input() hint = ''
  @Input() errorMessage = ''
  @Input() required = false
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' = 'text'
  @Input() placeholder = ''
  @Input() disabled = false
  @Input() size: 'sm' | 'md' | 'lg' = 'md'
  @Input() state: InputFieldState = 'default'
  @Input() value: string | null = ''
}