# @zemios/landkit

> The Zemios design system: Angular building blocks + design tokens +
> brand primitives, published as one Angular Package Format library.
>
> Like Google's design system across YouTube / Gmail / Chrome, scoped
> to the Zemios universe.

Landkit is intended to be the **single source of truth** for the Zemios
brand, so a new product can drop it in and ship with the same colours,
radii and buttons instead of re-implementing them.

Be aware of what that intent looks like today: as of `0.4.1` this package is
consumed by **two** projects — `Atlas` and `even2me` (`apps/web-social`).
It is not yet adopted across the portfolio, so treat the catalogue below as
what exists, not as a proven multi-product contract.

---

## Install

This package is **not published to a public registry** (license `UNLICENSED`,
`publishConfig.access: restricted`), so `pnpm add @zemios/landkit` will not
resolve. Install it from GitHub instead:

```bash
pnpm add github:Zemios/landkit \
  @angular/common @angular/core @angular/forms @angular/router \
  @ngx-translate/core
```

Optional peer dep (only required if you use `z-features-grid`):

```bash
pnpm add @lottiefiles/dotlottie-wc
```

---

## Adopting this package

**You get a prebuilt artifact, not a build.** `dist/` is committed to the
repository, and `pnpm add github:Zemios/landkit` clones that commit and hands
you the `dist/` that is in it. Nothing is compiled on your machine and there is
no `prepare` hook, so install is fast and needs no Angular toolchain. CI fails
the build if `dist/` ever drifts from `src/`, so the artifact you receive
always matches the source it was built from.

If you want to build it yourself instead, clone the repo and run
`pnpm install && pnpm build`; that regenerates `dist/` in place. `pnpm verify`
runs the full gate locally: lint, test, build, and the dist-drift check.

**Versioning.** The current version is `0.4.1`, still pre-1.0, so the
component API and the token names can change in a patch release. Check
`CHANGELOG`/release notes before bumping.

**Pin your ref.** This is the important part. There are no git tags in this
repository yet, so `"@zemios/landkit": "github:Zemios/landkit"` follows
whatever `main` happens to point at. That is a moving target: a broken build
on `main` breaks your install, and a token rename can change your styling
without a version bump in your lockfile. Both current consumers are on the
unpinned form today.

Prefer pinning a commit:

```jsonc
"dependencies": {
  "@zemios/landkit": "github:Zemios/landkit#<commit-sha>"
}
```

and bumping the SHA deliberately. Re-pin when you want to pick up changes.

---

## One-line setup

```css
/* 1. Bring in the tokens (CSS custom properties) */
@import '@zemios/landkit/tokens';
```

```ts
/* 2. Wire up TranslateService if you use i18n */
import { TranslateModule } from '@ngx-translate/core';
```

That's it — every Zemios primitive you render will be on-brand. No
Tailwind config, no per-project overrides needed.

### Entry points

| Import                              | Resolves to                     | What you get                          |
|-------------------------------------|---------------------------------|---------------------------------------|
| `@zemios/landkit`                   | `dist/fesm2022/zemios-landkit.mjs` | All components, directives, `ThemeService`, the TypeScript token mirror |
| `@zemios/landkit/tokens`            | `dist/tokens/zemios.css`        | The `--zemios-*` custom properties (CSS) |
| `@zemios/landkit/package.json`      | `package.json`                  | Package metadata                      |
| `@zemios/landkit/README.md`         | `README.md`                     | This file                             |
| `@zemios/landkit/STYLE_GUIDE.md`    | `STYLE_GUIDE.md`                | The design guide                      |

There is no `@zemios/landkit/tokens.css` entry point — the stylesheet is the
`./tokens` sub-entry itself.

---

## Use

```ts
import { Component } from '@angular/core';
import {
  ButtonComponent,
  CardComponent,
  HeroComponent,
  CtaComponent,
  NavBarComponent,
  FooterComponent,
  TitleComponent,
  PhoneMockupComponent,
  MadeByComponent,
} from '@zemios/landkit';

@Component({
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    HeroComponent,
    CtaComponent,
    NavBarComponent,
    FooterComponent,
    TitleComponent,
    PhoneMockupComponent,
    MadeByComponent,
  ],
  template: `
    <z-nav-bar [pages]="pages" theme="dark" />

    <z-hero />

    <z-section-shell
      eyebrow="Qué hacemos"
      title="Servicios"
      subtitle="De la idea al producto en producción."
    >
      <z-card variant="prism" title="Diseño" description="..." />
      <z-card variant="prism" title="Web" description="..." />
      <z-card variant="prism" title="Móvil" description="..." />
    </z-section-shell>

    <z-cta>
      <z-button variant="primary" href="mailto:info@zemios.com">
        Contáctanos
      </z-button>
    </z-cta>

    <z-footer [pages]="pages" />
  `,
})
export class HomePage {
  pages = [
    { title: 'Inicio', url: '' },
    { title: 'Proyectos', url: 'projects' },
    { title: 'FAQ', url: 'faq' },
  ];
}
```

---

## What's inside

