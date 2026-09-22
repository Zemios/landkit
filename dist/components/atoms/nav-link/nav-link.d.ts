import { Router } from '@angular/router';
export interface NavPage {
    title: string;
    url: string;
    icon?: string;
}
/**
 * NavItemComponent — single nav-link with a brand-violet underline.
 *
 * Token-driven; reads `--zemios-accent` for the underline / hover
 * colour so a single token change re-themes every Zemios product.
 *
 * Usage:
 *   <z-nav-item [page]="{ title: 'Inicio', url: '' }"></z-nav-item>
 */
export declare class NavItemComponent {
    router: Router;
    page: NavPage;
    constructor(router: Router);
}
//# sourceMappingURL=nav-link.d.ts.map