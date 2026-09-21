import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core'
import { CommonModule, isPlatformBrowser } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'z-features-grid',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './features-grid.html',
  styles: [
    `
      @media (min-width: 768px) {
        .features-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
      }
      .feature-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.5);
        border-color: rgba(255, 255, 255, 0.1) !important;
      }
      dotlottie-wc {
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class FeaturesGridComponent implements AfterViewInit {
  private isBrowser: boolean

  features = [
    {
      lottieFile: 'lotties/architecture.lottie',
      title: 'features.scalable.title',
      description: 'features.scalable.description',
      rgbColor: '96,165,250',
      delay: 100
    },
    {
      lottieFile: 'lotties/system.lottie',
      title: 'features.connected.title',
      description: 'features.connected.description',
      rgbColor: '167,139,250',
      delay: 200
    },
    {
      lottieFile: 'lotties/secure.lottie',
      title: 'features.secure.title',
      description: 'features.secure.description',
      rgbColor: '196,181,253',
      delay: 300
    }
  ]

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId)
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      import('@lottiefiles/dotlottie-wc')
    }
  }
}
