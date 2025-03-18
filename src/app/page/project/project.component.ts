import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  styleUrl: './project.component.scss'
})
export class ProjectComponent  implements OnInit {
  ngOnInit(): void {
  }


}
