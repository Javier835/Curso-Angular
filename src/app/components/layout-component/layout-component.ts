import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout-component',
  imports: [CommonModule,RouterOutlet,Menu,Footer],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css'
})
export class LayoutComponent {

}
