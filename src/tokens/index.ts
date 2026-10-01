/**
 * @zemios/landkit — Tokens entry point
 *
 * Re-exports the design-token system so consumers can do:
 *
 *   /* in styles.css *
 *   @import '@zemios/landkit/tokens';        → dist/tokens/zemios.css
 *
 *   /* in TS *
 *   import { zemiosTokens, zemiosRadius, ThemeService } from '@zemios/landkit';
 */

/**
 * Specifier for the CSS custom-property stylesheet. It resolves through the
 * `./tokens` sub-entry in package.json `exports`, so it is the correct value
 * to hand to a bundler or a runtime `import`.
 */
export const zemiosTokensStylesheet = '@zemios/landkit/tokens';

export {
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
} from './zemios-tokens';

export type { ZemiosColorScale, ZemiosTheme } from './zemios-tokens';

export { ThemeService, ZEMIOS_THEME_STORAGE_KEY } from './theme.service';