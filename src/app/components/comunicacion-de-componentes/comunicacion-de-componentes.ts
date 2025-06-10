import { Component, input } from '@angular/core';
import { Message } from './message/message';
import { ColorBox } from './color-box/color-box';
import { AlertButton } from './alert-button/alert-button';
import { Counter } from './counter/counter';
import { CommonModule } from '@angular/common';
import { PrimeraPalabraPipe } from '../../pipe/primera-palabra-pipe';
import { ReverseTextPipe } from '../../pipe/reverse-text-pipe';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-comunicacion-de-componentes',
  imports: [Message,ColorBox,AlertButton,Counter,CommonModule, PrimeraPalabraPipe, ReverseTextPipe],
  templateUrl: './comunicacion-de-componentes.html',
  styleUrl: './comunicacion-de-componentes.css'
})
export class ComunicacionDeComponentes {
  
  //ejercicio 2
  colorCaja: string = '';

  setColor(newColor: string){
    this.colorCaja = newColor;
  }

  //ejercicio 3
  recibirAlerta(alerta: string) {
  alert(alerta);
  }

  //ejercicio 4
  counter: number = 0;

  updateCount(count: number) {
    console.log('Nuevo valor del contador:', count);
  }

  //ejercicio 5
  mensajes: string[] = [];

  setMensaje(mensaje: string){
    this.mensajes.push(mensaje);
  }

  //ejercicio 6
  palabra: string = '';

  primeraPalabra(palabra: string){

    this.palabra = palabra;
     
  }

  //ejercicio 6
  text: string = '';

  reversetext(text: string){

    this.text = text;
     
  }


}
