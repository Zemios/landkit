var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
let InputComponent = class InputComponent {
    constructor() {
        this.type = 'text';
        this.placeholder = '';
        this.disabled = false;
        this.size = 'md';
        this.state = 'default';
        this.value = '';
        this.valueChange = new EventEmitter();
        this.onChangeFn = () => { };
        this.onTouchedFn = () => { };
    }
    handleInput(event) {
        const target = event.target;
        this.value = target.value;
        this.valueChange.emit(this.value);
        this.onChangeFn(this.value);
    }
    writeValue(value) {
        this.value = value ?? '';
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
__decorate([
    Input()
], InputComponent.prototype, "type", void 0);
__decorate([
    Input()
], InputComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], InputComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], InputComponent.prototype, "size", void 0);
__decorate([
    Input()
], InputComponent.prototype, "state", void 0);
__decorate([
    Input()
], InputComponent.prototype, "value", void 0);
__decorate([
    Output()
], InputComponent.prototype, "valueChange", void 0);
InputComponent = __decorate([
    Component({
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
], InputComponent);
export { InputComponent };
