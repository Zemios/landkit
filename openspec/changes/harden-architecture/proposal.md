# Proposal

## Why

`@zemios/landkit` es la pieza que **todos** los productos Zemios consumen para no divergir
visualmente, y hoy está en el peor estado posible: el paquete **no se puede construir**
(`npm run build` falla), por lo que el único artefacto que se publica en `dist/` es un
`package.json` roto o inexistente; no hay ninguna documentación de por qué existe ni de qué
decisiones son intocables; y la única puerta de calidad que existe (`lint`) no es un linter,
es `tsc --noEmit`. Un design system sin contrato escrito ni build verde es una bomba de relojería:
cualquiera puede cambiar un componente, publicarlo y romper seis productos a la vez.

## What Changes

- **Arreglar el build (raíz identificada, 1 línea).** `exports["./package.json"]` del `package.json`
  raíz es un **string**, y ng-packagr 21.2.7 le asigna la condición `default` encima
  (`write-package.transform.js:299`) → `TypeError: Cannot create property 'default' on string`.
  Se convierte en mapa de condiciones, que es **semánticamente equivalente** para el resolver de Node.
  Por primera vez el paquete produce FESM2022 + d.ts + manifiesto válidos.
- **Documentar el estado real**: `README.md` (10 secciones, stack leído de `package.json`),
  `ARCHITECTURE.md` (solo presente), `CONTRIBUTING.md`, `docs/architecture/context.md` (C4 L1+L2
  en Mermaid) y `docs/adr/` con dos ADR reales.
- **Higiene de repo**: `.editorconfig` (LF) y `.gitattributes` (`* text=auto eol=lf`).
- **Puertas de calidad honestas**: script `typecheck` canónico (hoy el typecheck solo existe bajo
  el alias `lint` y `check`), y línea base de duplicidad con `jscpd` commiteada para que el gate
  futuro detecte **solo clones nuevos**, nunca los 6 preexistentes.
- **Una migración oficial de Angular aplicada**: `inject()` en el único punto de DI por constructor
  (`FeaturesGridComponent`), equivalente exacta a la migración oficial `inject-migration`.
- **Nada de eso cambia el comportamiento** de ningún componente.

### No objetivos (fuera de alcance)

- **Migración a signal inputs** (15 `@Input()`): es oficial, pero **cambia el `.d.ts` publicado** de
  una librería que consumen seis productos y este repo **no tiene ni un test**. Sin puerta verde,
  la regla 0 del contrato manda: se documenta como cambio propio, no se aplica aquí.
- **`strict` / `strictTemplates` / `noImplicitOverride`**: ya están activos en `tsconfig.json`, no hay
  puerta de ratchet que abrir.
- **`noUncheckedIndexedAccess`**: prohibido de golpe.
- **ESLint / Prettier / Vitest / Playwright**: añadir un linter y un runner de tests a un repo sin
  ESLint ni tests es categoría B con items previos; aquí no cabe y `tsc` ya cubre el typecheck.
  Un script `test` vacío que sale 0 es peor que no tener script (`STANDARD.md` §6).
- **NgModule → standalone**, **`*ngIf` → `@if`**, **`standalone: true` redundante**: ya migrados
  (10/10 standalone, 0 directivas de control legacy). No hay nada que migrar.
- **Subir Angular** (actual 21.2.23), **ESLint→Biome**, **Nx/Turborepo**: categoría C.
- **`STYLE_GUIDE.md`**: `exports` y `files` lo referencian pero **no existe en el repo**. Se documenta
  como hallazgo; borrarlo cambia la superficie pública de subpath y decide el usuario.

## Capabilities

### New Capabilities
- `library-packaging`: contrato de build y de publicación del paquete Angular Package Format
  (entradas, `exports` resoluble, manifiesto `dist` generado, `.d.ts` publicado).
- `repo-quality-gates`: puertas de verificación ejecutables del repo (typecheck, lint, duplicidad)
  y su política de ratchet sobre deuda preexistente.

### Modified Capabilities
Ninguna. No hay specs previos en el repo (`openspec/specs/` está vacío) y el comportamiento de los
componentes no cambia.

## Impact

- **Código**: `package.json` (1 línea en `exports`), `src/components/templates/features-grid/features-grid.ts`
  (DI por constructor → `inject()`), 15 sitios `@Input()` **sin tocar**.
- **Artefactos**: `dist/` regenerado y de nuevo coherente (6 ficheros ya estaban trackeados pese a
  estar en `.gitignore`).
- **Documentación**: 8 ficheros nuevos bajo `docs/`, más `README.md`, `ARCHITECTURE.md` y
  `CONTRIBUTING.md` en raíz.
- **Consumidores** (`Atlas`, `Edubot`, `Cronos`, `Nebula`, `even2me`): **cero impacto**. El mapa de
  `exports` es equivalente; los nombres exportados por `src/public-api.ts` no cambian.
- **Sin cambios de dependencias**: sigue teniendo 12 (1 `dependencies` + 11 `devDependencies`).
