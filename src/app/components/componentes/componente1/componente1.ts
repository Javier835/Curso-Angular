import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [CommonModule],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css'
})
export class Componente1 {
   mostrar: boolean = false;

  //metodo para mostrar alerta al hacer click en boton
  mostrarAlerta(){
    event?.preventDefault(); //prevenir el comportamiento por defecto en el método
    
    this.mostrar = true; //cambiar el valor de la bariable para mostrar mensaje
    
    //definir un tiempo para hacer que el valor de la variable mostrar pase a false y así deje de mostrarse el mensaje
    setTimeout(() => {this.mostrar = false;}, 3000);

  }
}
