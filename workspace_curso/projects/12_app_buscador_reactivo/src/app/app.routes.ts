import { Routes } from '@angular/router';
import { AltaController } from './controller/alta-controller/alta-controller';
import { BuscarController } from './controller/buscar-controller/buscar-controller';

export const routes: Routes = [
  {
    path:"alta",
    component:AltaController
  },
  {
    path:"buscar",
    component:BuscarController
  }
];
