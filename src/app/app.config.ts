// Set of config options available during the application bootstrap operation.
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

// import the router helper function
import { provideRouter } from '@angular/router';

// Configures Angular's HttpClient service to be available for injection.
import { provideHttpClient, withFetch } from '@angular/common/http';

// import the animation function
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// import the routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
   providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      // sets up providers necessary to enable Router functionality for the application
      provideRouter(routes),
      //  enable animations in an application
      provideAnimationsAsync(),
      // Configures Angular's HttpClient service to be available for injection. - NOT CURRENTLY USED!
      provideHttpClient(withFetch()),
   ],
};
