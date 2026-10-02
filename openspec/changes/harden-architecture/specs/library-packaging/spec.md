# library-packaging

## Purpose

Define el contrato de construccion y publicacion de `@zemios/landkit` como paquete Angular
Package Format: que artefactos genera `npm run build`, que forma puede tener el mapa `exports`
para que las herramientas puedan extenderlo, y que queda realmente publicado en `dist/`.

## ADDED Requirements

### Requirement: Build del paquete Angular Package Format

El paquete SHALL construirse con `ng-packagr` y SHALL producir en `dist/` el bundle FESM2022
compilado en modo parcial, los tipos `.d.ts` agrupados y un `dist/package.json` generado por la
propia herramienta.

#### Scenario: Build limpio desde el repositorio

- **WHEN** se ejecuta `npm run build` en el repositorio con `node_modules` instalado
- **THEN** el comando termina con codigo 0
- **AND** existe `dist/fesm2022/zemios-landkit.mjs`
- **AND** existe `dist/types/zemios-landkit.d.ts`
- **AND** existe `dist/package.json` con `name` igual a `@zemios/landkit`

#### Scenario: Build interrumpido no deja un manifiesto corrupto

- **WHEN** `npm run build` falla en cualquier paso
- **THEN** `dist/package.json` no queda escrito con contenido parcial o invalido

### Requirement: Mapa `exports` extensible por la herramienta

Toda entrada del mapa `exports` de nivel superior del `package.json` de la fuente SHALL estar
expresada como **objeto de condiciones** (`{ "default": ... }`) o bien no declararse, para que
`ng-packagr` pueda inyectar sus condiciones generadas sin colisionar con un valor escalar.

#### Scenario: Subpath `./package.json` declarado como objeto

- **WHEN** el `package.json` de la fuente declara `exports["./package.json"]`
- **THEN** ese valor es un objeto de condiciones y no un string
- **AND** el paso de escritura del manifiesto del build completa sin `TypeError`

#### Scenario: Subpath ausente lo genera la herramienta

- **WHEN** el `package.json` de la fuente no declara `exports["./package.json"]`
- **THEN** el `dist/package.json` generado lo expone igualmente con la condicion `default`

#### Scenario: Entrada raíz

- **WHEN** se inspecciona `exports["."]` del manifiesto generado
- **THEN** declara las condiciones `types` y `default` apuntando a los artefactos de `dist/`

### Requirement: La superficie pública solo expone símbolos reales

`src/public-api.ts` SHALL ser la unica via de entrada del paquete, y todo simbolo que exporte
SHALL compilar en el paquete publicado sin cambiar su nombre.

#### Scenario: Superficie pública estable

- **WHEN** se comparan los simbolos exportados por `src/public-api.ts` antes y despues de un
  build
- **THEN** el conjunto de nombres exportados es identico
