var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input';
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
let InputFieldComponent = class InputFieldComponent {
    constructor() {
        this.label = '';
        this.hint = '';
        this.errorMessage = '';
        this.required = false;
        this.type = 'text';
        this.placeholder = '';
        this.disabled = false;
        this.size = 'md';
        this.state = 'default';
        this.value = '';
    }
};
__decorate([
    Input()
], InputFieldComponent.prototype, "label", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "hint", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "errorMessage", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "required", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "type", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "size", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "state", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "value", void 0);
InputFieldComponent = __decorate([
    Component({
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
], InputFieldComponent);
export { InputFieldComponent };
