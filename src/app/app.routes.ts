import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ImageComponent } from './image/image.component';
import { GraphComponent } from './graph/graph.component';


export const routes: Routes = [

    { path: 'chat', component: ChatComponent },
  { path: 'image', component: ImageComponent },
  { path: 'graph', component: GraphComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, 
];
