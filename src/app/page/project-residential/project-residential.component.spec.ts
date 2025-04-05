import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectResidentialComponent } from './project-residential.component';

describe('ProjectResidentialComponent', () => {
  let component: ProjectResidentialComponent;
  let fixture: ComponentFixture<ProjectResidentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectResidentialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
