import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appCardHover]',
  standalone: true
})
export class CardHoverDirective {
  @HostBinding('style.transition') transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  @HostBinding('style.transform') transform: string | null = null
  @HostBinding('style.boxShadow') boxShadow: string | null = null

  @HostListener('mouseenter')
  onMouseEnter() {
    this.transform = 'translateY(-4px)'
    this.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.transform = null
    this.boxShadow = null
  }
}
