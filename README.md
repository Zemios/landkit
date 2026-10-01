# @zemios/landkit

> The Zemios design system. Angular building blocks + design tokens +
> brand primitives shared by every Zemios product — Atlas, Edubot,
> Cronos, Nebula, even2me, minerva…
>
> Like Google's design system across YouTube / Gmail / Chrome, scoped
> to the Zemios universe.

Landkit is the **single source of truth** for the Zemios brand. Every
new Zemios product drops in this package on day one and ships with the
same colours, the same radii, the same buttons, the same look — without
re-implementing any of it.

---

## Install

```bash
pnpm add @zemios/landkit \
  @angular/common @angular/core @angular/forms @angular/router \
  @ngx-translate/core
```

Optional peer dep (only required if you use `z-features-grid`):

```bash
pnpm add @lottiefiles/dotlottie-wc
```

---

## One-line setup

```ts
/* 1. Bring in the tokens (CSS custom properties) */
@import '@zemios/landkit/tokens.css';

/* 2. Wire up TranslateService if you use i18n */
import { TranslateModule } from '@ngx-translate/core';
```

That's it — every Zemios primitive you render will be on-brand. No
Tailwind config, no per-project overrides needed.

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

- All components are **standalone** (Angular 17+).
- Selectors are prefixed with `z-` (e.g. `<z-hero>`, `<z-phone-mockup>`).
- Directive selectors keep their original `app-` prefix (e.g. `[appCardHover]`).
- Components opt into `OnPush` change detection.
- Translation is delegated to `@ngx-translate/core`.
- All visuals read from `var(--zemios-*)` — no hard-coded hex values
  inside component CSS.

---

## Compatibility

Landkit is consumed by:

- [`Zemios/Atlas`](https://github.com/Zemios/Atlas) — the public
  Zemios landing (this is where the original `z-button`, `z-card`,
  `z-nav-bar` etc. were first defined; they now live here).
- [`Zemios/nebula`](https://github.com/Zemios/nebula) — multi-app
  monorepo (Chronos, Even2Me, Minerva).
- [`Zemios/edubot`](https://github.com/Zemios/edubot), `cronos` and
  every other Zemios product.

The package keeps `--nebula-*` and `--zds-*` aliases for older
consumers; new code should always use `--zemios-*`.

---

## Repository

This package lives in its own repo so it can be evolved independently
and consumed by multiple Zemios projects:

```jsonc
// in your project's package.json
"dependencies": {
  "@zemios/landkit": "github:Zemios/landkit#v0.2.0"
}
```

See [`STYLE_GUIDE.md`](./STYLE_GUIDE.md) for the full design guide:
principles, accessibility, and component catalogue.