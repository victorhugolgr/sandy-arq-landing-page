import { Routes } from '@angular/router';
import {MainComponent} from './page/main/main.component';
import {ProjectComponent} from './page/project/project.component';
import {ContactComponent} from './page/contact/contact.component';
import {ProjectCommercialComponent} from './page/project-commercial/project-commercial.component';
import {RenderMode, ServerRoute} from '@angular/ssr';

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'projects-commercial', component: ProjectCommercialComponent },
  { path: 'projects', component: ProjectComponent},
  { path: 'contact', component: ContactComponent}

];

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender},
  { path: 'projects-commercial', renderMode: RenderMode.Prerender },
  { path: 'projects', renderMode: RenderMode.Prerender},
  { path: 'contact', renderMode: RenderMode.Prerender}

];
