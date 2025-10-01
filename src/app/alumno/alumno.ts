import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Este es el id: {{ dato }}</p>
    <p>Este es el nombre: {{ dato2 }}</p>
  `,
  styleUrl: './alumno.css'
})
export class Alumno implements OnInit {
  dato: string | null = null;
  dato2: string | null = null;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe(param => {
      this.dato = param['id'] || null;
      this.dato2 = param['nombre'] || null;
    });
  }
}