/**
 * Vitest setup.
 *
 * The Angular packages ship in "partial compilation" form (APF). Outside an
 * Angular CLI build the linker does not run, so importing @angular/common
 * throws at module-evaluation time. Loading @angular/compiler enables the
 * documented JIT fallback so the pure service logic can be unit-tested
 * without standing up a full TestBed/zone.js harness.
 */
import '@angular/compiler';
