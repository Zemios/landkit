import { Router } from '@angular/router';
import { LogoVariant } from '../../atoms/logo/logo';
import { NavPage } from '../../atoms/nav-link/nav-link';
export type NavBarTheme = 'dark' | 'light';
/**
 * NavBarComponent — responsive top navigation.
 *
 * Renders a desktop bar with logo + nav-items and a mobile bar with a
 * hamburger toggle. Auto-hides on scroll. Token-driven; every Zemios
 * product that needs a top nav uses this same component so the look
 * stays consistent.
 *
 * Usage:
 *   <z-nav-bar
 *     [pages]="[{ title: 'Inicio', url: '' }, { title: 'Proyectos', url: 'projects' }]"
 *     theme="dark"
 *   ></z-nav-bar>
 */
export declare class NavBarComponent {
    router: Router;
    pages: NavPage[];
    logoVariant: LogoVariant;
    mobileLogoSrc: string;
    theme: NavBarTheme;
    menuVisible: boolean;
    scrolled: boolean;
    constructor(router: Router);
    onScroll(): void;
    toggleMenu(): void;
    closeMenu(): void;
    private isNearEdge;
}
//# sourceMappingURL=nav-bar.d.ts.map