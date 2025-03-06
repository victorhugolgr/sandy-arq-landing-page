import { Routes } from '@angular/router';
import {MainComponent} from './page/main/main.component';
import {ProjectComponent} from './page/project/project.component';

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'projects', component: ProjectComponent}
];
