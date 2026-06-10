import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { BuscarController } from './app/controller/buscar-controller/buscar-controller';
import { AltaController } from './app/controller/alta-controller/alta-controller';
import { MenuController } from './app/controller/menu-controller/menu-controller';

bootstrapApplication(MenuController, appConfig).catch((err) => console.error(err));
