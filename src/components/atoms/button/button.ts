import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

export type ButtonVariants =
  | 'base'
  | 'primary'
  | 'accent'
  | 'light'
  | 'danger'
  | 'outline'
  | 'ghost'
  | 'prism-primary'
  | 'prism-outline'
  | 'prism-ghost'
  | 'social'
export type ButtonShape = 'default' | 'circle'

@Component({
  standalone: true,
  selector: 'z-button',
  imports: [CommonModule, RouterModule],
  styleUrl: './button.css',
  template: `
    <ng-template #anchor>
      @if (icon) {
        <i class="bi bi-{{ icon }}"></i>
      }
      <ng-content></ng-content>
    </ng-template>

    @if (href) {
      <a [href]="href" target="_blank" rel="noopener noreferrer" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </a>
    } @else if (routerLink) {
      <a [routerLink]="routerLink" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </a>
    } @else {
      <button type="button" [disabled]="disabled" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </button>
    }
  `
})
export class ButtonComponent {
  @Input() href?: string
  @Input() routerLink?: string
  @Input() icon?: string
  @Input() variant: ButtonVariants = 'base'
  @Input() shape: ButtonShape = 'default'
  @Input() hasShadow? = true
  @Input() disabled = false

  get computedClasses(): string[] {
    const base = ['btn']
    if (this.variant !== 'base') base.push(`btn--${this.variant}`)
    if (this.shape !== 'default') base.push(`btn--${this.shape}`)
    if (this.disabled) base.push('btn--disabled')
    return base
  }

  get computedStyles() {
    return {
      boxShadow: this.hasShadow ? false : 'none'
    }
  }
}
