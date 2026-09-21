import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'z-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {}
