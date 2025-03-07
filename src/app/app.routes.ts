import { Routes } from '@angular/router';
import {MainComponent} from './page/main/main.component';
import {ProjectComponent} from './page/project/project.component';
import {ContactComponent} from './page/contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'contact', component: ContactComponent}
];
