import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'masterhead',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './masterhead.component.html',
  styleUrl: './masterhead.component.scss'
})
export class MasterheadComponent {

}
