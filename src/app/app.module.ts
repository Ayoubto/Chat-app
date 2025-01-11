import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,  AppComponent,
    SidebarComponent
  ]
 
})
export class AppModule { }
