export type InputFieldState = 'default' | 'error' | 'success';
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
export declare class InputFieldComponent {
    label: string;
    hint: string;
    errorMessage: string;
    required: boolean;
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
    placeholder: string;
    disabled: boolean;
    size: 'sm' | 'md' | 'lg';
    state: InputFieldState;
    value: string | null;
}
//# sourceMappingURL=input-field.d.ts.map