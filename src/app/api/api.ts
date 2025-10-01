import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Bienvenido 🚀</h1>
    <nav>
      <a routerLink="/alumno/1/Samir">Alumno</a> ||
      <a routerLink="/login">Login</a> |
      <a routerLink="/api">API</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class App {}
