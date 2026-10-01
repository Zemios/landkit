# Registro de decisiones (ADR)

Decisiones estructurales de `@zemios/landkit`: **por que** el repo es como es. El
"como" esta en [ARCHITECTURE.md](../../ARCHITECTURE.md), y el "que va a pasar" en
`openspec/changes/`.

Un ADR describe el pasado y **no se edita nunca**: si una decision cambia, se marca como
`Superseded by ADR-NNNN` y se escribe uno nuevo. El ciclo es
`Proposed -> Accepted -> Superseded by`.

## Como leerlo

- **Contexto**: que restriccion obliga a decidir. Sin restriccion no hay decision.
- **Decision**: que se eligio y por que **gana** frente a las alternativas, con un
  criterio, no con adjetivos.
- **Consecuencias**: incluye **al menos una negativa**. Un ADR sin coste asumido significa
  que nadie llego a pensar en los trade-offs, y por lo tanto no se ha leido.

## Indice

| Nº | Titulo | Estado | Fecha |
|---|---|---|---|
| [0001](0001-build-con-ng-packagr.md) | Construir con ng-packagr y forma de condiciones en `exports` | Accepted | 2026-10-01 |
| [0002](0002-versionar-dist-para-consumo-por-git.md) | Versionar `dist/` para el consumo por git | Accepted | 2026-10-01 |

## Plantilla

```markdown
# ADR-NNNN · <titulo>
- Estado: Accepted (YYYY-MM-DD)
- Supersedes: —
- Superseded by: —

## Contexto
Que requisito obliga. Restricciones. Opciones consideradas: A, B, C.

## Decision
A, y por que gana frente a B y C (criterio explicito).

## Consecuencias
- Positivas: …
- Negativas / deuda asumida: …   <-- OBLIGATORIO
- Que nos obliga a revisar esta decision: <umbral medible>
```

Un ADR sin fecha lo reescribe una IA y nadie lo nota. Sin consecuencias negativas, es
invalido.
