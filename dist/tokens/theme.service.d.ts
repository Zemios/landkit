import type { ZemiosTheme } from '../tokens/zemios-tokens';
export declare const ZEMIOS_THEME_STORAGE_KEY = "zemios-theme";
/**
 * ThemeService
 *
 * Runtime theme controller for the Zemios design system. Lets an app
 * toggle between the shipped themes (`light` | `dark` | `neon`) by
 * flipping a `data-theme` attribute on `<html>` and persisting the
 * choice in `localStorage`.
 *
 * Usage:
 * ```ts
 * constructor(private theme: ThemeService) {}
 *
 * toggle() { this.theme.toggle('dark'); }
 * ```
 *
 * The CSS tokens in `zemios.css` automatically re-render because every
 * semantic variable (`--zemios-surface-*`, `--zemios-text-*`, etc.)
 * is scoped under `[data-theme="…"]`.
 */
export declare class ThemeService {
    private readonly doc;
    private readonly isBrowser;
    private readonly storageKey;
    /** Reactive current theme. Defaults to the user's system setting, then
     *  to whatever was persisted, then to `light`. */
    readonly current: import("@angular/core").WritableSignal<ZemiosTheme>;
    constructor(doc: Document, platformId: object);
    set(theme: ZemiosTheme): void;
    toggle(next?: ZemiosTheme): void;
    private resolveInitialTheme;
}
//# sourceMappingURL=theme.service.d.ts.map