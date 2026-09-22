import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'success';
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
export declare class InputComponent implements ControlValueAccessor {
    type: InputType;
    placeholder: string;
    disabled: boolean;
    size: InputSize;
    state: InputState;
    value: string | null;
    valueChange: EventEmitter<string>;
    private onChangeFn;
    onTouchedFn: () => void;
    handleInput(event: Event): void;
    writeValue(value: string | null): void;
    registerOnChange(fn: (val: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
//# sourceMappingURL=input.d.ts.map