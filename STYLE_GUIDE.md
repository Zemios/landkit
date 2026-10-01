# Zemios Design Guide

> The complete guide to the Zemios design system. Every Zemios
> product — Atlas, Edubot, Cronos, Nebula, Even2Me, Minerva and
> whatever we ship next — consumes this guide through `@zemios/landkit`.

This is the single document that explains **what the Zemios brand is,
how we keep it consistent, and how to use the kit**. If you only read
one document before shipping a new Zemios product, read this.

---

## 1. Brand principles

The Zemios brand is intentionally **minimal, technical, premium and
warm**. Every product (a SaaS, a landing page, an internal tool) should
feel like the same family.

1. **One visual language.** Same colours, same radii, same typography,
   same border treatments — across products.
2. **Restraint over decoration.** Use the gradient brand mark sparingly.
   Use the neon orbs only on hero surfaces. Most surfaces are flat with
   subtle elevation.
3. **Outfit for display, Inter for body.** Never mix other typefaces
   unless you have a very specific reason (e.g. a code-heavy product
   showing JetBrains Mono).
4. **Slate as the neutral.** Slate is the surface / text scale. The
   brand colours are accents; slate is the canvas.
5. **Light by default, dark always available.** Every product must work
   in both modes. The token scale handles this for you.

---

## 2. Design tokens

Everything visual reads from a CSS custom property. The token file
lives at [`src/tokens/zemios.css`](./src/tokens/zemios.css) and is
imported once at the top of the consumer's `styles.css`:

```css
@import '@zemios/landkit/tokens.css';
```

After that, every component, template and `style=""` attribute can
reference the scale:

```css
.hero-title {
  color: var(--zemios-text-primary);
  background: var(--zemios-gradient-brand);
  border-radius: var(--zemios-radius-card);
  box-shadow: var(--zemios-shadow-lg);
}
```

### 2.1 Colour scale

We use a `50…950` ramp per brand role. Pick the role first; never reach
for raw hex.

| Brand role   | Ramp                                                            | Use case                              |
|--------------|-----------------------------------------------------------------|----------------------------------------|
| Sky          | `--zemios-sky-{50…950}`                                          | Primary action, links, info            |
| Violet       | `--zemios-violet-{50…950}`                                       | Brand accent, CTAs, hover states       |
| Gold         | `--zemios-gold-{50…900}`                                         | Highlights, "you are here", badges     |
| Rose         | `--zemios-rose-{50…700}`                                         | Destructive / errors                   |
| Slate        | `--zemios-slate-{50…950}`                                        | Surfaces, text, borders                |

Semantic shortcuts:

```css
--zemios-primary          /* → sky-500  */
--zemios-primary-hover    /* → sky-600  */
--zemios-accent           /* → violet-500 */
--zemios-accent-hover     /* → violet-600 */
--zemios-highlight        /* → gold-400  */
```

### 2.2 Spacing

Use the spacing scale, not raw `rem` / `px`. The ramp follows Tailwind's
convention:

```css
--zemios-space-1   /* 0.25rem */
--zemios-space-2   /* 0.5rem */
--zemios-space-3   /* 0.75rem */
--zemios-space-4   /* 1rem */
--zemios-space-6   /* 1.5rem */
--zemios-space-8   /* 2rem */
--zemios-space-12  /* 3rem */
--zemios-space-16  /* 4rem */
--zemios-space-24  /* 6rem */
```

### 2.3 Radius

| Token                  | Value     | Use case                |
|------------------------|-----------|--------------------------|
| `--zemios-radius-sm`    | 0.5rem    | Pills, small controls    |
| `--zemios-radius-md`    | 0.75rem   | Inputs, buttons          |
| `--zemios-radius-lg`    | 1rem      | Cards, modals            |
| `--zemios-radius-2xl`   | 1.5rem    | Hero cards, sections     |
| `--zemios-radius-card`  | 2xl       | Default card radius       |
| `--zemios-radius-full`  | 9999px    | Pills, circles           |

### 2.4 Shadow

