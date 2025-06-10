import { Component,OnInit } from '@angular/core';
// import { PerritosService } from '../../services/perritos.service';
import { CommonModule } from '@angular/common';
import { Menu } from '../menu/menu';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-perritos',
  imports: [CommonModule],
  templateUrl: './perritos.html',
  styleUrl: './perritos.css'
})
export class Perritos /*implements OnInit*/{
  // imagenPerrito: string | null = null;

  // constructor(private perritosService: PerritosService) {}

  // ngOnInit(): void {
  //   this.obtenerImagenPerrito();
  // }

  // obtenerImagenPerrito(): void {
  //   this.perritosService.getImgPerritos().subscribe({
  //     next: (data) => {
  //       this.imagenPerrito = data.message; // "message" contiene la URL de la imagen
  //     },
  //     error: (err) => {
  //       console.error('Error al obtener la imagen del perrito', err);
  //     }
  //   });
  // }
}
