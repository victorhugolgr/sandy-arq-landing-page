import { Component } from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {MasterheadComponent} from './masterhead/masterhead.component';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './service/service.component';

@Component({
  selector: 'app-main',
  imports: [NavigationComponent, MasterheadComponent, AboutComponent, ServiceComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
