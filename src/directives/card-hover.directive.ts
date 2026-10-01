import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

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
@Directive({
  selector: '[appCardHover]',
  standalone: true,
})
export class CardHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-4px)')
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'var(--zemios-shadow-xl)')
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'transform')
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow')
  }
}