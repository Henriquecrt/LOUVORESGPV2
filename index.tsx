
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './src/app.component';
import { provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './src/app.routes';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
}).catch((err) => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
