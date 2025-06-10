import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-directivas-estructurales',
  imports: [CommonModule],
  templateUrl: './directivas-estructurales.html',
  styleUrl: './directivas-estructurales.css'
})
export class DirectivasEstructurales {

  //practica 1
  isVisible: boolean = false;

  changeIsVisible() {
    if (this.isVisible) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }

  //practica 2
  frutas: string[] = ["🍎 Manzana.", "🍌 Plátano.", "🍒 Cereza.", "🍑 Durazno.", "🍓 Fresa."];

  nuevaFruta(fruta: string){

    this.frutas.push(fruta);
    
  }

  //practica 3
  score: number = 75;

  setScore(value: number): void {
    this.score = value;
  }

  //practica 4
  usuarios = [
    {id: 1, nombre: "Javier", apellido: "De Paula", edad: 27, estado: true},
    {id: 2, nombre: "Rosmery", apellido: "Capellan", edad: 26, estado: true},
    {id: 3, nombre: "Zoe", apellido: "Capellan", edad: 3, estado: false},
    {id: 4, nombre: "Emilio", apellido: "Santana", edad: 26, estado: true},
    {id: 5, nombre: "Wilmin", apellido: "Mota", edad: 31, estado: false},
  ]

}
