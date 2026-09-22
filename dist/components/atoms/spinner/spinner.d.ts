export type SpinnerSize = 'sm' | 'md' | 'lg';
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
export declare class SpinnerComponent {
    size: SpinnerSize;
    label: string;
}
//# sourceMappingURL=spinner.d.ts.map