# Contexto del sistema

Diagramas C4 de `@zemios/landkit` **en su estado actual**. Renderizan en GitHub sin
tooling: son codigo Mermaid, no imagenes. L1 y L2 son suficientes aqui; L3 solo se dibuja
cuando un contenedor es complejo, y este repo tiene un unico contenedor.

> **Nota sobre el renderizado.** Mermaid marca sus diagramas C4 como **experimentales**
> (los marca con un aviso en su propia documentacion), asi que un renderizador con la
> funcionalidad desactivada mostrara el codigo fuente en lugar del dibujo. Por eso cada
> diagrama va acompanado de su lista de nodos y relaciones en prosa: **la informacion no
> depende de que el diagrama se pinte.** Si algun dia hace falta garantizar renderizado
> incondicional, la conversion a `flowchart` con etiquetas al estilo C4 es el plan B.

---

## C4 L1 — Contexto de sistema

Que es landkit y quien lo usa, visto desde fuera.

```mermaid
C4Context
  title C4 L1 — @zemios/landkit en su contexto

  Person(dev, "Equipo Zemios", "Desarrolla landings y apps de producto")
  System_Boundary(zemios, "Universo Zemios") {
    System(landkit, "@zemios/landkit", "Libreria Angular de 9 componentes y 1 directiva. Sin runtime propio.")
    System(atlas, "Atlas", "Landing principal")
    System(edubot, "Edubot", "Producto educativo")
    System(cronos, "Cronos", "Producto de contenido")
    System(nebula, "Nebula", "Producto de negocio")
    System(even2me, "even2me", "Producto de eventos")
  }
  System_Ext(trans, "@ngx-translate/core", "Resolucion de claves i18n (peer dep)")
  System_Ext(lottie, "@lottiefiles/dotlottie-wc", "Web component de animaciones (peer opcional)")

  Rel(dev, landkit, "Anade componentes, compila y publica", "npm publish / github:Zemios/landkit")
  Rel(atlas, landkit, "Importa componentes", "TS/HTML")
  Rel(edubot, landkit, "Importa componentes", "TS/HTML")
  Rel(cronos, landkit, "Importa componentes", "TS/HTML")
  Rel(nebula, landkit, "Importa componentes", "TS/HTML")
  Rel(even2me, landkit, "Importa componentes", "TS/HTML")

  Rel(atlas, trans, "Traduce claves de landkit", "Runtime")
  Rel(landkit, lottie, "Carga dinamica en z-features-grid", "import() en ngAfterViewInit, solo en navegador")
  Rel(landkit, trans, "Declara claves, no las resuelve", "Build time")
```

**Lo que este diagrama dice y no es obvio**: landkit no tiene entradas de usuario, ni
salidas, ni estado. Su unica "interaccion" es ser importado. Todo lo que ocurre en
tiempo de ejecucion ocurre dentro de la app consumidora.

---

## C4 L2 — Contenedores

El repo entero es un contenedor. Se descomponen sus piezas internas.

```mermaid
C4Container
  title C4 L2 — Contenedores internos de @zemios/landkit

  Person(dev, "Equipo Zemios", "Desarrolla el design system")

  System_Boundary(landkit, "@zemios/landkit") {
    Container(api, "src/public-api.ts", "Angular/TypeScript", "Unica superficie publica: 9 clases + 6 tipos. Todo lo demas es interno.")
    Container(atoms, "src/components/atoms", "Angular", "z-button, z-made-by, z-title")
    Container(organisms, "src/components/organisms", "Angular", "z-hero, z-hero-mobile")
    Container(templates, "src/components/templates", "Angular", "z-cta, z-features-grid, z-process")
    Container(mockup, "src/components/phone-mockup", "Angular", "z-phone-mockup: mockup de movil, atom a nivel de raiz")
    Container(directives, "src/directives", "Angular", "appCardHover: efecto hover con HostBinding/HostListener")
    Container(dist, "dist/", "Artefacto APF", "FESM2022 + .d.ts + package.json generado. Versionado.")
  }

  System_Ext(ngpackagr, "ng-packagr", "Empaqueta la libreria en Angular Package Format")
  System_Ext(tsc, "tsc", "Typecheck con --noEmit")
  System_Ext(jscpd, "jscpd", "Mide duplicidad contra linea base")
  System_Ext(consumer, "App consumidora", "Angular 21 con landkit instalado")

  Rel(dev, api, "Importa y reexporta", "TypeScript")
  Rel(api, atoms, "Reexporta", "TypeScript")
  Rel(api, organisms, "Reexporta", "TypeScript")
  Rel(api, templates, "Reexporta", "TypeScript")
  Rel(api, mockup, "Reexporta", "TypeScript")
  Rel(api, directives, "Reexporta", "TypeScript")
  Rel(atoms, organisms, "z-hero compone atoms", "HTML")
  Rel(organisms, atoms, "z-hero usa z-button", "HTML")

  Rel(ngpackagr, api, "Compila en modo parcial desde", "Build")
  Rel(ngpackagr, dist, "Escribe", "Ficheros")
  Rel(tsc, api, "Comprueba", "Build")
  Rel(jscpd, api, "Mide", "Informe")
  Rel(consumer, dist, "Resuelve imports desde", "exports")
```

---

## Leyenda y limites de estos diagramas

- **L4 (codigo) no se dibuja**: `z-button.ts` no es un nodo. Si lo fuera, el diagrama
  seria el propio repositorio.
- El contenedor `dist/` aparece porque es la frontera real entre este repo y los
  consumidores: es lo unico que se importa desde fuera. `src/` es interno.
- `tsc`, `ng-packagr` y `jscpd` estan fuera del limite del sistema porque son
  herramientas de build, no parte del producto.
- Las flechas entre capas de componentes describen composicion en plantillas, no llamadas
  en runtime: Angular compone el arbol, no hay imports de componente a componente.

## Donde seguir

- Composicion interna de cada componente: `src/public-api.ts` y el codigo.
- Por que `dist/` esta versionado: [ADR-0002](../adr/0002-versionar-dist-para-consumo-por-git.md).
- Decisiones con su historia: [docs/adr/](../adr/).
