# ADR-0001 · Construir con ng-packagr y `exports` como mapa de condiciones
- Estado: Accepted (2026-10-01)
- Supersedes: —
- Superseded by: —

## Contexto

`@zemios/landkit` es una libreria de componentes Angular que se consume desde seis
productos. La restriccion que obliga a decidir: **el formato de publicacion tiene que ser
el que entiende un consumidor sin saber nada de este repo**, y el mecanismo de construccion
tiene que ser el que Angular soporta oficialmente para una libreria de componentes.

El repo ya venia de ahi: el commit `1be7016` sustituyo la compilacion manual con `tsc` por
`ng-packagr` con `ng-package.json`, para adoptar el Angular Package Format (APF). La
decision de fondo —APF, no un `tsc` a pelo— ya estaba tomada.

Lo que quedaba sin decidir era la **forma del mapa `exports`** en el `package.json` de la
raiz, y resulto ser la causa de que el build estuviera roto.

ng-packagr 21.2.7, en `src/lib/ng-package/entry-point/write-package.transform.js:299`, hace:

```js
insertMappingOrError('./package.json', { default: './package.json' });
// y dentro:
exports[subpath] ??= {};                            // un string NO es nullish: no se reemplaza
subpathExport[conditionName] = mapping[conditionName];  // TypeError sobre un primitivo string
```

El `package.json` declaraba `"./package.json": "./package.json"` como **string**. En modo
estricto, asignar `.default` sobre un string lanza
`TypeError: Cannot create property 'default' on string './package.json'`. El crash ocurre
despues de generar el FESM y los tipos, y ng-packagr borra `dist/` al fallar, asi que el
resultado era un paquete publicado sin manifiesto.

Opciones consideradas:

- **A.** Declarar el subpath como objeto de condiciones: `{ "default": "./package.json" }`.
- **B.** Borrar la linea y dejar que ng-packagr genere el subpath.
- **C.** Parchear ng-packagr (`patch-package`) o fijar la version de la herramienta.
- **D.** Revertir a `tsc` sin APF, como estaba antes de `1be7016`.

## Decision

**A**: el mapa `exports` de nivel superior usa **objetos de condiciones** para todo subpath
que el repo declare, y ninguna entrada es un string escalar.

Criterio explicito: segun la especificacion de `exports` de Node, un objetivo string es
azucar sintactico para `{ "default": <target> }`. Por tanto **A y B son equivalentes para el
resolver**, y lo unico que las distingue es la legibilidad. A gana porque hace explicito el
subpath que el repo quiere publicar, en vez de depender de que la herramienta lo genere
despues; y porque hace imposible que el mismo error vuelva a colarse por descuido.

B se descarto por la misma razon que ng-packagr emite un aviso pidiendo "unset it" en su
propio codigo: el subpath declarado a mano es una condicion que la herramienta va a
sobrescribir igual. Se asume ese aviso como ruido conocido.

C se descarto por ser una dependencia parcheada que nadie va a mantener, y porque el bug es
de **configuracion de este repo**, no de la herramienta: la herramienta esta haciendo lo que
documenta. Un parche lo convertiria en deuda permanente a cambio de no cambiar una linea.

D se descarto porque `tsc` a pelo produce un `.d.ts` sin compilacion parcial, que es
justamente lo que obliga al consumidor a recompilar la libreria con su propia version de
Angular. Volver a D es perder la razon por la que se migro a ng-packagr.

## Consecuencias

- **Positivas**:
  - `npm run build` termina en 0 y produce los 6 artefactos de APF, incluido el manifiesto.
  - La superficie publica es identica antes y despues: 9 clases y 6 tipos, mismo nombre.
    Para el resolver de Node, el mapa no ha cambiado de significado.
  - El fallo era localizable leyendo la fuente de la herramienta, no "magia de
    resolucion de JSON". Queda documentado en
    [CONTRIBUTING.md](../../CONTRIBUTING.md) para que no se repita.
- **Negativas / deuda asumida**:
  - ng-packagr emite **3 avisos** en cada build: uno por la condicion `default` de
    `./package.json` y dos por las de `.` (`types` y `default`). Son ruido en la salida de
    build y pueden tapar un aviso real. Se aceptan porque los avisos de `.` son
    inevitables: la entrada `.` del `package.json` de la raiz **no** se puede borrar, es la
    que hace que el consumo por git (`github:Zemios/landkit`) resuelva sin paso de build.
  - El `.d.ts` publicado no se puede leer como documentacion de la API sin compilar: es un
    bundle generado. La documentacion real de la API es `src/public-api.ts` mas el README.
  - Este ADR ata el repo a la semantica de `exports` de ng-packagr. Una actualizacion mayor
    de la herramienta podria cambiar que condiciones se generan, y habria que revisarlo.
  - Sigue en pie, sin resolver y **deliberadamente fuera de este ADR**, que
    `exports["./STYLE_GUIDE.md"]` y `files` referencian un fichero que no existe. Borrar una
    entrada publica que cambia la superficie de subpath: lo decide el usuario, no este change.
- **Que nos obliga a revisar esta decision**:
  - Una actualizacion mayor de `ng-packagr` o de Angular.
  - La aparicion de un segundo entry point (sub-entry points), que cambia por completo como
    se construye el mapa `exports`.
  - Si el consumo por git (`github:Zemios/landkit`) deja de usarse: entonces la entrada `.`
    de la raiz y el versionado de `dist/` serian redundantes y esta decision cae.
