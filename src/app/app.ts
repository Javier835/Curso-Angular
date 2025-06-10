import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app/helpers/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  routes: Array<any> = routes

}
 