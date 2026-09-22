var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
/**
 * ProcessComponent
 *
 * Token-driven process / methodology section. Two-column layout:
 * - left side: eyebrow badge + title (with gradient accent) + subtitle.
 * - right side: a vertical list of numbered steps with a connector line.
 *
 * All values come from `var(--zemios-*)`, so a single change to the
 * token scale re-themes the entire component across every Zemios product.
 *
 * Consumers pass an optional `steps` array; if omitted, a sensible
 * default of three generic steps is rendered.
 */
let ProcessComponent = class ProcessComponent {
    constructor() {
        this.steps = [
            {
                number: '01',
                title: 'Descubrimiento',
                description: 'Análisis profundo de necesidades y definición de objetivos estratégicos.',
                color: 'cyan',
            },
            {
                number: '02',
                title: 'Ingeniería',
                description: 'Desarrollo ágil con las tecnologías más avanzadas del mercado.',
                color: 'purple',
            },
            {
                number: '03',
                title: 'Evolución',
                description: 'Despliegue continuo y optimización basada en datos reales.',
                color: 'magenta',
            },
        ];
    }
};
__decorate([
    Input()
], ProcessComponent.prototype, "steps", void 0);
ProcessComponent = __decorate([
    Component({
        selector: 'z-process',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CommonModule, TranslateModule],
        templateUrl: './process.html',
        styles: [
            `
      :host {
        display: block;
      }

      .z-process {
        position: relative;
        padding: var(--zemios-space-24) 0;
      }

      .z-process__inner {
        max-width: var(--zemios-content-max);
        margin: 0 auto;
        padding: 0 var(--zemios-space-6);
      }

      .z-process__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--zemios-space-16);
        align-items: center;
      }

      @media (min-width: 1024px) {
        .z-process__grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      .z-process__badge {
        display: block;
        margin-bottom: var(--zemios-space-4);
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-sm);
        font-weight: 700;
        letter-spacing: 0.18em;
        color: var(--zemios-sky-400);
        text-transform: uppercase;
      }

      .z-process__title {
        margin: 0 0 var(--zemios-space-8);
        font-family: var(--zemios-font-display);
        font-size: var(--zemios-text-4xl);
        font-weight: 700;
        line-height: 1.15;
        letter-spacing: -0.02em;
        color: var(--zemios-text-inverse);
      }
      @media (min-width: 768px) {
        .z-process__title {
          font-size: var(--zemios-text-5xl);
        }
      }

      .z-process__subtitle {
        margin: 0 0 var(--zemios-space-8);
        font-family: var(--zemios-font-display);
        font-size: var(--zemios-text-lg);
        font-weight: 300;
        line-height: 1.6;
        color: var(--zemios-slate-400);
      }

      .z-process__timeline {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--zemios-space-6);
      }

      .z-process-step {
        position: relative;
        display: flex;
        align-items: flex-start;
        gap: var(--zemios-space-6);
      }

      .z-process-step__rail {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .z-process-step__node {
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        border: 2px solid var(--zemios-border-glass);
        border-radius: var(--zemios-radius-full);
        background: var(--zemios-sky-500);
        transition: border-color var(--zemios-duration-moderate) var(--zemios-easing-default);
      }

      .z-process-step:hover .z-process-step__node {
        border-color: var(--zemios-sky-400);
      }

      .z-process-step__number {
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-lg);
        font-weight: 700;
        color: var(--zemios-sky-400);
      }

      .z-process-step__connector {
        width: 2px;
        height: 48px;
        background: linear-gradient(
          to bottom,
          rgba(56, 189, 248, 0.5),
          var(--zemios-violet-300)
        );
      }

      .z-process-step__body {
        padding-top: var(--zemios-space-3);
      }

      .z-process-step__title {
        margin: 0 0 var(--zemios-space-2);
        font-family: var(--zemios-font-display);
        font-size: var(--zemios-text-xl);
        font-weight: 700;
        color: var(--zemios-text-inverse);
      }

      .z-process-step__description {
        margin: 0;
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-sm);
        font-weight: 400;
        line-height: 1.6;
        color: var(--zemios-slate-500);
      }
    `,
        ],
    })
], ProcessComponent);
export { ProcessComponent };
