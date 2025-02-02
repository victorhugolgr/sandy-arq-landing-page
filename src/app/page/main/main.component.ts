import { Component } from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {MasterheadComponent} from './masterhead/masterhead.component';

@Component({
  selector: 'app-main',
  imports: [NavigationComponent, MasterheadComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
