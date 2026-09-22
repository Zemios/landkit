import { AfterViewInit } from '@angular/core';
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
export declare class FeaturesGridComponent implements AfterViewInit {
    private platformId;
    private isBrowser;
    features: {
        lottieFile: string;
        title: string;
        description: string;
        rgbColor: string;
        delay: number;
    }[];
    constructor(platformId: object);
    ngAfterViewInit(): void;
}
//# sourceMappingURL=features-grid.d.ts.map