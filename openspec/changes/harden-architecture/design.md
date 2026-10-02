# Design

## Context

`@zemios/landkit` no es una aplicacion: es una **libreria Angular** de 9 componentes + 1
directiva, 12 dependencias, sin tests, sin ESLint, sin `@angular/cli`, empacada con `ng-packagr`
(Angular Package Format) y publicada como `@zemios/landkit` en un registry privado. Todo lo que
cambie aqui se propaga a seis productos, asi que el coste de un error de construccion no es local.

Estado medido antes de tocar nada (`_tools/baseline/landkit.json`):

| Puerta | Antes |
|---|---|
| `lint` (= `tsc --noEmit`) | **ok** |
| `build` (= `ng-packagr`) | **FALLA** |
| `typecheck` | no existe (solo el alias `check`) |
| `test` | no existe (y no se declara: ver no-objetivos) |

Restricciones que mandan: (a) `lint` es el ancla verde y no puede romperse; (b) el build ya
fallaba y solo se arregla si el arreglo es evidente, aislado y el build pasa despues;
(c) este repo no tiene `@angular/cli`, luego **las migraciones oficiales de Angular no se pueden
ejecutar** con el tooling instalado (no estan `@angular-devkit/schematics` ni `@angular/cli`).

### Patron Angular medido con grep antes de decidir

| Patron | Ocurrencias | Decision |
|---|---|---|
| `standalone: true` explicito | 10/10 declaraciones | ya standalone; redundante pero inofensivo, no hay migracion que lo quite |
| `*ngIf` / `*ngFor` (control flow legacy) | **0** | ya migrado a `@if` / `@for` |
| `@Input()` | 15 | migracion oficial disponible, **no aplicada** (ver Decision 3) |
| DI por constructor | 1 (`FeaturesGridComponent`) | migracion oficial `inject-migration`, **aplicada** |
| `@Output()` / `EventEmitter` | 0 | nada que migrar |
| `NgModule` | 0 | nada que migrar |
| `*ngTemplateOutlet` | 2 (`button.ts`) | no es control flow; equivalente de `ngTemplateOutlet` ya no aporta nada que migrar |

## Goals / Non-Goals

**Goals:**
- Que `npm run build` termine en 0 y `dist/` vuelva a ser coherente.
- Que el repositorio se explique solo: que es, como se construye, que se publica y por que.
- Que existan ADRs con consecuencias negativas reales, no xenofobias.
- Que exista una puerta de duplicidad utilizable por CI sin bloquear por deuda previa.
- Cero cambios en la superficie pública y cero cambios de comportamiento.

**Non-Goals:**
- Any type de migracion que cambie el `.d.ts` publicado (signal inputs, required inputs).
- Introducir ESLint, Prettier, Vitest, Playwright, Nx, Turborepo, Biome.
- Tocar versiones de dependencias (12 dependencias: se quedan en 12).
- Reducir la duplicidad existente, y `STYLE_GUIDE.md` (referenciado y ausente).
- Arreglar el `.gitignore` de `dist/`: 6 ficheros de `dist/` estan trackeados pese a estar
  ignorados. Es una politica deliberada del repo y cambiarla altera como se publica.

## Decisions

### Decision 1 — Arreglar el build cambiando la forma de `exports["./package.json"]`, no ng-packagr

Causa raiz real, no teoria. En `ng-packagr@21.2.7`,
`src/lib/ng-package/entry-point/write-package.transform.js:299` hace:

```js
insertMappingOrError('./package.json', { default: './package.json' });
// y dentro:
exports[subpath] ??= {};                 // NO reemplaza: un string no es nullish
subpathExport[conditionName] = mapping[conditionName];  // TypeError sobre primitivo string
```

El `package.json` de la fuente declara `"./package.json": "./package.json"` (string). En modo
estricto, asignar `.default` sobre un string lanza `TypeError: Cannot create property 'default' on
string './package.json'`, exactamente el fallo de la linea base.

Opciones:
- **A. Declarar el subpath como objeto de condiciones** — `{"default": "./package.json"}`.
- **B. Borrar la linea** y dejar que ng-packagr la genere (tambien valido).
- **C. Parchear ng-packagr o hacer `patch-package`.**

