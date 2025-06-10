import { CommonModule } from '@angular/common';
import { TypeofExpression } from '@angular/compiler';
import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-interpolacion',
  imports: [CommonModule],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css'
})
export class Interpolacion {

  //ejercicio 1
  wlcomeMessage: string = "Bienvenidos a mi aplicación Angular."

  //ejercicio 2
  person = {
    name: 'Juan',
    age: 30
  };

  //ejercicio 3
  num1: number = 12;
  num2: number = 20;
  num3: number = 8;
  num4: number = 4;
  resta(): number{
    return this.num1-this.num2;
  }

  multiplicacion(){
    return this.num3*this.num4;
  }

  //ejercicio 4
  calculateArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
  }

  //ejercicio 5
  isLoggedIn: boolean = true;

  //ejercicio 6
  currentDate: Date = new Date();

}
