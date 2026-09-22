var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { DOCUMENT, Inject, Injectable, signal, effect, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
let ThemeService = class ThemeService {
    constructor(doc, platformId) {
        this.storageKey = ZEMIOS_THEME_STORAGE_KEY;
        /** Reactive current theme. Defaults to the user's system setting, then
         *  to whatever was persisted, then to `light`. */
        this.current = signal(this.resolveInitialTheme());
        this.doc = doc;
        this.isBrowser = isPlatformBrowser(platformId);
        effect(() => {
            const theme = this.current();
            if (!this.isBrowser)
                return;
            this.doc.documentElement.setAttribute('data-theme', theme);
            try {
                localStorage.setItem(this.storageKey, theme);
            }
            catch {
                /* storage might be blocked (private mode / SSR) — ignore. */
            }
        });
    }
    set(theme) {
        this.current.set(theme);
    }
    toggle(next) {
        const order = ['light', 'dark', 'neon'];
        if (next) {
            this.current.set(next);
            return;
        }
        const idx = order.indexOf(this.current());
        this.current.set(order[(idx + 1) % order.length]);
    }
    resolveInitialTheme() {
        if (typeof window === 'undefined')
            return 'light';
        const persisted = (() => {
            try {
                return localStorage.getItem(this.storageKey);
            }
            catch {
                return null;
            }
        })();
        if (persisted === 'light' || persisted === 'dark' || persisted === 'neon') {
            return persisted;
        }
        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }
};
ThemeService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(DOCUMENT)),
    __param(1, Inject(PLATFORM_ID))
], ThemeService);
export { ThemeService };
