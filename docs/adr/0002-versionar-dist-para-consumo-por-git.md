# ADR-0002 · Versionar `dist/` para el consumo por git
- Estado: Accepted (2026-10-01)
- Supersedes: —
- Superseded by: —

## Contexto

Dos restricciones tiran en direcciones opuestas:

1. `dist/` es un **artefacto de build**. `.gitignore` lo excluye (`/dist`), que es lo
   correcto para cualquier proyecto.
2. Uno de los consumidores, Atlas, instala landkit como **`github:Zemios/landkit`**, no
   desde el registry. Al instalar desde git, npm **no ejecuta** `prepublishOnly` y **no
   compila** nada: usa el arbol tal cual esta en el commit.

Sin `dist/` versionado, un consumidor por git recibe un paquete cuyo `main`, `module` y
`types` apuntan a `./dist/...` y no existen. Eso es exactamente lo que paso: los 6
ficheros de `dist/` estan versionados **a proposito**, aunque `.gitignore` diga lo
contrario.

La incoherencia es real y visible: `git status` marca `/dist` como ignorado mientras
`git ls-files dist` devuelve 6 ficheros. Se asume la incoherencia en vez de resolverla
por las dos partes a la vez.

Opciones consideradas:

- **A.** Mantener `dist/` versionado y que `.gitignore` lo excluya. (Estado actual.)
- **B.** Anadir `!dist/` al final de `.gitignore` para que la excepcion sea explicita.
- **C.** Dejar de versionar `dist/` y obligar a que todo consumidor venga del registry
  privado.
- **D.** Dejar de versionar `dist/` y compilar en el `postinstall` del consumidor.

## Decision

**A**: se mantiene el estado actual —`dist/` versionado, `.gitignore` sin tocar— y se
documenta la excepcion de forma explicita en el propio `.gitignore` y en
`ARCHITECTURE.md`.

Criterio: el coste de la incoherencia (una regla de `.gitignore` que miente) es **visible
y local**; el coste de las alternativas cambia como instala el consumidor. B parece
mejor, y de hecho es la forma *correcta* de escribir la excepcion, pero tocar
`.gitignore` reescribiria la politica de artefactos del repo, que es una decision de su
dueno, no de este change. Se deja B anotada como deuda concreta.

C se descarto porque un cambio de canal de distribucion no es una decision que se tome
como efecto secundario de un pulido de arquitectura, y porque dejaria a Atlas sin
dependencias hasta que se publicase una version nueva.

D se descarto por la misma razon que en ADR-0001: meter un compilador en el
`postinstall` de un consumidor es una sorpresa de seguridad y de tiempo de ejecucion que
nadie firma.

## Consecuencias

- **Positivas**:
  - `github:Zemios/landkit` funciona sin paso de build: es el modo en que Atlas consume hoy.
  - El paquete se puede revisar en un PR: el `.d.ts` que se va a publicar es visible en el
    diff, y por eso `git diff dist/types/zemios-landkit.d.ts` es la forma de comprobar si
    un cambio toca la API publica.
  - `dist/` y `src/` se mueven en el mismo commit, asi que nunca describen versiones
    distintas del codigo.
- **Negativas / deuda asumida**:
  - Cada cambio en `src/` produce un diff de artefactos generado en el mismo commit. Ese
    diff es ruido para el revisor, y es exactamente el tipo de ruido que esconde bugs
    reales. Mitigacion: `.gitattributes` marca `dist/**` como `linguist-generated` y
    `-diff`.
  - Cualquiera que haga `git clean -xdf` se queda sin `dist/` y el paquete deja de
    funcionar **hasta que se ejecute el build**. `npm run build` es obligatorio despues de
    clonar, aunque `npm install` no lo dispare.
  - `dist/` es ahora un segundo sitio donde puede quedar desincronizado el estado. Nada lo
    detecta automaticamente.
  - La regla de `.gitignore` que excluye `/dist` es **falsa** para este repo. Queda
    anotada con un comentario, pero el comentario no la hace verdadera: la excepcion
    explicita (`!dist/`) sigue pendiente.
- **Que nos obliga a revisar esta decision**:
  - Si el consumo por git deja de usarse en favor del registry privado: entonces `dist/`
    deja de necesitar estar versionado, y con el la entrada `.` de la raiz que lo
    sostiene (ver [ADR-0001](0001-build-con-ng-packagr.md)).
  - Si aparece un segundo entry point: `dist/` pasaria a tener subpaquetes con
    `package.json` propio y la politica de versionado seria distinta.
  - Si el tamano de `dist/` deja de ser manejable en un PR.
