# @zemios/landkit

Bloques de construccion Angular (atoms + templates + organisms) que forman el
**design system Zemios**. Todos los productos Zemios consumen este paquete para que
la marca se mantenga consistente en landings, dashboards, apps y docs: mismos
componentes, mismo aspecto, mismo comportamiento.

> Como el design system de Google en YouTube / Gmail / Chrome, pero acotado al
> universo Zemios.

## Estado

| | |
|---|---|
| Version | `0.4.1` |
| Tipo | Libreria Angular (Angular Package Format), no aplicacion |
| Build | Verde — `ng-packagr` genera FESM2022 + `.d.ts` + `dist/package.json` |
|Puertas | `typecheck` y `lint` verdes · duplicidad con linea base commiteada |
| Tests | **Ninguno.** Ver [Testing](#testing) |
| Consumidores | Atlas, Edubot, Cronos, Nebula, even2me, mas |
| Licencia | `UNLICENSED` (registry privado, `publishConfig.access: restricted`) |

## Stack

Versiones **leidas de `package.json`**, no copiadas a mano.

| Dependencia | Declarada | Instalada | Papel |
|---|---|---|---|
| `@angular/core`, `common`, `compiler`, `forms`, `platform-browser`, `router` | `^21.0.0` | 21.2.23 | framework; peer + dev |
| `@angular/compiler-cli` | `^21.0.0` | 21.2.23 | compilacion parcial de componentes |
| `ng-packagr` | `^21.0.0` | 21.2.7 | empaquetado APF (Angular Package Format) |
| `typescript` | `~5.9.0` | 5.9.3 | compilador |
| `tslib` | `^2.3.0` | 2.x | **unica `dependency`** de runtime |
| `@ngx-translate/core` | `^17.0.0` | 17.x | peer opcional en la practica: solo i18n |
| `@lottiefiles/dotlottie-wc` | `^0.9.2` | 0.9.x | peer **opcional**; carga dinamica en `z-features-grid` |
| Node | sin `engines` declarado | v22.12.0 (probado) | falta `.nvmrc` / `engines` (deuda) |

No hay ESLint, ni Prettier, ni runner de tests, ni `@angular/cli`.

## Prerrequisitos

- Node.js 22 (probado en v22.12.0; el repo no declara `engines` todavia).
- npm (no hay lockfile commiteado: el paquete tiene 12 dependencias, 11 de ellas de desarrollo).
- Una app Angular 21 que ya tenga `@angular/core`, `@angular/common`, `@angular/router`
  y `@ngx-translate/core` en sus propias dependencias.

## Quickstart

```bash
npm install @zemios/landkit@0.4.1
```

```ts
import { Component } from '@angular/core';
import { CtaComponent, HeroComponent, ProcessComponent } from '@zemios/landkit';

@Component({
  selector: 'z-home',
  imports: [HeroComponent, ProcessComponent, CtaComponent],
  template: `
    <z-hero />
    <z-process />
    <z-cta><button>Contacto</button></z-cta>
  `
})
export class HomePage {}
```

Los componentes son **standalone**: se importan uno a uno en `imports`, sin `NgModule`.
Las claves de traduccion las resuelve `@ngx-translate/core` en el consumidor; landkit no
trae diccionario.

## Comandos

| Script | Comando | Que hace |
|---|---|---|
| `npm run build` | `ng-packagr -p ng-package.json` | genera `dist/` (FESM2022, `.d.ts`, manifiesto) |
| `npm run typecheck` | `tsc --noEmit -p tsconfig.json` | typecheck del proyecto; **no escribe nada** |
| `npm run lint` | `tsc --noEmit -p tsconfig.json` | mismo typecheck; nombre historico, se conserva |
| `npm run check` | `tsc --noEmit -p tsconfig.json` | alias historico, se conserva |
| `npm run demo` | `http-server . -p 4321` | **roto**: sirve `/demo/index.html`, que no existe en el repo |
| `npm run prepublishOnly` | `npm run build` | se ejecuta en `npm publish` |
| duplicidad | `npx jscpd --config .jscpd.json .` | mide contra la linea base commiteada |

## Arbol

```
/
├── src/
│   ├── components/       atoms, organisms, templates, phone-mockup
│   └── directives/       card-hover
├── dist/                 artefacto APF, versionado a proposito
├── docs/
│   ├── adr/              decisiones y sus consecuencias
│   ├── architecture/     contexto C4
│   └── quality/          informes de duplicidad
├── openspec/             changes de planificacion
├── ng-package.json       configuracion de ng-packagr
├── package.json          manifiesto y scripts
└── tsconfig.json         compilador + angularCompilerOptions
```

## Testing

**No hay tests, y no hay script `test`.** Es deliberado: un script `test` que sale 0 sin
ejecutar nada es peor que no tenerlo, porque da confianza falsa en CI.

La red de seguridad actual es `typecheck` (que es `lint`), mas el build de APF. Para
cambiar un componente hoy hay que apoyarse en la compilacion de la app consumidora.
La ruta de tests (Vitest para unit, Playwright para e2e) queda planteada en
[CONTRIBUTING.md](CONTRIBUTING.md), no implementada.

## Despliegue

No hay despliegue de infraestructura: esto es un paquete. Se consume de dos formas.

1. **Como dependencia versionada** desde el registry privado
   (`publishConfig.access: restricted`). `npm publish` dispara `prepublishOnly` → `build`.
2. **Como dependencia de git** (`github:Zemios/landkit`), que es como lo consume Atlas.
   En ese camino **no hay paso de build**: se usa el `package.json` de la raiz tal cual,
   por eso `main`/`module`/`types` de la raiz apuntan a `./dist/` y por eso `dist/` esta
   versionado.

En ambos casos el resultado son 6 ficheros en `dist/`: `package.json`, `README.md`,
`.npmignore`, `fesm2022/zemios-landkit.mjs` (+ su `.map`) y `types/zemios-landkit.d.ts`.

## Mas

- [ARCHITECTURE.md](ARCHITECTURE.md) — como esta construido el repo hoy. Sin planes.
- [docs/architecture/context.md](docs/architecture/context.md) — diagramas C4 L1 y L2.
- [docs/adr/](docs/adr/) — decisiones y sus consecuencias negativas.
- [docs/quality/duplication.md](docs/quality/duplication.md) — estado real de duplicidad.
- [CONTRIBUTING.md](CONTRIBUTING.md) — como cambiar el paquete sin romper consumidores.
- `CHANGELOG.md` **no existe todavia.** No hay historial de versiones más alla del campo
  `version` de `package.json` y de los tags de git.
