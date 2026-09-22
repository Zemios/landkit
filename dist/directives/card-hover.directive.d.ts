import { ElementRef, Renderer2 } from '@angular/core';
/**
 * CardHoverDirective
 *
 * Adds a token-driven lift + shadow on hover to any element it is
 * applied to. The values come from `var(--zemios-*)` so consumers
 * can theme it via the token scale.
 *
 * Usage:
 *   <div appCardHover>…</div>
 */
export declare class CardHoverDirective {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer2);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
//# sourceMappingURL=card-hover.directive.d.ts.map