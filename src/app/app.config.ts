import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling, withViewTransitions
} from '@angular/router';

import {routes, serverRoutes} from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideServerRouting} from '@angular/ssr';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideServerRouting(serverRoutes), provideRouter( routes, inMemoryScrollingFeature, withViewTransitions()), provideClientHydration(withEventReplay())]
};
