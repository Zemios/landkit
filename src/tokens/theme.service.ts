import { DOCUMENT, Inject, Injectable, signal, effect, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { ZemiosTheme } from '../tokens/zemios-tokens';

export const ZEMIOS_THEME_STORAGE_KEY = 'zemios-theme';

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
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc: Document;
  private readonly isBrowser: boolean;
  private readonly storageKey = ZEMIOS_THEME_STORAGE_KEY;

  /** Reactive current theme. Defaults to the user's system setting, then
   *  to whatever was persisted, then to `light`. */
  readonly current = signal<ZemiosTheme>(this.resolveInitialTheme());

  constructor(@Inject(DOCUMENT) doc: Document, @Inject(PLATFORM_ID) platformId: object) {
    this.doc = doc;
    this.isBrowser = isPlatformBrowser(platformId);

    effect(() => {
      const theme = this.current();
      if (!this.isBrowser) return;
      this.doc.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem(this.storageKey, theme);
      } catch {
        /* storage might be blocked (private mode / SSR) — ignore. */
      }
    });
  }

  set(theme: ZemiosTheme): void {
    this.current.set(theme);
  }

  toggle(next?: ZemiosTheme): void {
    const order: ZemiosTheme[] = ['light', 'dark', 'neon'];
    if (next) {
      this.current.set(next);
      return;
    }
    const idx = order.indexOf(this.current());
    this.current.set(order[(idx + 1) % order.length]);
  }

  private resolveInitialTheme(): ZemiosTheme {
    if (typeof window === 'undefined') return 'light';
    const persisted = (() => {
      try {
        return localStorage.getItem(this.storageKey) as ZemiosTheme | null;
      } catch {
        return null;
      }
    })();
    if (persisted === 'light' || persisted === 'dark' || persisted === 'neon') {
      return persisted;
    }
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
}