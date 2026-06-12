import { Routes } from '@angular/router';
import { AltaComponent } from './controller/alta/alta.component';
import { AlumnosCursoComponent } from './controller/alumnos-curso/alumnos-curso.component';
import { FavoritosComponent } from './controller/favoritos/favoritos.component';

export const routes: Routes = [{
    path: "alta/:textoBoton",
    component: AltaComponent
  },
  {
    path: "alumnosCurso",
    component: AlumnosCursoComponent
  },
  {
    path: "favoritos",
    component: FavoritosComponent
  }
  ];
