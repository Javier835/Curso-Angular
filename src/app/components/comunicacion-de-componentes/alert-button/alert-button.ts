import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  imports: [],
  templateUrl: './alert-button.html',
  styleUrl: './alert-button.css'
})
export class AlertButton {
  @Output() alerta = new EventEmitter<string>();

  enviarAlerta(){
    this.alerta.emit('Hola desde el Hijo')
  }
 }
