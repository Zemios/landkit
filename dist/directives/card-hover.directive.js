var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, HostListener } from '@angular/core';
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
let CardHoverDirective = class CardHoverDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-4px)');
        this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'var(--zemios-shadow-xl)');
    }
    onMouseLeave() {
        this.renderer.removeStyle(this.el.nativeElement, 'transform');
        this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    }
};
__decorate([
    HostListener('mouseenter')
], CardHoverDirective.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave')
], CardHoverDirective.prototype, "onMouseLeave", null);
CardHoverDirective = __decorate([
    Directive({
        selector: '[appCardHover]',
        standalone: true,
    })
], CardHoverDirective);
export { CardHoverDirective };
