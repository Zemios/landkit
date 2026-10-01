# repo-quality-gates

## Purpose

Definir las puertas de verificacion ejecutables del repositorio y la politica de ratchet sobre
la deuda ya existente, de modo que una comprobacion nueva pueda distinguir "rojo de antes" de
"roto ahora" y solo falle por lo que este change introduce.

## ADDED Requirements

### Requirement: Puertas de verificacion nombradas y ejecutables

El repositorio SHALL exponer un script `typecheck` y un script `lint`, ambos ejecutables con
salida 0 en el estado actual, y SHALL documentarlos en la tabla de comandos del `README.md`.

#### Scenario: Typecheck y lint verdes

- **WHEN** se ejecutan `npm run typecheck` y `npm run lint`
- **THEN** ambos terminan con codigo 0
- **AND** ninguno modifica ficheros del repositorio (`--noEmit`)

#### Scenario: El typecheck no se esconde tras otro nombre

- **WHEN** se lee el bloque `scripts` del `package.json`
- **THEN** existe una clave `typecheck` cuyo unico proposito es el typecheck del proyecto
- **AND** el alias historico `check` se mantiene para no romper llamadas existentes

#### Scenario: No se declara una puerta de tests vacia

- **WHEN** el repositorio no contiene ningun fichero de test
- **THEN** no existe un script `test` que termine en 0 sin ejecutar pruebas

### Requirement: Ratchet de duplicidad sobre linea base commiteada

El repositorio SHALL medir su duplicidad con `jscpd` y SHALL commitear el resultado como linea
base, de forma que la ejecucion posterior falle **solo** por clones nuevos o crecientes, nunca por
los preexistentes.

#### Scenario: La linea base esta versionada

- **WHEN** se revisa el repositorio
- **THEN** existe `.jscpd.json` con la configuracion de medicion
- **AND** existe `.jscpd-baseline.json` con los clones registrados en el momento del cambio

#### Scenario: Sin clones nuevos la puerta pasa

- **WHEN** se ejecuta `jscpd --baseline .jscpd-baseline.json --fail-on-new-clones --fail-on-empty .`
  sin haber anadido codigo duplicado
- **THEN** termina con codigo 0

#### Scenario: La puerta no puede pasar en falso

- **WHEN** el patron de analisis termina ficheros en cero por una configuracion mal escrita
- **THEN** la ejecucion falla por `--fail-on-empty` en lugar de reportar 0% de duplicidad

#### Scenario: La duplicidad esta medida, no borrada

- **WHEN** este change se complete
- **THEN** los clones preexistentes siguen presentes y documentados con sus rutas
- **AND** no se ha refactorizado codigo para reducirlos
