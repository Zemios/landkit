export type ButtonVariants = 'base' | 'primary' | 'accent' | 'light' | 'danger' | 'outline' | 'ghost' | 'prism-primary' | 'prism-outline' | 'prism-ghost' | 'social';
export type ButtonShape = 'default' | 'circle';
export declare class ButtonComponent {
    href?: string;
    routerLink?: string;
    icon?: string;
    variant: ButtonVariants;
    shape: ButtonShape;
    hasShadow?: boolean | undefined;
    disabled: boolean;
    get computedClasses(): string[];
    get computedStyles(): {
        boxShadow: string | boolean;
    };
}
//# sourceMappingURL=button.d.ts.map