```css
var(--zemios-shadow-xs)    /* tiny, hover state */
var(--zemios-shadow-sm)    /* raised surface */
var(--zemios-shadow-md)    /* card */
var(--zemios-shadow-lg)    /* card hover */
var(--zemios-shadow-xl)    /* modal */
var(--zemios-shadow-2xl)   /* hero card */
var(--zemios-shadow-glow)        /* brand glow */
var(--zemios-shadow-glow-accent) /* violet glow */
```

### 2.5 Typography

Three families, each with a job:

- **Outfit** — display / headlines / large titles. Variable weight.
- **Inter** — body text, UI labels, anything that needs to be readable.
- **JetBrains Mono** — code, technical values.

Sizes follow the `--zemios-text-{xs…7xl}` scale (0.75rem → 4.5rem).

### 2.6 Motion

| Token                            | Use case        |
|----------------------------------|-----------------|
| `--zemios-duration-fast`          | Hover transitions |
| `--zemios-duration-base`          | Most UI changes  |
| `--zemios-duration-moderate`      | Dropdowns, menus  |
| `--zemios-duration-slow`          | Page transitions  |
| `--zemios-easing-default`         | Default ease      |
| `--zemios-easing-bounce`          | Bouncy / playful  |

---

## 3. Themes

Landkit ships three themes:

```html
<html data-theme="light">   <!-- default -->
<html data-theme="dark">    <!-- toggleable dark mode -->
<html data-theme="neon">    <!-- premium landing / hero -->
```

A consumer flips the theme via the `ThemeService`:

```ts
import { ThemeService } from '@zemios/landkit';

constructor(public themeSvc: ThemeService) {}

toggle() { this.themeSvc.toggle(); }   // cycles light → dark → neon
```

The service persists the choice in `localStorage` and respects
`prefers-color-scheme: dark` on first visit.

**Brand-coherence rule:** every Zemios product must work in both
`light` and `dark`. Custom theme overrides are only allowed when
the product is intentionally themed (e.g. a Halloween campaign);
they must be applied via tokens, never inline.

---

## 4. Component catalogue

The full public API is in [`src/public-api.ts`](./src/public-api.ts).
The summary:

### Atoms

| Selector          | Component                  | Purpose |
|-------------------|----------------------------|---------|
| `<z-button>`      | `ButtonComponent`          | Pill button with brand variants (`primary`, `danger`, `prism-*`, `outline`, `ghost`, `accent`, `light`, `circle`) |
| `<z-badge>`       | `BadgeComponent`           | Status pill (`default`, `primary`, `accent`, `success`, `warning`, `error`, `info`; sizes `sm`, `md`, `lg`) |
| `<z-spinner>`     | `SpinnerComponent`         | Accessible loading indicator |
| `<z-divider>`     | `DividerComponent`         | Horizontal / vertical rule with spacing |
| `<z-input>`       | `InputComponent`           | Text input with sizes + states + ControlValueAccessor |
| `<z-input-field>` | `InputFieldComponent`      | Labeled input with hint / error |
| `<z-logo>`        | `LogoComponent`            | Zemios brand mark (icon / iconWithTitle / full) |
| `<z-nav-item>`    | `NavItemComponent`         | Single nav-link with violet underline |
| `<z-made-by>`     | `MadeByComponent`          | "Made with love by Zemios" attribution |
| `<z-title>`       | `TitleComponent`           | Section title block |
| `<z-phone-mockup>`| `PhoneMockupComponent`     | Static iPhone frame with content slots |

### Molecules

| Selector         | Component             | Purpose |
|------------------|----------------------|---------|
| `<z-card>`       | `CardComponent`       | Card with `default` / `outline` / `prism` (random aqua/sunset/lime/plasma/solar/cyber) / `cta` variants |
| `<z-nav-bar>`    | `NavBarComponent`     | Responsive top nav (desktop + mobile hamburger, scroll-hide) |

### Organisms

| Selector                | Component              | Purpose |
|-------------------------|------------------------|---------|
| `<z-hero>`              | `HeroComponent`        | Full-height desktop hero with brand orbs |
| `<z-hero-mobile>`       | `HeroMobileComponent`  | Mobile hero with the same brand language |
| `<z-footer>`            | `FooterComponent`      | Zemios site footer (contact, socials, navigation, made-by) |
| `<z-modal>`             | `ModalComponent`       | Self-contained, dependency-free modal with backdrop, sizes, footer slot |

