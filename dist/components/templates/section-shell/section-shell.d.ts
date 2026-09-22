export type SectionShellMaxWidth = 'narrow' | 'medium' | 'wide' | 'full';
/**
 * SectionShellComponent — consistent section wrapper.
 *
 * Provides the standard Zemios section padding, max-width container
 * and optional centered eyebrow + title block. Used as the visual
 * anchor for almost every section on a Zemios landing page.
 *
 * Usage:
 *   <z-section-shell
 *     eyebrow="Por qué"
 *     title="¿Por qué elegirnos?"
 *     subtitle="Razones de peso para confiar en Zemios."
 *     maxWidth="wide"
 *   >
 *     <!-- section body -->
 *   </z-section-shell>
 */
export declare class SectionShellComponent {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    maxWidth: SectionShellMaxWidth;
}
//# sourceMappingURL=section-shell.d.ts.map