Gana **A**: segun la especificacion de `exports` de Node, un objetivo string es azucar
sintactico para `{ "default": <target> }`, asi que A y B son **equivalentes para el resolver** y
ambos compiten con la generacion automatica de ng-packagr. C esta descartada por ser una
dependencia parcheada que nadie va a mantener, y porque el bug es de **configuracion de este
repo**, no de la herramienta. Se elige A porque hace explicito el subpath que el repo quiere
publicar en lugar de depender de la generacion implicita.

Costo real asumido: el crash ocurre *despues* de generar FESM y d.ts, y `writePackageJson` hace
`rmdir(dest)` cuando falla la validacion de dependencias no-peer — por eso el baseline dejo
`dist/package.json` borrado. Sin este arreglo, el paquete publicado seria un FESM sin manifiesto.

### Decision 2 — La puerta verde del build pasa a existir; el `typecheck` se nombra

`lint` y `check` eran el mismo comando (`tsc --noEmit -p tsconfig.json`). Se anade `typecheck`
como nombre canonico —el orden de gates de `STANDARD.md` §5 empieza por typecheck— y se conservan
`lint` y `check` para no romper las llamadas existentes. **No** se anade `test`: sin un solo test,
un script que sale 0 es peor que no tenerlo (`STANDARD.md` §6).

### Decision 3 — No aplicar la migracion de signal inputs pese a ser categoria A

`signal-input-migration` esta disponible en `@angular/core@21.2.23` y hay 15 sitios, numero bajo.
No se aplica. Razon: en una **libreria publicada** esa migracion no es un cambio de forma sino un
cambio de la API pública — `@Input() width = 210` pasa a `width = input(210)`, y el `.d.ts`
publicado cambia de `width: number` a `width: InputSignal<number>`. Un consumidor que lea
`hero.width` en TypeScript deja de compilar. Este repo **no tiene ni un test** y **no puede
verificar a los consumidores** (los `.d.ts` de Atlas/Edubot/etc. no se compilan aqui), asi que la
puerta que exige la categoria B no existe. Se documenta como change propio. Lo que si se aplica
es `inject-migration` (1 sitio), cuyo campo es `private` y por tanto **no cambia el `.d.ts`**.

### Decision 4 — Duplicidad: linea base, no refactor

Se mide con `jscpd --min-lines 5 --min-tokens 50 --mode mild`, se committea
`.jscpd-baseline.json`, y `--fail-on-new-clones --fail-on-empty` convierte el problema de "6 clones
quejándose cada día" en "solo lo nuevo que añado". `--fail-on-empty` es obligatorio: sin el, un
patron mal escrito que analiza 0 ficheros reporta 0% y deja el pipeline verde en falso. Los clones
se documentan con ruta; no se tocan.

### Decision 5 — El build se arregla en su propio commit, separado de la documentacion

Regla: un commit deja el repo en verde y no mezcla formato con logica. El arreglo de `exports`
cambia el artefacto publicado; la documentacion no toca codigo. Mezclarlos haria imposible
revertir el arreglo sin arrastrar los docs.

## Risks / Trade-offs

- **Riesgo del arreglo de build**: si el `dist/package.json` generado ahora se publica donde antes
  no habia manifiesto, un consumidor que hoy falla puede pasar a funcionar. Eso es una mejora, pero
  es un cambio de comportamiento de *instalacion*, no de componentes. Se mitiga con un commit
  dedicado y reversible.
- **Riesgo de la migracion a `inject()`**: `isPlatformBrowser` se evalua en el momento del
  campo en lugar del constructor. Ambos son el mismo tick de construccion de la instancia, y
  `ngAfterViewInit` es quien consume `isBrowser`, asi que el resultado observable es identico.
- **Deuda que se asume consciously**: `dist/` trackeado contra `.gitignore`, `STYLE_GUIDE.md`
  fantasma en `exports`/`files`, y no tener test. Todo queda escrito en ADRs, no escondido.
- **Lo que no se puede probar aqui**: sin `@angular/cli` no hay schematic runner, asi que
  cualquier migracion oficial futura necesita primero anadir el CLI como `devDependency`, lo que
  es en si un change aparte.
