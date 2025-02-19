import { Component } from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {MasterheadComponent} from './masterhead/masterhead.component';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './service/service.component';
import {ProjectComponent} from './project/project.component';
import {HowWorksComponent} from './how-works/how-works.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

@Component({
  selector: 'app-main',
  imports: [NavigationComponent, MasterheadComponent, AboutComponent, ServiceComponent, ProjectComponent, HowWorksComponent, ContactUsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
