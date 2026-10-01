# @zemios/landkit

Angular building blocks (atoms + templates + organisms) that make up the
**Zemios design system**. Every Zemios product consumes this package so the
brand stays consistent across landings, dashboards, apps, and docs — same
components, same look, same behaviour.

> Like Google's design system across YouTube / Gmail / Chrome, but scoped
> to the Zemios universe.

## Install

```bash
pnpm add @zemios/landkit @angular/common @angular/core @angular/router @ngx-translate/core
```

## Use

```ts
import { Component } from '@angular/core';
import {
  HeroComponent,
  ProcessComponent,
  CtaComponent,
  PhoneMockupComponent,
} from '@zemios/landkit';

@Component({
  standalone: true,
  imports: [HeroComponent, ProcessComponent, CtaComponent, PhoneMockupComponent],
  template: `
    <z-hero />
    <z-process />
    <z-cta><button>Contact</button></z-cta>
  `,
})
export class HomePage {}
```

## What's inside

| Layer        | Components                                                                 |
|--------------|----------------------------------------------------------------------------|
| Atoms        | `ButtonComponent`, `MadeByComponent`, `PhoneMockupComponent`, `TitleComponent` |
| Organisms    | `HeroComponent`, `HeroMobileComponent`                                     |
| Templates    | `CtaComponent`, `FeaturesGridComponent`, `ProcessComponent`                |
| Directives   | `CardHoverDirective`                                                        |

See [`src/public-api.ts`](src/public-api.ts) for the full list.

## Conventions

- All components are **standalone** (this is Angular 17+).
- Selectors are prefixed with `z-` (e.g. `<z-hero>`, `<z-phone-mockup>`).
- Directive selectors keep their `app` prefix (e.g. `[appCardHover]`).
- Components opt into `OnPush` change detection.
- Translation is delegated to `@ngx-translate/core`.

## Repository

This package lives in its own repo so it can be evolved independently and
consumed by multiple Zemios projects. The landing in
[`Zemios/Atlas`](https://github.com/Zemios/Atlas) depends on it via
`github:Zemios/landkit`.
