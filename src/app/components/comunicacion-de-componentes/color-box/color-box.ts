import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  imports: [],
  templateUrl: './color-box.html',
  styleUrl: './color-box.css'
})
export class ColorBox {
    @Input() color: string = '';
}