| Layer        | Components                                                                 |
|-------------|----------------------------------------------------------------------------|
| Atoms       | `ButtonComponent`, `BadgeComponent`, `SpinnerComponent`, `DividerComponent`, `InputComponent`, `InputFieldComponent`, `LogoComponent`, `NavItemComponent`, `MadeByComponent`, `TitleComponent`, `PhoneMockupComponent` |
| Molecules   | `CardComponent`, `NavBarComponent`                                          |
| Organisms   | `HeroComponent`, `HeroMobileComponent`, `FooterComponent`, `ModalComponent` |
| Templates   | `CtaComponent`, `FeaturesGridComponent`, `ProcessComponent`, `SectionShellComponent` |
| Directives  | `CardHoverDirective`                                                       |
| Services    | `ThemeService`                                                              |
| Tokens      | `zemios.css`, `zemiosTokens`, `zemiosSemantic`, `zemiosRadius`, `zemiosShadow`, … |

See [`src/public-api.ts`](src/public-api.ts) for the full list.

---

## Design tokens

Every component reads from `var(--zemios-*)`. The full token system
ships in [`src/tokens/zemios.css`](src/tokens/zemios.css). Quick reference:

| Category    | Variables                                                                 |
|-------------|---------------------------------------------------------------------------|
| Brand       | `--zemios-sky-{50…950}`, `--zemios-violet-{50…950}`, `--zemios-gold-{50…900}`, `--zemios-rose-{50…700}`, `--zemios-slate-{50…950}` |
| Semantic    | `--zemios-primary`, `--zemios-accent`, `--zemios-highlight`, `--zemios-success`, `--zemios-error`, `--zemios-warning`, `--zemios-info` |
| Surface     | `--zemios-surface-{body,base,raised,overlay,inset,inverse}`              |
| Text        | `--zemios-text-{primary,secondary,muted,inverse,on-brand,link}`           |
| Border      | `--zemios-border-{subtle,default,strong,focus,glass}`                     |
| Radius      | `--zemios-radius-{none,xs,sm,md,lg,xl,2xl,3xl,full,card,control}`        |
| Shadow      | `--zemios-shadow-{none,xs,sm,md,lg,xl,2xl,glow,glow-accent,ring}`        |
| Spacing     | `--zemios-space-{0,px,0.5,1,1.5,2,2.5,3,4,5,6,8,10,12,16,20,24}`         |
| Typography  | `--zemios-font-{display,body,mono}`, `--zemios-text-{xs…7xl}`            |
| Motion      | `--zemios-duration-{instant,fast,base,moderate,slow,slower}`, `--zemios-easing-{default,ease-in,ease-out,bounce}` |
| Z-index     | `--zemios-z-{base,header,dropdown,overlay,modal,popover,toast}`           |
| Gradient    | `--zemios-gradient-{brand,sunset,ocean,neon,radial,text}`                 |

Three themes ship out of the box:

- `light` — default (brand violet on light surface)
- `[data-theme="dark"]` / `.dark` — dark surface, brighter accents
- `[data-theme="neon"]` — premium landing (neon cyan / magenta / yellow)

Switch at runtime via the `ThemeService`:

```ts
constructor(private theme: ThemeService) {}

ngOnInit() {
  this.theme.set('dark');          // or 'light' | 'neon'
  this.theme.toggle();             // cycle through them
}
```

---

## Conventions

- All components are **standalone** (Angular 17+; the flag is explicit in
  every component file even though it is the default in Angular 19+).
- Selectors are prefixed with `z-` (e.g. `<z-hero>`, `<z-phone-mockup>`).
- Directive selectors keep their original `app-` prefix (e.g. `[appCardHover]`).
- 18 of the 21 components opt into `ChangeDetectionStrategy.OnPush`. The
  three that do not are `z-button`, `z-hero` and `z-hero-mobile`.
- Translation is delegated to `@ngx-translate/core`.
- All visuals read from `var(--zemios-*)` — no hard-coded hex values
  inside component CSS.

---

## Compatibility

Landkit is built for Angular 21 (`^21.0.0`) and is consumed by:

- **`Atlas`** — the public Zemios landing. This is where the original
  `z-button`, `z-card` and `z-nav-bar` were first defined; they now live here.
- **`even2me`** (`apps/web-social`).

Those two are the only projects that declare the dependency today. `edubot`,
`cronos` and the rest of the portfolio have their own copies of these
components and have **not** adopted the package yet, so do not assume a
component or token here has been validated against them.

The package keeps `--nebula-*` and `--zds-*` aliases for older consumers;
new code should always use `--zemios-*`.

---

## Repository

This package lives in its own repo so it can be evolved independently
and consumed by multiple Zemios projects:

```jsonc
// in your project's package.json
"dependencies": {
  "@zemios/landkit": "github:Zemios/landkit#<commit-sha>"
}
```

Pin a commit rather than a branch — see
[Adopting this package](#adopting-this-package) for why.

See [`STYLE_GUIDE.md`](./STYLE_GUIDE.md) for the full design guide:
principles, accessibility, and component catalogue.