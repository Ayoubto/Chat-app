import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { HeaderComponent } from './app/header/header.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(SidebarComponent)
  .catch(err => console.error(err));

  bootstrapApplication(HeaderComponent)
  .catch(err => console.error(err));

  bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)], // Utilisation correcte de 'routes'
  }).catch(err => console.error(err));
