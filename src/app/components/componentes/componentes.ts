import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Componente1 } from './componente1/componente1';
import { Componente2 } from './componente2/componente2';
import { Componente3 } from './componente3/componente3';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-componentes',
  imports: [CommonModule,Componente1,Componente2,Componente3],
  templateUrl: './componentes.html',
  styleUrl: './componentes.css'
})
export class Componentes {
  

}
