# Tasks

## 1. Build del paquete (bloqueante para todo lo demas)

- [ ] 1.1 Convertir `exports["./package.json"]` del `package.json` de mapa de condiciones
  - *Verificacion*: `npm run build` termina en 0 y existen `dist/fesm2022/zemios-landkit.mjs`,
    `dist/types/zemios-landkit.d.ts` y `dist/package.json` con `name === "@zemios/landkit"`.
- [ ] 1.2 Anadir el script `typecheck` conservando `lint` y `check`
  - *Verificacion*: `npm run typecheck` y `npm run lint` terminan ambos en 0.
- [ ] 1.3 Regenerar `dist/` y verificar que la superficie publica no cambia
  - *Verificacion*: el conjunto de simbolos exportados por `src/public-api.ts` es identico antes
    y despues; `git status` no muestra borrados en `dist/`.
- [ ] 1.4 Commit propio: `fix(build): expresion de condiciones valida en exports["./package.json"]`

## 2. Migracion oficial aplicada

- [ ] 2.1 Convertir la DI por constructor de `FeaturesGridComponent` a `inject(PLATFORM_ID)`
  - *Verificacion*: `npm run lint` en 0 y `npm run build` en 0; el `.d.ts` generado conserva
    `private platformId` (sin cambio de API publica).
- [ ] 2.2 Medir y documentar los patrones Angular no migrados (15 `@Input()`, 0 control flow legacy)
  - *Verificacion*: tabla con los recuentos real en `ARCHITECTURE.md` y en los no-objetivos de
    `proposal.md`.

## 3. Documentacion de arquitectura

- [ ] 3.1 `README.md` con las 10 secciones y el stack leido de `package.json`
  - *Verificacion*: las versiones de Angular, ng-packagr y TypeScript coinciden con las de
    `package.json` y `node_modules`; el quickstart es copiable; 80-150 lineas.
- [ ] 3.2 `ARCHITECTURE.md` describiendo **solo** el estado actual
  - *Verificacion*: >= 40 lineas; cero frases de futuro; todo afirmacion es verificable en el codigo.
- [ ] 3.3 `CONTRIBUTING.md` con los como-hacer
  - *Verificacion*: incluye la cadena build -> typecheck -> duplicidad y la regla de "sin test vacio".
- [ ] 3.4 `docs/architecture/context.md` con C4 L1 y L2 en Mermaid
  - *Verificacion*: los dos diagramas renderizan, <= 20 nodos, L4 no se dibuja.
- [ ] 3.5 `docs/adr/README.md` (indice) + ADR-0001 (construir con ng-packagr / APF) y
      ADR-0002 (construir sobre la linea base de duplicidad)
  - *Verificacion*: cada ADR tiene Estado con fecha y **al menos una consecuencia negativa**.
- [ ] 3.6 Commit: `chore(arch): documenta arquitectura y anade ADR-0001 y ADR-0002`

## 4. Higiene de repo

- [ ] 4.1 `.editorconfig` con `end_of_line = lf` e `indent_size = 2`
  - *Verificacion*: el fichero existe y `npm run lint` sigue en 0.
- [ ] 4.2 `.gitattributes` con `* text=auto eol=lf` y `*.bat text eol=crlf`
  - *Verificacion*: el fichero existe; no se reescriben ficheros existentes (sin diff masivo).
- [ ] 4.3 Commit: `chore(tooling): anade .editorconfig y .gitattributes`

## 5. Duplicidad: medir y fijar linea base (sin refactorizar)

- [ ] 5.1 Ejecutar `jscpd` y registrar porcentaje real y numero de clones
  - *Verificacion*: numeros reales anotados, no estimados.
- [ ] 5.2 Commitear `.jscpd.json` y `.jscpd-baseline.json`
  - *Verificacion*: `jscpd --baseline .jscpd-baseline.json --fail-on-new-clones --fail-on-empty .`
    termina en 0 sin haber anadido clones.
- [ ] 5.3 Describir los 3-5 clones mas relevantes con sus rutas
  - *Verificacion*: cada clone con rutas de fichero y lineas, en `docs/quality/duplication.md`.
- [ ] 5.4 Verificar que **no** se ha tocado codigo para reducir duplicidad
  - *Verificacion*: `git diff` sobre `src/` solo contiene el cambio de `inject()`.
- [ ] 5.5 Commit: `chore(quality): fija linea base de duplicidad con jscpd`

## 6. Cierre

- [ ] 6.1 `openspec validate --all --strict` en verde
  - *Verificacion*: comando en 0.
- [ ] 6.2 Captura "despues" con `capture-quality.ps1` y comparar con la linea base
  - *Verificacion*: `lint` sigue ok; `build` pasa de FALLA a ok; `typecheck` pasa de inexistente
    a ok; `test` sigue inexistente.
- [ ] 6.3 Marcar todas las tareas completadas
  - *Verificacion*: checklist de `tasks.md` sin casillas pendientes.
