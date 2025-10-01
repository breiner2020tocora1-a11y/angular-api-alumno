import { Routes } from '@angular/router';
import { Alumno } from './alumno/alumno';
import { Login } from './login/login';
import { ApiComponent } from './api/api.component';

export const routes: Routes = [

  { path: '', redirectTo: 'alumno/123/juan', pathMatch: 'full' },
  { path: 'alumno/:id/:nombre', component: Alumno },
  { path: 'login', component: Login },
  { path: 'api', component: ApiComponent },
  { path: '**', redirectTo: 'alumno/123/juan' }
];
