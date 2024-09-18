import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
  @Input() screen: 'WEB' | 'TABLET' | "PHONE" = 'WEB';
}
