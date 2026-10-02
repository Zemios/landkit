# Contributing

Como cambiar `@zemios/landkit` sin romper a los seis productos que lo consumen.

## La regla que manda

> Este paquete se publica. Un cambio que rompe a un consumidor no es "un cambio
> rompe un consumidor", es un incidente para el equipo entero.

Antes de abrir un PR, responde a una pregunta: **¿esto cambia como se llama o como se
comporta algo que un consumidor ya usa?** Si la respuesta es si o "no lo se", todavia no
toca codigo: haz un change de OpenSpec primero.

## Flujo obligatorio

1. **Change de OpenSpec antes que codigo.**

   ```powershell
   openspec new change <nombre-del-change>
   ```

   Rellena `proposal.md` (con sus **no objetivos**), `design.md`, `tasks.md` y el delta de
   `specs/`. En un repo existente no se documenta todo el codigo: solo lo que vas a tocar.
   Para cerrar: `openspec validate --all --strict`.

2. **Puertas, en este orden.** El build va el ultimo: es lo mas caro y lo que menos
   valor da como puerta temprana.

   ```powershell
   npm run typecheck     # tsc --noEmit
   npm run lint          # mismo tsc --noEmit (alias historico)
   npx jscpd --config .jscpd.json .   # duplicidad contra la linea base
   npm run build         # ng-packagr
   ```

3. **Un commit por grupo de trabajo coherente**, y cada commit deja el repo en verde.
   Nunca mezcles reformateo masivo con cambios de logica: el diff de formato esconde bugs.

## Como anadir un componente

1. Crealo en la capa que le toca: `src/components/atoms|organisms|templates/<nombre>/`.
   Cada componente va en su propia carpeta con su `.html` / `.css` cuando los tiene.
2. Declaralo **standalone**. No hay `NgModule` y no debe aparecer uno.
3. Selector con prefijo `z-`. Si es una directiva y no una excepcion historica
   (`[appCardHover]`), selector con atributo y sin prefijo `app`.
4. Exportalo desde `src/public-api.ts`. **Ese fichero es la superficie publica**: lo que
   no esta ahi, no existe para los consumidores.
5. Anade el componente al README, en la tabla de capas.

## Reglas de la superficie publica

- **No renombres ni elimines simbolos exportados** sin version mayor. El `.d.ts` publicado
  es un contrato con Atlas, Edubot, Cronos, Nebula y even2me.
- **Los tipos de input son API.** Cambiar `@Input() width = 210` por
  `width = input(210)` cambia el `.d.ts` de `width: number` a `width: InputSignal<number>`:
  un consumidor que lea `mockup.width` en TypeScript deja de compilar. La migracion a
  signal inputs (15 sitios) esta medida y **pendiente**, no pendiente por pereza: necesita
  tests primero.
- **No subas `peerDependencies`.** Un salto de major en Angular para todo el ecosistema a la
  vez es una decision de plataforma, no un cambio de componente.
- **No anadas dependencias de runtime** sin pasarla a `allowedNonPeerDependencies` en
  `ng-package.json`. Si no, `ng-packagr` falla el build con
  `Dependency X must be explicitly allowed`.

## Sobre el mapa `exports`

`exports` de nivel superior **debe usar objetos de condiciones** para los subpaths que
declares:

```jsonc
"exports": {
  ".":              { "types": "...", "default": "..." },  // objeto de condiciones
  "./package.json": { "default": "./package.json" }         // objeto, NUNCA un string
}
```

Un objetivo string (`"./package.json": "./package.json"`) hace que `ng-packagr` lance
`Cannot create property 'default' on string` al escribir el manifiesto, y borra `dist/`.
Ver [ADR-0001](docs/adr/0001-build-con-ng-packagr.md).

## Tests

El repo **si tiene** runner: `vitest`, con `pnpm test` (`vitest run`) y `pnpm test:watch`.
Hoy son **40 tests verdes** en 3 ficheros de spec, que cubren el servicio de temas y las
definiciones de tokens. `jsdom` esta declarado en `devDependencies` para el entorno.

Lo que **no** hay es cobertura de componentes: los 21 componentes de la libreria no
tienen spec, y ahi la red de seguridad sigue siendo compilar.

La ruta prevista es Playwright para e2e, y el orden para montar ese castle es:

1. `typecheck` como red de seguridad (ya esta).
2. Un test smoke por componente, empezando por los que tienen inputs.
3. Solo entonces, `signal-inputs` y cualquier otra migracion que toque la API publica.

Un componente con `ngAfterViewInit` y carga dinamica (`z-features-grid` importa
`@lottiefiles/dotlottie-wc`) necesita un entorno de navegador real: ahi es Playwright,
no un unit test.

## Duplicidad

```powershell
npx jscpd --config .jscpd.json .                              # mide
npx jscpd --config .jscpd.json --update-baseline .           # actualiza la linea base
```

`.jscpd-baseline.json` esta commiteado a proposito: la puerta falla **solo por clones
nuevos**, no por el 1 preexistente. Los fingerprints son hashes con multiplicidad:
mover o renombrar un fichero no dispara la puerta; solo la duplicacion creciente.

Ojo: `jscpd` **no** esta en `devDependencies` ni en el workflow de CI, asi que esto es
configuracion inerte. Para que la puerta exista hay que anadir el script y el paso de
CI; hasta entonces, ejecutalo a mano con los comandos de arriba.

Actualizar la linea base para tapar clones nuevos es la forma mas rapida de perder la
puerta. Si la duplicacion hay que reducirla, es un change propio.

## Cuando algo falla

- **Falla `typecheck`.** Es la puerta mas fiable del repo. Arreglalo antes que nada.
- **Falla `build`.** Comprueba si tocaste `exports`, `ng-package.json` o `public-api.ts`.
  La causa mas frecuente de un fallo en el paso "Writing package manifest" es la forma del
  mapa `exports`.
- **`Cannot create property 'default' on string`**: subpath de `exports` declarado como
  string. Arreglado en [ADR-0001](docs/adr/0001-build-con-ng-packagr.md).
- **Cambia el `.d.ts` sin querer.** Compara los simbolos exportados antes y despues
  (`git diff dist/types/zemios-landkit.d.ts`). Ese fichero es el contrato.
