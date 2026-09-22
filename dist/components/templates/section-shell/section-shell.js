var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/**
 * SectionShellComponent — consistent section wrapper.
 *
 * Provides the standard Zemios section padding, max-width container
 * and optional centered eyebrow + title block. Used as the visual
 * anchor for almost every section on a Zemios landing page.
 *
 * Usage:
 *   <z-section-shell
 *     eyebrow="Por qué"
 *     title="¿Por qué elegirnos?"
 *     subtitle="Razones de peso para confiar en Zemios."
 *     maxWidth="wide"
 *   >
 *     <!-- section body -->
 *   </z-section-shell>
 */
let SectionShellComponent = class SectionShellComponent {
    constructor() {
        this.maxWidth = 'medium';
    }
};
__decorate([
    Input()
], SectionShellComponent.prototype, "eyebrow", void 0);
__decorate([
    Input()
], SectionShellComponent.prototype, "title", void 0);
__decorate([
    Input()
], SectionShellComponent.prototype, "subtitle", void 0);
__decorate([
    Input()
], SectionShellComponent.prototype, "maxWidth", void 0);
SectionShellComponent = __decorate([
    Component({
        selector: 'z-section-shell',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [
            `
      :host {
        display: block;
      }

      .z-section {
        padding: var(--zemios-space-24) var(--zemios-space-6);
      }

      .z-section--max-w-narrow .z-section__inner {
        max-width: var(--zemios-content-narrow);
      }
      .z-section--max-w-medium .z-section__inner {
        max-width: var(--zemios-content-max);
      }
      .z-section--max-w-wide .z-section__inner {
        max-width: var(--zemios-content-wide);
      }
      .z-section--max-w-full .z-section__inner {
        max-width: 100%;
      }

      .z-section__inner {
        margin: 0 auto;
      }

      .z-section__header {
        margin-bottom: var(--zemios-space-12);
        text-align: center;
      }

      .z-section__eyebrow {
        display: inline-block;
        margin-bottom: var(--zemios-space-3);
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-sm);
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--zemios-sky-400);
      }

      .z-section__title {
        margin: 0 0 var(--zemios-space-4);
        font-family: var(--zemios-font-display);
        font-size: var(--zemios-text-4xl);
        font-weight: 700;
        line-height: 1.15;
        letter-spacing: -0.02em;
        color: var(--zemios-text-primary);
      }
      @media (min-width: 768px) {
        .z-section__title {
          font-size: var(--zemios-text-5xl);
        }
      }

      .z-section__subtitle {
        margin: 0 auto;
        max-width: 48rem;
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-lg);
        font-weight: 300;
        line-height: 1.6;
        color: var(--zemios-text-secondary);
      }
    `,
        ],
        template: `
    <section
      class="z-section"
      [class]="'z-section z-section--max-w-' + maxWidth"
    >
      <div class="z-section__inner">
        @if (eyebrow || title || subtitle) {
          <div class="z-section__header">
            @if (eyebrow) {
              <span class="z-section__eyebrow">{{ eyebrow }}</span>
            }
            @if (title) {
              <h2 class="z-section__title">{{ title }}</h2>
            }
            @if (subtitle) {
              <p class="z-section__subtitle">{{ subtitle }}</p>
            }
          </div>
        }

        <ng-content></ng-content>
      </div>
    </section>
  `,
    })
], SectionShellComponent);
export { SectionShellComponent };
