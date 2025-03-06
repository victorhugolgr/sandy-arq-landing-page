import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './project.component.scss'
})
export class ProjectComponent  implements OnInit {
  ngOnInit(): void {
  }


}
