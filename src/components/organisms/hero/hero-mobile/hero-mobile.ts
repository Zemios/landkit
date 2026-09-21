import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'z-hero-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero-mobile.html',
  styleUrls: ['./hero-mobile.css']
})
export class HeroMobileComponent {}
