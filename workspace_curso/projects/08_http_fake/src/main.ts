import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { TypiController } from './app/controller/typi-controller/typi-controller';

bootstrapApplication(TypiController, appConfig).catch((err) => console.error(err));
