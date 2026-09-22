/*
 * @zemios/landkit — Public API
 *
 * Angular building blocks (atoms + molecules + organisms + templates) and
 * design-token helpers for the Zemios design system.
 *
 * Consumers import from this entry only. The package.json `exports`
 * field maps the root entry, the tokens sub-entry and the css sub-entry
 * to the right files.
 *
 * Quick start:
 *   pnpm add @zemios/landkit @angular/common @angular/core @angular/router
 *
 *   /* in styles.css *
 *   @import '@zemios/landkit/tokens';
 *
 *   /* in component *
 *   import { HeroComponent, CtaComponent, ButtonComponent } from '@zemios/landkit';
 *
 * Every visual primitive (button, badge, card, nav, hero, footer, …)
 * is built on top of the same `var(--zemios-*)` token scale, so a
 * single change to a token ripples across every Zemios product.
 */
// ── Atoms ─────────────────────────────────────────────────────────
export * from './components/atoms/button/button.js';
export * from './components/atoms/made-by/made-by.js';
export * from './components/atoms/title.js';
// ── Organisms ─────────────────────────────────────────────────────
export * from './components/organisms/hero/hero.js';
export * from './components/organisms/hero/hero-mobile/hero-mobile.js';
// ── Templates ─────────────────────────────────────────────────────
export * from './components/templates/cta/cta.js';
export * from './components/templates/features-grid/features-grid.js';
export * from './components/templates/process/process.js';
// ── Phone mockup (atom-ish, lives at top-level) ────────────────────
export * from './components/phone-mockup/phone-mockup.js';
// ── Directives ────────────────────────────────────────────────────
export * from './directives/card-hover.directive.js';
