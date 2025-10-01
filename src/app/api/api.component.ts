import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>API</h1>
    <p>
      <a routerLink="/alumno/123/juan">Alumno</a> | 
      <a routerLink="/login">Login</a> | 
      <a routerLink="/api">API</a>
    </p>
    <hr>
    <h2>Usuarios desde API</h2>

    <ul>
      <li *ngFor="let user of users">
        <strong>{{ user.id }} - {{ user.name }}</strong>
        <!-- Botón para mostrar/ocultar -->
        <button (click)="toggleDetalles(user.id)">
          {{ user.mostrar ? 'Ocultar' : 'Ver API' }}
        </button>

        <!-- Detalles visibles solo si mostrar = true -->
        <div *ngIf="user.mostrar" style="margin-left: 20px;">
           {{ user.email }} <br>
           {{ user.phone }} <br>
           {{ user.company?.name }} <br>
           {{ user.address?.city }}, {{ user.address?.street }} ({{ user.address?.zipcode }})
        </div>
      </li>
    </ul>
  `
})
export class ApiComponent {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        
        this.users = data.map(user => ({ ...user, mostrar: false }));
      });
  }

  toggleDetalles(id: number): void {
    const user = this.users.find(u => u.id === id);
    if (user) {
      user.mostrar = !user.mostrar;
    }
  }
}
