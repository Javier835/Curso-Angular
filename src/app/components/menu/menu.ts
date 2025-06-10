import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routes } from '../../helpers/routes';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  routes: Array<any> = routes

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
