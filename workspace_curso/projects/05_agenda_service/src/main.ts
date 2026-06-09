import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { Agenda } from './app/controller/agenda/agenda';

bootstrapApplication(Agenda, appConfig).catch((err) => console.error(err));
