import {Component} from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {MasterheadComponent} from './masterhead/masterhead.component';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './service/service.component';
import {ProjectComponent} from './project/project.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {WhatappLinkComponent} from './whatapp-link/whatapp-link.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [NavigationComponent, MasterheadComponent, AboutComponent, ServiceComponent, ProjectComponent,  ContactUsComponent, WhatappLinkComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
