import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.cwd();
const srcDir = join(root, 'src');

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

/** Every TypeScript module under src/components, src/directives and src/tokens. */
function sourceModules(): string[] {
  return ['components', 'directives', 'tokens']
    .map((dir) => walk(join(srcDir, dir)))
    .flat()
    .filter((f) => f.endsWith('.ts'))
    .map((f) => relative(srcDir, f).split(sep).join('/').replace(/\.ts$/, ''))
    .filter((f) => !f.endsWith('.spec'));
}

/** Re-export specifiers in a module, normalised relative to src/. */
function reExportsIn(modulePath: string, from: string): Set<string> {
  const source = readFileSync(join(srcDir, modulePath), 'utf8');
  // Covers `export * from '…'` and both `export { … } from '…'` /
  // `export type { … } from '…'` barrels.
  const specs = [
    ...source.matchAll(/export\s+(?:\*(?:\s+as\s+\w+)?|\{[^}]*\})\s+from\s+'([^']+)'/g),
  ].map((m) => m[1]!);
  return new Set(
    specs.map((s) =>
      from ? `${from}/${s.replace(/^\.\//, '').replace(/\.js$/, '')}` : s.replace(/^\.\//, '').replace(/\.js$/, ''),
    ),
  );
}

/**
 * The modules reachable from src/public-api.ts, following one level of barrel
 * file so `export * from './tokens/index.js'` counts as exporting the token
 * implementation modules it re-exports.
 */
function reachableModules(): Set<string> {
  const direct = reExportsIn('public-api.ts', '');
  const reachable = new Set(direct);
  for (const barrel of [...direct].filter((m) => m.endsWith('/index'))) {
    for (const nested of reExportsIn(`${barrel}.ts`, barrel.replace(/\/index$/, ''))) {
      reachable.add(nested);
    }
  }
  return reachable;
}

describe('public API surface', () => {
  const modules = sourceModules();
  const exported = reachableModules();

  it('finds the component and token modules', () => {
    expect(modules.length).toBeGreaterThan(20);
  });

  it('re-exports every component and token module', () => {
    // Guards the regression this repository actually had: 12 finished
    // components plus the whole token system were written but never
    // exported, so consumers could not reach them at all.
    const orphans = modules.filter((m) => !exported.has(m));
    expect(orphans).toEqual([]);
  });

  it('does not re-export modules that no longer exist', () => {
    const stale = [...exported].filter((m) => !modules.includes(m));
    expect(stale).toEqual([]);
  });

  it('exports the documented component entry points', () => {
    for (const expected of [
      'components/atoms/button/button',
      'components/atoms/badge/badge',
      'components/atoms/divider/divider',
      'components/atoms/input/input',
      'components/atoms/input-field/input-field',
      'components/atoms/logo/logo',
      'components/atoms/nav-link/nav-link',
      'components/atoms/spinner/spinner',
      'components/atoms/title',
      'components/atoms/made-by/made-by',
      'components/molecules/card/card',
      'components/molecules/nav-bar/nav-bar',
      'components/organisms/footer/footer',
      'components/organisms/hero/hero',
      'components/organisms/hero/hero-mobile/hero-mobile',
      'components/organisms/modal/modal',
      'components/phone-mockup/phone-mockup',
      'components/templates/cta/cta',
      'components/templates/features-grid/features-grid',
      'components/templates/process/process',
      'components/templates/section-shell/section-shell',
      'directives/card-hover.directive',
      'tokens/index',
    ]) {
      expect(exported.has(expected), `public-api.ts must export ${expected}`).toBe(true);
    }
  });
});
