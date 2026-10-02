# Arquitectura

Estado actual de `@zemios/landkit`, derivado del codigo. **Este documento no contiene
planes**: lo que va a cambiar vive en `openspec/changes/` y lo que se decidio, con sus
consecuencias, en `docs/adr/`.

## Que es

Una libreria Angular de 9 componentes y 1 directiva, compilada con `ng-packagr` en formato
Angular Package Format y consumida por seis productos Zemios. No tiene aplicacion, ni
servidor, ni estado global, ni base de datos: es codigo de presentacion mas una directiva
de comportamiento.

## Forma del repositorio

- `src/` es la unica fuente. 19 ficheros, ~1000 lineas entre TypeScript, HTML y CSS.
- `src/public-api.ts` es la **unica** puerta de entrada. Exporta 9 clases y 6 tipos.
- `ng-package.json` declara un solo entry point (`src/public-api.ts`) y permite `tslib`
  como unica dependencia no-peer.
- `dist/` es el artefacto de APF y esta **versionado** pese a estar en `.gitignore`.
- `tsconfig.json` es a la vez config de typecheck y config de compilacion de la libreria.

## Capas de componentes

La organizacion sigue una taxonomia atom / organism / template, propia del repo:

| Capa | Ficheros | Componentes |
|---|---|---|
| atoms | 3 | `z-button`, `z-made-by`, `z-title` |
| organisms | 2 | `z-hero`, `z-hero-mobile` |
| templates | 3 | `z-cta`, `z-features-grid`, `z-process` |
| atom a nivel de raiz | 1 | `z-phone-mockup` |
| directives | 1 | `[appCardHover]` |

`z-phone-mockup` vive fuera de `atoms/` aunque sea un atom: es el unico componente con
estilos embebidos grandes y 3 inputs, y esta descolocado del arbol atomico. Es una
decision heredada, no una regla.

## Convenciones reales (medidas sobre el codigo, no declaradas)

- **standalone**: los 10 decorators (`@Component` x9, `@Directive` x1) declaran
  `standalone: true`. No hay ningun `NgModule` en el repo. El flag es redundante desde
  Angular 19, pero es inocuo.
- **Prefijos**: los componentes usan selector `z-*`; la directiva conserva el prefijo
  `app` (`[appCardHover]`). La incoherencia esta documentada en el README como
  intencionada, porque renombrarla es un cambio que rompe consumidores.
- **Change detection**: solo `z-made-by` y `z-phone-mockup` usan `OnPush`. Los otros 7
  componentes van con deteccion por defecto. El README **decia** que todos lo usaban; ya
  no, porque era falso.
- **Inputs**: 15 `@Input()` en total, ningun `@Output()` y ningun `EventEmitter`. Ningun
  componente del repo emite eventos: el contrato es de solo entrada.
- **i18n**: `@ngx-translate/core` se importa en 5 componentes (`z-cta`, `z-process`,
  `z-hero`, `z-hero-mobile`, `z-features-grid`) y las claves se resuelven en el consumidor.
- **Control flow**: `@if` y `@for` nativos. Cero directivas `*ngIf` / `*ngFor`. La
  migracion de control flow ya esta hecha.
- **DI**: una unica inyeccion por constructor, ya convertida a `inject(PLATFORM_ID)`.

## Compilacion

- `tsconfig.json` activa `strict`, `noImplicitOverride`, `noPropertyAccessFromIndexSignature`,
  `noImplicitReturns`, `noFallthroughCasesInSwitch`, `isolatedModules`, `resolveJsonModule`
  y las `angularCompilerOptions` `strictTemplates`, `strictInjectionParameters`,
  `strictInputAccessModifiers`. Es un perfil de ratchet ya muy avanzado.
- `moduleResolution: "bundler"` y `experimentalDecorators: true` con
  `emitDecoratorMetadata: false`: es lo que permite que `public-api.ts` importe rutas con
  extension `.js` sobre ficheros `.ts`.
- La salida de typecheck (`tsc --noEmit`) y la de paquete (`ng-packagr`) comparten tsconfig,
  asi que el typecheck no cubre la compilacion parcial de plantillas: esa la cubre el build.

## Artefactos

`npm run build` produce 6 ficheros en `dist/`:

| Fichero | Contenido |
|---|---|
| `fesm2022/zemios-landkit.mjs` | bundle plano, compilacion parcial |
| `fesm2022/zemios-landkit.mjs.map` | source map |
| `types/zemios-landkit.d.ts` | tipos publicos |
| `package.json` | manifiesto generado por ng-packagr |
| `README.md` | copia del README de la raiz |
| `.npmignore` | generado por ng-packagr |

Detalles que conviene conocer:

- El `package.json` de `dist/` conserva `main` y `module` apuntando a `./dist/...`, rutas
  que **no existen** relativas a `dist/`. Funciona porque `exports` tiene precedencia y
  ng-packagr lo reescribe con rutas correctas. Es comportamiento heredado del `package.json`
  de la raiz, donde esas rutas si son validas para el consumo por git.
- `exports["./STYLE_GUIDE.md"]` y `files` declaran `STYLE_GUIDE.md`, que **no existe** en el
  repo. Es una referencia muerta: el subpath resuelve a un fichero inexistente.

## Puertas de calidad

| Puerta | Que es realmente | Estado |
|---|---|---|
| `typecheck` | `tsc --noEmit -p tsconfig.json` | verde |
| `lint` | el mismo `tsc --noEmit` (no hay ESLint) | verde |
| `tests` | `vitest run`, 3 ficheros de spec | verde, **40 tests** |
| `build` | `ng-packagr -p ng-package.json` | verde |
| `dist` coherente | `pnpm build && git diff --exit-code dist` | verde en CI |
| duplicidad | `jscpd` contra `.jscpd-baseline.json` | **no es puerta**: `jscpd` no esta en `devDependencies` ni en el workflow |

`lint` y `typecheck` son el mismo comando. Es un alias historico, no dos puertas
independientes: no hay analysis estatico mas alla del compilador.

## Deuda conocida

Medido el 2026-10-02. Todo lo siguiente es real, no hipotesis:

1. **Cobertura de tests estrecha**: 40 tests cubren el servicio de temas y las
   definiciones de tokens. Los 21 componentes de la libreria no tienen spec.
2. **3 de 21 componentes sin `OnPush`**, pese a documentarse como convencion.
3. **79 `@Input()`** sin migrar a signal inputs (0 signal inputs).
4. **Sin `@angular/cli`**, asi que las migraciones oficiales de Angular no se pueden
   ejecutar en este repo.
5. **Duplicidad**: 1 clone de 16 lineas entre `hero.html` y `hero-mobile.html`.
   Sin gate que lo vigile, porque `jscpd` no esta cableado.
6. **`public-api.ts` menciona un sub-entry `./css`** que `package.json` no expone.
   El `./tokens` que tambien anuncia si existe y si esta exportado.
