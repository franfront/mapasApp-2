import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken =
  'pk.eyJ1IjoicHJhY3RpY2Fhbmd1bGFyIiwiYSI6ImNsZDB3ZHc5cjFwdmQzb21vZ3o2dm1xZzcifQ.1qvdj-l39BJQDY2pXc5b9A';

if (!navigator.geolocation) {
  alert('Geolocation is not supported by this browser.');
  throw new Error('Geolocation is not supported by this browser.');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
