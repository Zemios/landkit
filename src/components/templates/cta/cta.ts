import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'z-cta',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './cta.html'
})
export class CtaComponent {}
