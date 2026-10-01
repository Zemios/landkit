import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  Injector,
  runInInjectionContext,
  ɵChangeDetectionScheduler as ChangeDetectionScheduler,
  ɵEffectScheduler as EffectScheduler,
} from '@angular/core';
import { ThemeService, ZEMIOS_THEME_STORAGE_KEY } from './theme.service';
import type { ZemiosTheme } from './zemios-tokens';

/**
 * There is no Angular CLI / TestBed harness in this library, so `effect()`
 * cannot resolve its own scheduler providers. These two stubs supply the only
 * two tokens `effect()` injects, which is enough to exercise every branch of
 * ThemeService's real logic against the real implementation.
 */
interface SchedulableEffectLike {
  run(): void;
}

class StubChangeDetectionScheduler {
  runningTick = false;
  readonly notifications: unknown[] = [];
  notify(source: unknown): void {
    this.notifications.push(source);
  }
}

class StubEffectScheduler {
  private pending: SchedulableEffectLike[] = [];
  add(e: SchedulableEffectLike): void {
    e.run();
  }
  schedule(e: SchedulableEffectLike): void {
    this.pending.push(e);
  }
  flush(): void {
    const queue = this.pending;
    this.pending = [];
    for (const effect of queue) effect.run();
  }
  remove(e: SchedulableEffectLike): void {
    this.pending = this.pending.filter((x) => x !== e);
  }
}

/** Records what the service writes to <html>. */
function createFakeDocument(): Document & { attributes: Array<[string, string]> } {
  const attributes: Array<[string, string]> = [];
  const doc = {
    documentElement: {
      setAttribute(name: string, value: string) {
        attributes.push([name, value]);
      },
    },
  };
  return Object.assign(doc, { attributes }) as unknown as Document & { attributes: Array<[string, string]> };
}

/** Minimal in-memory localStorage that can be made to throw. */
interface FakeStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
  readonly size: number;
}

function createStorage(initial: Record<string, string> | null = null): FakeStorage {
  const store = new Map<string, string>(Object.entries(initial ?? {}));
  return {
    getItem: (k) => store.get(k) ?? null,
    setItem: (k, v) => void store.set(k, v),
    removeItem: (k) => void store.delete(k),
    clear: () => store.clear(),
    get size() {
      return store.size;
    },
  };
}

interface Harness {
  service: ThemeService;
  /** Runs the queued effects, the way change detection would in a real app. */
  flush(): void;
}

function createHarness(doc: Document, platformId: string): Harness {
  const effects = new StubEffectScheduler();
  const injector = Injector.create({
    providers: [
      { provide: ChangeDetectionScheduler, useClass: StubChangeDetectionScheduler },
      { provide: EffectScheduler, useValue: effects },
    ],
  });
  const service = runInInjectionContext(injector, () =>
    // Angular types PLATFORM_ID as `object`, but isPlatformBrowser() compares it
    // against the literal 'browser'/'server' strings, which is what Angular
    // actually injects at runtime.
    new ThemeService(doc, platformId as unknown as object),
  );
  return { service, flush: () => effects.flush() };
}

function createService(doc: Document, platformId: string): ThemeService {
  return createHarness(doc, platformId).service;
}

const originalLocalStorage = globalThis.localStorage;
const originalMatchMedia = globalThis.matchMedia;

function stubLocalStorage(storage: FakeStorage | null): void {
  Object.defineProperty(globalThis, 'localStorage', {
    value: storage ?? undefined,
    configurable: true,
    writable: true,
  });
}

function stubPrefersDark(prefersDark: boolean | undefined): void {
  Object.defineProperty(globalThis, 'matchMedia', {
    value:
      prefersDark === undefined
        ? undefined
        : (query: string) => ({
            matches: query.includes('dark') ? prefersDark : false,
            media: query,
            onchange: null,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false,
          }),
    configurable: true,
    writable: true,
  });
}

beforeEach(() => {
  stubLocalStorage(createStorage());
  stubPrefersDark(false);
});

afterEach(() => {
  Object.defineProperty(globalThis, 'localStorage', {
    value: originalLocalStorage,
    configurable: true,
    writable: true,
  });
  Object.defineProperty(globalThis, 'matchMedia', {
    value: originalMatchMedia,
    configurable: true,
    writable: true,
  });
  vi.restoreAllMocks();
});

describe('ZEMIOS_THEME_STORAGE_KEY', () => {
  it('is the documented localStorage key', () => {
    expect(ZEMIOS_THEME_STORAGE_KEY).toBe('zemios-theme');
  });
});

