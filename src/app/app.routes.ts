import { Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'personajes', pathMatch: 'full' }, 
  { path: 'personajes', component: PersonajesComponent },
  { path: 'formulario', component: FormularioComponent }
];
