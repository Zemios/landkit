export type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';
/**
 * BadgeComponent — small status / category pill.
 *
 * Token-driven; renders inline-flex with `var(--zemios-*)` colour pairs.
 *
 * Usage:
 *   <z-badge variant="success">Activo</z-badge>
 *   <z-badge variant="primary" size="lg">Beta</z-badge>
 */
export declare class BadgeComponent {
    variant: BadgeVariant;
    size: BadgeSize;
}
//# sourceMappingURL=badge.d.ts.map