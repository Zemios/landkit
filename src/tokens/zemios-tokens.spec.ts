import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  zemiosTokens,
  zemiosSemantic,
  zemiosSurface,
  zemiosText,
  zemiosBorder,
  zemiosSpacing,
  zemiosRadius,
  zemiosShadow,
  zemiosFont,
  zemiosFontSize,
  zemiosMotion,
  zemiosZ,
  zemiosGradient,
  type ZemiosTheme,
} from './zemios-tokens';

const css = readFileSync(resolve(process.cwd(), 'src/tokens/zemios.css'), 'utf8');

/** Every custom property the stylesheet declares. */
const declared = new Set([...css.matchAll(/(--[a-zA-Z0-9-]+)\s*:/g)].map((m) => m[1]!));

/** Every custom property the stylesheet reads through var(). */
const referenced = new Set([...css.matchAll(/var\(\s*(--[a-zA-Z0-9-]+)/g)].map((m) => m[1]!));

/** Declared custom properties with their raw values. */
const rawValues = new Map(
  [...css.matchAll(/(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1]!, m[2]!.trim().toLowerCase()]),
);

function flattenVars(scales: unknown[]): string[] {
  const out: string[] = [];
  for (const scale of scales) {
    for (const value of Object.values(scale as Record<string, unknown>)) {
      if (typeof value === 'string') out.push(value);
      else if (value && typeof value === 'object') out.push(...flattenVars([value]));
    }
  }
  return out;
}

/** CSS custom-property names the TypeScript mirror points at. */
function mirrorVarNames(): string[] {
  return flattenVars([
    zemiosSemantic,
    zemiosSurface,
    zemiosText,
    zemiosBorder,
    zemiosRadius,
    zemiosShadow,
    zemiosFont,
    zemiosZ,
    zemiosGradient,
    zemiosMotion,
  ]).flatMap((v) => [...v.matchAll(/var\(\s*(--[a-zA-Z0-9-]+)/g)].map((m) => m[1]!));
}

describe('zemios.css custom properties', () => {
  it('declares the --zemios-* namespace', () => {
    const zemiosNames = [...declared].filter((n) => n.startsWith('--zemios-'));
    expect(zemiosNames.length).toBeGreaterThan(150);
  });

  it('resolves every var() reference to a declared custom property', () => {
    const dangling = [...referenced].filter((n) => !declared.has(n));
    expect(dangling).toEqual([]);
  });

  it('never leaves a --zemios-* reference pointing at a legacy alias', () => {
    const legacy = [...referenced].filter((n) => n.startsWith('--nebula-') || n.startsWith('--zds-'));
    expect(legacy).toEqual([]);
  });

  it('keeps the backwards-compat alias blocks for the old namespaces', () => {
    expect([...declared].some((n) => n.startsWith('--nebula-'))).toBe(true);
    expect([...declared].some((n) => n.startsWith('--zds-'))).toBe(true);
  });

  it('ships all three themes', () => {
    expect(css).toMatch(/\[data-theme=['"]dark['"]\]/);
    expect(css).toMatch(/\[data-theme=['"]neon['"]\]/);
    expect(css).toMatch(/:root\s*\{/);
  });

  it('re-declares every themed semantic token in both dark and neon', () => {
    // Tokens that must be re-stated per theme: they carry no static value in :root.
    const themed = [
      '--zemios-surface-body',
      '--zemios-surface-base',
      '--zemios-surface-raised',
      '--zemios-text-primary',
      '--zemios-text-secondary',
      '--zemios-border-default',
      '--zemios-primary',
    ];
    const darkBlock = css.slice(css.search(/\[data-theme=['"]dark['"]\]/));
    const neonBlock = css.slice(css.search(/\[data-theme=['"]neon['"]\]/));
    for (const token of themed) {
      expect(new RegExp(`${token}\\s*:`).test(darkBlock), `dark theme must set ${token}`).toBe(true);
      expect(new RegExp(`${token}\\s*:`).test(neonBlock), `neon theme must set ${token}`).toBe(true);
    }
  });
});

describe('token TypeScript mirror', () => {
  it('exports every scale from the tokens entry point', () => {
    for (const scale of [
      zemiosTokens,
      zemiosSemantic,
      zemiosSurface,
      zemiosText,
      zemiosBorder,
      zemiosSpacing,
      zemiosRadius,
      zemiosShadow,
      zemiosFont,
      zemiosFontSize,
      zemiosMotion,
      zemiosZ,
      zemiosGradient,
    ]) {
      expect(Object.keys(scale).length).toBeGreaterThan(0);
    }
  });

  it('only ever holds string values', () => {
    const all = flattenVars([
      zemiosTokens,
      zemiosSemantic,
      zemiosSurface,
      zemiosText,
      zemiosBorder,
      zemiosSpacing,
      zemiosRadius,
      zemiosShadow,
      zemiosFont,
      zemiosFontSize,
      zemiosMotion,
      zemiosZ,
      zemiosGradient,
    ]);
    expect(all.length).toBeGreaterThan(0);
    expect(all.every((v) => typeof v === 'string' && v.trim().length > 0)).toBe(true);
  });

  it('points only at custom properties that zemios.css actually declares', () => {
    const missing = mirrorVarNames().filter((n) => !declared.has(n));
    expect(missing).toEqual([]);
  });

  it('uses only the --zemios-* namespace for var() references', () => {
    const offNamespace = mirrorVarNames().filter((n) => !n.startsWith('--zemios-'));
    expect(offNamespace).toEqual([]);
  });

  it('keeps the numeric colour ramps byte-identical to the stylesheet', () => {
    // The TypeScript mirror names the ramps semantically (brand/accent/
    // highlight/danger); zemios.css names the same ramps by hue
    // (sky/violet/gold/rose). Values must still agree exactly.
    const cssNameByTsName: Record<string, string> = {
      brand: 'sky',
      accent: 'violet',
      highlight: 'gold',
      danger: 'rose',
      slate: 'slate',
    };

    const mismatches: string[] = [];
    for (const [tsName, cssName] of Object.entries(cssNameByTsName)) {
      const steps = zemiosTokens[tsName as keyof typeof zemiosTokens] as Record<string, string>;
      for (const [step, hex] of Object.entries(steps)) {
        const cssValue = rawValues.get(`--zemios-${cssName}-${step}`);
        if (cssValue !== hex.toLowerCase()) {
          mismatches.push(`${tsName}.${step}: ts=${hex} css=${String(cssValue)}`);
        }
      }
    }
    expect(mismatches).toEqual([]);
  });

  it('keeps the neon ramp byte-identical to the stylesheet', () => {
    const mismatches: string[] = [];
    for (const [name, hex] of Object.entries(zemiosTokens.neon)) {
      const cssValue = rawValues.get(`--zemios-neon-${name}`);
      if (cssValue !== hex.toLowerCase()) mismatches.push(`neon.${name}: ts=${hex} css=${String(cssValue)}`);
    }
    expect(mismatches).toEqual([]);
  });

  it('exposes the full ZemiosColorScale ramp on every numeric palette', () => {
    const full = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    for (const name of ['brand', 'accent', 'slate'] as const) {
      expect(Object.keys(zemiosTokens[name])).toEqual(full.map(String));
    }
    // highlight stops at 900 and danger at 700, in both mirrors.
    expect(Object.keys(zemiosTokens.highlight)).toEqual([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(String));
    expect(Object.keys(zemiosTokens.danger)).toEqual([50, 100, 200, 300, 400, 500, 600, 700].map(String));
  });

  it('emits every colour as a 6-digit hex value', () => {
    const hexes = Object.values(zemiosTokens).flatMap((scale) =>
      Object.values(scale as Record<string, string>),
    );
    expect(hexes.length).toBeGreaterThan(0);
    expect(hexes.every((h) => /^#[0-9a-f]{6}$/i.test(h))).toBe(true);
  });

  it('scales spacing monotonically', () => {
    // Object key order is not declaration order here: JS hoists integer-like
    // keys to the front, so `zemiosSpacing` must be re-sorted by step before
    // the ramp can be compared.
    const steps: Array<{ rem: number; key: string }> = [];
    for (const [key, value] of Object.entries(zemiosSpacing)) {
      if (value === '0') {
        steps.push({ rem: 0, key });
        continue;
      }
      const parsed = Number.parseFloat(value);
      expect(value.endsWith('rem') || value.endsWith('px')).toBe(true);
      // 1px ≈ 0.0625rem at a 16px root font size.
      steps.push({ rem: value.endsWith('px') ? parsed / 16 : parsed, key });
    }
    steps.sort((a, b) => a.rem - b.rem);
    expect(steps.map((s) => s.key)).toContain('0.5');
    for (let i = 1; i < steps.length; i += 1) {
      expect(steps[i]!.rem).toBeGreaterThan(steps[i - 1]!.rem);
    }
  });

  it('scales font sizes monotonically', () => {
    const sizes = Object.values(zemiosFontSize).map((v) => Number.parseFloat(v));
    for (let i = 1; i < sizes.length; i += 1) {
      expect(sizes[i]!).toBeGreaterThan(sizes[i - 1]!);
    }
  });

  it('orders motion durations from instant to slower', () => {
    // The TypeScript mirror holds var() references, so the concrete values
    // are asserted against zemios.css.
    const ms = Object.values(zemiosMotion.duration).map((v) => {
      const name = /var\((--[a-zA-Z0-9-]+)\)/.exec(v)?.[1];
      expect(name).toBeDefined();
      const match = /(\d+)ms/.exec(rawValues.get(name!) ?? '');
      expect(match, `${name} must declare a millisecond duration`).not.toBeNull();
      return Number(match![1]);
    });
    for (let i = 1; i < ms.length; i += 1) {
      expect(ms[i]!).toBeGreaterThan(ms[i - 1]!);
    }
  });

  it('gives every easing token a concrete cubic-bezier curve', () => {
    for (const value of Object.values(zemiosMotion.easing)) {
      const name = /var\((--[a-zA-Z0-9-]+)\)/.exec(value)?.[1];
      expect(name).toBeDefined();
      expect(rawValues.get(name!)).toMatch(/cubic-bezier\(/);
    }
  });

  it('stacks z-index layers in ascending order', () => {
    const z = Object.values(zemiosZ).map((v) => {
      const name = /var\((--[a-zA-Z0-9-]+)\)/.exec(v)?.[1];
      expect(name).toBeDefined();
      const value = Number.parseInt(rawValues.get(name!) ?? '', 10);
      expect(Number.isNaN(value)).toBe(false);
      return value;
    });
    for (let i = 1; i < z.length; i += 1) {
      expect(z[i]!).toBeGreaterThan(z[i - 1]!);
    }
  });
});

describe('ZemiosTheme contract', () => {
  const themes: ZemiosTheme[] = ['light', 'dark', 'neon'];

  it('matches the themes zemios.css actually ships', () => {
    for (const theme of themes) {
      if (theme !== 'light') {
        expect(new RegExp(`\\[data-theme=['"]${theme}['"]\\]`).test(css)).toBe(true);
      }
    }
  });
});
