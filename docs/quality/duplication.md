# Duplicidad de codigo

Estado real medido con `jscpd`, no estimado. Medicion del 2026-10-01 con
`jscpd@5.4.0`, Node v22.12.0.

```powershell
npx jscpd --config .jscpd.json .
```

## Configuracion

`.jscpd.json`, commiteada:

| Parametro | Valor | Por que |
|---|---|---|
| `minLines` | 5 | deteccion de clones petits sin ruido de una linea |
| `minTokens` | 50 | evita falsos positivos de listas de imports |
| `mode` | `mild` | orientado a comportamiento, no coincidencia exacta de texto |
| `gitignore` | `true` | respeta `/dist` y `/node_modules` |
| `crossFormats` | `[["javascript","typescript"]]` | un `.js` y un `.ts` con el mismo codigo son el mismo clon |
| `failOnNewClones` | `0` |tolera 0 clones nuevos |
| `failOnEmpty` | `true` | ver "por que failOnEmpty es obligatorio" |
| ignorados extra | `openspec/`, `docs/`, `*.md`, `*.css` | se mide codigo, no prosa ni plantillas de estilo |

## Resultado

| | |
|---|---|
| Ficheros analizados | **18** (10 TypeScript, 5 markup, 3 JSON) |
| Lineas totales | 1068 |
| Tokens totales | 3135 |
| **Clones** | **1** |
| Lineas duplicadas | **16 (1.50%)** |
| Tokens duplicados | 85 (2.71%) |
| TipoScript | 0 clones, 0.00% |
| markup (HTML) | 1 clon, 16 lineas, 5.19% |
| JSON | 0 clones, 0.00% |

**1.50% de lineas duplicadas** esta **por debajo** del objetivo realista de <=3%
(`STANDARD.md` §4). No hay deuda de duplicidad que pagar.

## Los clones

### 1. Bloque del headline del hero — el unico clon del repo

| | |
|---|---|
| Fichero A | `src/components/organisms/hero/hero.html` lineas **37-52** |
| Fichero B | `src/components/organisms/hero/hero-mobile/hero-mobile.html` lineas **41-56** |
| Tamano | 16 lineas, 85 tokens |
| Formato | markup (HTML) |

Contenido: el `<h1>` con `{{ 'hero.headline' | translate }}` y un `<span>` de gradiente
`linear-gradient(135deg, #60a5fa, #a78bfa)` con `-webkit-background-clip: text`, mas el
comentario `<!-- Subtitle -->` y el inicio del `<p>` de subtitulo.

Las dos unicas diferencias son dos clases de Tailwind del subtitulo:
`max-w-xl text-lg` en la version de escritorio frente a `max-w-sm text-base` en la movil.
El resto —gradiente, claves i18n, estructura del `h1`— es identico.

**No se refactoriza.** Es markup presentacional, y el riesgo de extraerlo a un
`ng-template` compartido es mayor que el beneficio: los dos heroes ya se diferencian en
anchos y tipografia, y una abstraccion para 16 lineas de un HTML con dos variantes
visuales es ruido. Ademas el repo no tiene tests que detecten una regresion de estilo.
Queda registrado como change propio si aparece una tercera variante de hero.

## Linea base

`.jscpd-baseline.json` esta commiteada:

```json
{ "version": 1, "fingerprints": { "9e370820eb021661": 1 } }
```

Con ella, la puerta falla **solo por clones nuevos o crecientes**. Los fingerprints son
hashes de contenido con multiplicidad, asi que **mover o renombrar un fichero no dispara la
puerta**: solo la duplicacion que se anade.

## Por que `failOnEmpty` es obligatorio

`failOnEmpty` protege de un fallo silencioso, no de la duplicidad. Si el `ignore` de
`.jscpd.json` dejara fuera todo el codigo —un `**` de mas, un cambio de extension—,
jscpd analizaria **0 ficheros**, reportaria 0% y saldria **verde**. El pipeline pareceria
limpio precisamente cuando la puerta ha dejado de medir. Con `failOnEmpty: true`, ese caso
falla.

## Lo que este documento NO hace

No arregla duplicidad. Refactorizar para reducir clones es precisamente el tipo de cambio
que arriesga regresiones en un repo **sin un solo test**. La unica excepcion que se
permitiria es duplicacion textual exacta y aislada, y aqui no la hay: el clon unico difiere
en 2 de sus 16 lineas.

Actualizar la linea base para que un clon nuevo deje de quejarse es la forma mas rapida de
perder la puerta. Si un clon aparece, se arregla o se propone como change propio; la linea base
solo se actualiza cuando el clon **deja de existir**.
