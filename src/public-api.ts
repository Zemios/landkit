/*
 * @zemios/landkit — Public API
 *
 * Angular building blocks (atoms + molecules + organisms + templates) and
 * design-token helpers for the Zemios design system.
 *
 * Consumers import components and TypeScript token helpers from this entry.
 * The CSS custom properties live behind the `./tokens` sub-entry, which the
 * package.json `exports` field maps to `dist/tokens/zemios.css`.
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
 * single change to a token ripples across every component.
 */

// ── Atoms ─────────────────────────────────────────────────────────
export * from './components/atoms/button/button.js';
export * from './components/atoms/made-by/made-by.js';
export * from './components/atoms/title.js';
export * from './components/atoms/badge/badge.js';
export * from './components/atoms/divider/divider.js';
export * from './components/atoms/input/input.js';
export * from './components/atoms/input-field/input-field.js';
export * from './components/atoms/logo/logo.js';
export * from './components/atoms/nav-link/nav-link.js';
export * from './components/atoms/spinner/spinner.js';

// ── Molecules ─────────────────────────────────────────────────────
export * from './components/molecules/card/card.js';
export * from './components/molecules/nav-bar/nav-bar.js';

// ── Organisms ─────────────────────────────────────────────────────
export * from './components/organisms/hero/hero.js';
export * from './components/organisms/hero/hero-mobile/hero-mobile.js';
export * from './components/organisms/footer/footer.js';
export * from './components/organisms/modal/modal.js';

// ── Templates ─────────────────────────────────────────────────────
export * from './components/templates/cta/cta.js';
export * from './components/templates/features-grid/features-grid.js';
export * from './components/templates/process/process.js';
export * from './components/templates/section-shell/section-shell.js';

// ── Design tokens ─────────────────────────────────────────────────
// The CSS half of the token system is a separate sub-entry:
//   @import '@zemios/landkit/tokens';   →   dist/tokens/zemios.css
// What is re-exported here is the TypeScript mirror (zemiosTokens, the
// `zemios*` scales) plus the runtime theme controller.
export * from './tokens/index.js';

// ── Phone mockup (atom-ish, lives at top-level) ────────────────────
export * from './components/phone-mockup/phone-mockup.js';

// ── Directives ────────────────────────────────────────────────────
export * from './directives/card-hover.directive.js';