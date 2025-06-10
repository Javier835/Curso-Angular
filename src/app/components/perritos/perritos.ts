// import { Component,OnInit } from '@angular/core';
// import { PerritosService } from '../../services/perritos.service';
// import { CommonModule } from '@angular/common';
// import { Menu } from '../menu/menu';
// import { Footer } from '../footer/footer';


// @Component({
//   selector: 'app-perritos',
//   imports: [CommonModule],
//   templateUrl: './perritos.html',
//   styleUrl: './perritos.css'
// })
// export class Perritos implements OnInit{
//   imagenPerrito: string | null = null;

//   constructor(private perritosService: PerritosService) {}

//   ngOnInit(): void {
//     this.obtenerImagenPerrito();
//   }

//   obtenerImagenPerrito(): void {
//     this.perritosService.getImgPerritos().subscribe({
//       next: (data) => {
//         this.imagenPerrito = data.message;
//       },
//       error: (err) => {
//         console.error('Error al obtener la imagen del perrito', err);
//       }
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { PerritosService } from '../../services/perritos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perritos',
  imports: [CommonModule],
  templateUrl: './perritos.html',
  styleUrl: './perritos.css'
})
export class Perritos implements OnInit {
  imagenPerrito: string | null = null;

  nombrePerrito: string = '';
  edadPerrito: number = 0;
  razaPerrito: string = '';

  nombres = ['Luna', 'Max', 'Rocky', 'Bella', 'Toby', 'Nala', 'Simba', 'Coco', 'Chispa'];
  razas = ['Labrador', 'Poodle', 'Golden Retriever', 'Beagle', 'Dachshund', 'Husky', 'Border Collie'];

  constructor(private perritosService: PerritosService) {}

  ngOnInit(): void {
    this.obtenerImagenPerrito();
  }

  obtenerImagenPerrito(): void {
    this.perritosService.getImgPerritos().subscribe({
      next: (data) => {
        this.imagenPerrito = data.message;
        this.generarDatosPerrito();
      },
      error: (err) => {
        console.error('Error al obtener la imagen del perrito', err);
      }
    });
  }

  generarDatosPerrito(): void {
    this.nombrePerrito = this.nombres[Math.floor(Math.random() * this.nombres.length)];
    this.razaPerrito = this.razas[Math.floor(Math.random() * this.razas.length)];
    this.edadPerrito = Math.floor(Math.random() * 10) + 1; // 1 a 10 años
  }
}

