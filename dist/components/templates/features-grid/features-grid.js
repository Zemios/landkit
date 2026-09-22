var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
/**
 * FeaturesGridComponent
 *
 * Token-driven feature / value-prop grid. The default grid ships with
 * three generic feature rows (scalable / connected / secure) that can
 * be replaced via the `features` input.
 *
 * Each row pairs a Lottie animation slot with a title, description
 * and a subtle separator. All sizing, colour and typography come
 * from `var(--zemios-*)`.
 */
let FeaturesGridComponent = class FeaturesGridComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.features = [
            {
                lottieFile: 'lotties/architecture.lottie',
                title: 'features.scalable.title',
                description: 'features.scalable.description',
                rgbColor: '96,165,250',
                delay: 100,
            },
            {
                lottieFile: 'lotties/system.lottie',
                title: 'features.connected.title',
                description: 'features.connected.description',
                rgbColor: '167,139,250',
                delay: 200,
            },
            {
                lottieFile: 'lotties/secure.lottie',
                title: 'features.secure.title',
                description: 'features.secure.description',
                rgbColor: '196,181,253',
                delay: 300,
            },
        ];
        this.isBrowser = isPlatformBrowser(this.platformId);
    }
    ngAfterViewInit() {
        if (this.isBrowser) {
            import('@lottiefiles/dotlottie-wc');
        }
    }
};
FeaturesGridComponent = __decorate([
    Component({
        selector: 'z-features-grid',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CommonModule, TranslateModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        templateUrl: './features-grid.html',
        styles: [
            `
      :host {
        display: block;
      }

      .z-features-grid {
        position: relative;
        overflow: hidden;
        padding: var(--zemios-space-24) 0;
      }

      .z-features-grid__inner {
        max-width: var(--zemios-content-wide);
        margin: 0 auto;
        padding: 0 var(--zemios-space-6);
      }

      .z-features-grid__grid {
        display: grid;
        gap: var(--zemios-space-16);
        grid-template-columns: 1fr;
      }

      @media (min-width: 768px) {
        .z-features-grid__grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .z-feature {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .z-feature__icon {
        width: 200px;
        height: 200px;
        margin-bottom: var(--zemios-space-8);
        border-radius: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .z-feature__icon dotlottie-wc {
        width: 100%;
        height: 100%;
      }

      .z-feature__title {
        margin: 0 0 var(--zemios-space-3\.5);
        font-family: var(--zemios-font-display);
        font-size: var(--zemios-text-xl);
        font-weight: 600;
        line-height: 1.25;
        color: var(--zemios-text-inverse);
        letter-spacing: -0.01em;
      }

      .z-feature__description {
        margin: 0;
        max-width: 24rem;
        font-family: var(--zemios-font-body);
        font-size: var(--zemios-text-sm);
        line-height: 1.75;
        font-weight: 300;
        color: var(--zemios-slate-500);
      }

      .z-feature__separator {
        width: 40px;
        height: 1px;
        background: rgba(255, 255, 255, 0.06);
        margin-top: var(--zemios-space-12);
      }

      .z-feature:hover {
        transform: translateY(-4px);
        transition: transform var(--zemios-duration-base) var(--zemios-easing-default);
      }
    `,
        ],
    }),
    __param(0, Inject(PLATFORM_ID))
], FeaturesGridComponent);
export { FeaturesGridComponent };
