import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { HeaderComponent } from './app/header/header.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { importProvidersFrom } from '@angular/core'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Fournit les routes
    importProvidersFrom(FormsModule), // Importer FormsModule via providers
    ...appConfig.providers, // Autres providers globaux
  ],
}).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(SidebarComponent)
  .catch(err => console.error(err));

  bootstrapApplication(HeaderComponent)
  .catch(err => console.error(err));

  bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)], // Utilisation correcte de 'routes'
  }).catch(err => console.error(err));
