import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import routeConfig from './app/routes';

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: 'ROUTES', useValue: routeConfig } 
  ]
}).catch(err => console.error(err));