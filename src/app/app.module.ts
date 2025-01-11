import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,  AppComponent,
    SidebarComponent,CommonModule,FormsModule
  ],
  providers: [
    provideRouter(routes)
  ]
 
})
export class AppModule { }
