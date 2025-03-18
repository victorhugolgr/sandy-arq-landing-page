import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCommercialComponent } from './project-commercial.component';

describe('ProjectCommercialComponent', () => {
  let component: ProjectCommercialComponent;
  let fixture: ComponentFixture<ProjectCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCommercialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
