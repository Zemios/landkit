import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

export interface ProcessStep {
  number: string
  title: string
  description: string
  color: string
}

@Component({
  selector: 'z-process',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './process.html'
})
export class ProcessComponent {
  @Input() steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Descubrimiento',
      description: 'Análisis profundo de necesidades y definición de objetivos estratégicos.',
      color: 'cyan'
    },
    {
      number: '02',
      title: 'Ingeniería',
      description: 'Desarrollo ágil con las tecnologías más avanzadas del mercado.',
      color: 'purple'
    },
    {
      number: '03',
      title: 'Evolución',
      description: 'Despliegue continuo y optimización basada en datos reales.',
      color: 'magenta'
    }
  ]
}
