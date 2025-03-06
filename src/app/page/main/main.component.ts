import {Component} from '@angular/core';
import {MasterheadComponent} from './masterhead/masterhead.component';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './service/service.component';
import {ProjectComponent} from './project/project.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

@Component({
  selector: 'app-main',
  imports: [MasterheadComponent, AboutComponent, ServiceComponent, ProjectComponent,  ContactUsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