### Templates

| Selector                  | Component                 | Purpose |
|---------------------------|---------------------------|---------|
| `<z-cta>`                 | `CtaComponent`             | Big-title CTA band |
| `<z-features-grid>`       | `FeaturesGridComponent`   | 3-up features row with optional Lottie icons |
| `<z-process>`             | `ProcessComponent`        | 2-column methodology with vertical timeline |
| `<z-section-shell>`       | `SectionShellComponent`   | Section wrapper with eyebrow / title / subtitle + max-width container |

### Directives

| Selector                | Purpose |
|-------------------------|---------|
| `[appCardHover]`        | Token-driven lift + shadow on hover |

### Services

| Service          | Purpose |
|------------------|---------|
| `ThemeService`   | Runtime theme switching (`light` / `dark` / `neon`) with `localStorage` persistence |

---

## 5. How to build a new Zemios product

1. **Create the project.** Any Angular 21+ project. Run
   `pnpm add @zemios/landkit`.
2. **Import the tokens in `src/styles.css`.**

   ```css
   @import '@zemios/landkit/tokens.css';
   ```

3. **Set up the `app.config.ts`** to provide the optional peer deps
   you actually use (`TranslateModule`, `FormsModule`).
4. **Build with `z-hero` / `z-nav-bar` / `z-footer` / `z-section-shell`
   first.** Those four components alone cover the skeleton of every
   Zemios landing.
5. **Reach for `<z-card>` / `<z-button>` / `<z-input-field>`** for
   product-specific UI. Don't re-style them — adjust the tokens
   instead.
6. **Use `ThemeService`** to expose a light/dark toggle in settings.

### Anti-patterns

- ❌ Hard-coded hex values in component CSS. Reach for tokens first.
- ❌ Re-implementing a button. Use `<z-button variant="...">`.
- ❌ Defining a custom font stack. Use `--zemios-font-{display,body,mono}`.
- ❌ Building a one-off modal with `<div class="modal">`. Use
  `<z-modal [open]="...">`.
- ❌ Adding a new accent colour. Add a `--zemios-accent-{role}` alias
  first; reuse the violet ramp.

---

## 6. Accessibility

- Every interactive primitive (`z-button`, `z-modal`, `z-input`) ships
  with sensible defaults (focus ring, ARIA labels, keyboard escape on
  modal, `disabled` state).
- Body copy colour always pairs against the surface token at
  `WCAG AA` minimum. The semantic tokens (`--zemios-text-*`,
  `--zemios-surface-*`) were chosen to satisfy this.
- The `data-theme="*"` selector is keyboard-friendly: it doesn't
  trigger reflow, only colour swaps.
- Animations are wrapped in `@media (prefers-reduced-motion: no-preference)`
  if needed (Landkit's built-in `zemios-float-*` and `zemios-spin`
  animations currently always run — adjust for accessibility if your
  product has a sensitive audience).

---

## 7. Migrating an existing Zemios product

If you already have a Zemios project (Atlas, Cronos, Edubot, …):

1. Add `@zemios/landkit@latest`.
2. Import `@zemios/landkit/tokens.css` in `src/styles.css`.
3. Remove your local `tokens/` folder; the canonical tokens now live
   in Landkit.
4. Replace local `z-button` / `z-card` / `z-nav-bar` copies with the
   imports from `@zemios/landkit`.
5. The `nebula-*` and `zds-*` aliases keep working while you migrate.
6. When everything is on Landkit, drop the alias block from your
   `tokens.css`.

---

## 8. Versioning

Landkit follows **semver**:

- `0.x.y` — early development; minor breaking changes are still
  possible. Pin to exact versions.
- `1.x.y` — stable. New components and tokens are additive.
- `2.x.y` — major redesign of the visual language; expect token
  renames.

Subscribe to releases via the repo's **Watch → Custom → Releases**
button.

---

## 9. Contributing

Open a PR. The rules:

1. Every new component must be token-driven. No hard-coded hex.
2. New components go into `src/components/{atoms|molecules|organisms|templates}/`.
3. Re-export from `src/public-api.ts`.
4. Update this guide with the new component in section 4.
5. Run `pnpm run lint` (or `tsc --noEmit`) before opening the PR.