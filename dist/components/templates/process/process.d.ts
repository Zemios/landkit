export interface ProcessStep {
    number: string;
    title: string;
    description: string;
    color: string;
}
/**
 * ProcessComponent
 *
 * Token-driven process / methodology section. Two-column layout:
 * - left side: eyebrow badge + title (with gradient accent) + subtitle.
 * - right side: a vertical list of numbered steps with a connector line.
 *
 * All values come from `var(--zemios-*)`, so a single change to the
 * token scale re-themes the entire component across every Zemios product.
 *
 * Consumers pass an optional `steps` array; if omitted, a sensible
 * default of three generic steps is rendered.
 */
export declare class ProcessComponent {
    steps: ProcessStep[];
}
//# sourceMappingURL=process.d.ts.map