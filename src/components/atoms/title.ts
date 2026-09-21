import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'z-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-12 md:py-16">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <p
          class="text-3xl leading-relaxed font-light md:text-4xl lg:text-5xl"
          style="font-family: 'Outfit', sans-serif;"
          [class.text-white]="!accentText"
        >
          @if (!accentText) {
            <ng-content></ng-content>
          }
          @if (accentText) {
            <span
              style="background: linear-gradient(135deg, #e2e8f0, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
              class="font-semibold"
              ><ng-content></ng-content
            ></span>
          }
        </p>
      </div>
    </section>
  `
})
export class TitleComponent {
  @Input() accentText = false
  /** @deprecated Use accentText instead */
  @Input() rainbowText = false
}