describe('ThemeService initial theme resolution', () => {
  it('defaults to light when nothing is persisted and the system prefers light', () => {
    stubLocalStorage(createStorage());
    stubPrefersDark(false);
    expect(createService(createFakeDocument(), 'browser').current()).toBe('light');
  });

  it('honours a persisted theme over the system preference', () => {
    for (const theme of ['light', 'dark', 'neon'] as ZemiosTheme[]) {
      stubLocalStorage(createStorage({ [ZEMIOS_THEME_STORAGE_KEY]: theme }));
      stubPrefersDark(theme !== 'dark');
      expect(createService(createFakeDocument(), 'browser').current()).toBe(theme);
    }
  });

  it('falls back to prefers-color-scheme when nothing is persisted', () => {
    stubLocalStorage(createStorage());
    stubPrefersDark(true);
    expect(createService(createFakeDocument(), 'browser').current()).toBe('dark');
  });

  it('ignores a corrupted persisted value and uses the system preference', () => {
    stubLocalStorage(createStorage({ [ZEMIOS_THEME_STORAGE_KEY]: 'chartreuse' }));
    stubPrefersDark(true);
    expect(createService(createFakeDocument(), 'browser').current()).toBe('dark');
  });

  it('survives a localStorage that throws on read', () => {
    stubLocalStorage({
      getItem() {
        throw new Error('storage blocked');
      },
      setItem() {
        throw new Error('storage blocked');
      },
      removeItem() {},
      clear() {},
      size: 0,
    });
    stubPrefersDark(false);
    expect(createService(createFakeDocument(), 'browser').current()).toBe('light');
  });

  it('survives an environment without matchMedia', () => {
    stubLocalStorage(createStorage());
    stubPrefersDark(undefined);
    expect(createService(createFakeDocument(), 'browser').current()).toBe('light');
  });

  it('never writes to the DOM or to storage on the server platform', () => {
    // ThemeService decides "am I on a server?" with isPlatformBrowser() for the
    // effect, and with `typeof window` for the initial theme. A real SSR
    // runtime has no window at all, so the persisted value must still be
    // ignored for the *effect*: nothing may be written.
    const storage = createStorage();
    stubLocalStorage(storage);
    stubPrefersDark(true);
    const doc = createFakeDocument();
    const { service, flush } = createHarness(doc, 'server');
    flush();
    expect(doc.attributes).toEqual([]);
    expect(storage.size).toBe(0);
    expect(service.current()).toBeTruthy();
  });
});

describe('ThemeService set()', () => {
  it('stores the requested theme', () => {
    const service = createService(createFakeDocument(), 'browser');
    for (const theme of ['dark', 'neon', 'light'] as ZemiosTheme[]) {
      service.set(theme);
      expect(service.current()).toBe(theme);
    }
  });

  it('reflects the theme on the document element', () => {
    const doc = createFakeDocument();
    const { service, flush } = createHarness(doc, 'browser');
    flush();
    doc.attributes.length = 0;
    service.set('neon');
    flush();
    expect(doc.attributes).toContainEqual(['data-theme', 'neon']);
  });
});

describe('ThemeService toggle()', () => {
  it('cycles light â†’ dark â†’ neon â†’ light', () => {
    const service = createService(createFakeDocument(), 'browser');
    expect(service.current()).toBe('light');
    service.toggle();
    expect(service.current()).toBe('dark');
    service.toggle();
    expect(service.current()).toBe('neon');
    service.toggle();
    expect(service.current()).toBe('light');
  });

  it('cycles neon â†’ light (wraps backwards through the ring)', () => {
    const service = createService(createFakeDocument(), 'browser');
    service.set('neon');
    service.toggle();
    expect(service.current()).toBe('light');
  });

  it('sets an explicit theme when one is passed', () => {
    const service = createService(createFakeDocument(), 'browser');
    service.toggle('dark');
    expect(service.current()).toBe('dark');
    // An explicit argument is not a cycle step.
    service.toggle('dark');
    expect(service.current()).toBe('dark');
    service.toggle('light');
    expect(service.current()).toBe('light');
  });
});

describe('ThemeService persistence', () => {
  it('writes the active theme to localStorage', () => {
    const storage = createStorage();
    stubLocalStorage(storage);
    const { service, flush } = createHarness(createFakeDocument(), 'browser');
    service.set('neon');
    flush();
    expect(storage.getItem(ZEMIOS_THEME_STORAGE_KEY)).toBe('neon');
  });

  it('round-trips a theme through localStorage into a new instance', () => {
    const storage = createStorage();
    stubLocalStorage(storage);
    const first = createHarness(createFakeDocument(), 'browser');
    first.service.set('dark');
    first.flush();
    expect(createService(createFakeDocument(), 'browser').current()).toBe('dark');
  });

  it('does not throw when writing to localStorage fails', () => {
    stubLocalStorage({
      getItem: () => null,
      setItem() {
        throw new Error('quota exceeded');
      },
      removeItem() {},
      clear() {},
      size: 0,
    });
    const { service, flush } = createHarness(createFakeDocument(), 'browser');
    expect(() => {
      service.set('neon');
      flush();
    }).not.toThrow();
    expect(service.current()).toBe('neon');
  });
});
