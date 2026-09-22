/**
 * @zemios/landkit — Tokens entry point
 *
 * Re-exports the CSS file path and the TypeScript token mirror so
 * consumers can do:
 *
 *   /* in styles.css *
 *   @import '@zemios/landkit/tokens';
 *
 *   /* in TS *
 *   import { zemiosTokens, zemiosRadius, zemiosTheme } from '@zemios/landkit';
 */
export const zemiosTokensStylesheet = './zemios.css';
export { zemiosTokens, zemiosSemantic, zemiosSurface, zemiosText, zemiosBorder, zemiosSpacing, zemiosRadius, zemiosShadow, zemiosFont, zemiosFontSize, zemiosMotion, zemiosZ, zemiosGradient, } from './zemios-tokens';
