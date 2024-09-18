import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PreviewComponent } from '../../components/preview/preview.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

interface Pages {
  name: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PreviewComponent, FormsModule, SelectButtonModule, ButtonModule, DropdownModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  value: any;

  justifyOptions: any[] = [
      { icon: 'pi pi-desktop', justify: 'desktop' },
      { icon: 'pi pi-tablet', justify: 'tablet' },
      { icon: 'pi pi-mobile', justify: 'mobile' },
  ];

  pages: Pages[] | undefined = [{ name: 'Página Inicial' }];

  selectedPages: Pages | undefined;
}
