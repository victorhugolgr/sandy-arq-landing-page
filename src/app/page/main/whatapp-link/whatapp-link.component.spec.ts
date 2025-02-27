import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatappLinkComponent } from './whatapp-link.component';

describe('WhatappLinkComponent', () => {
  let component: WhatappLinkComponent;
  let fixture: ComponentFixture<WhatappLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatappLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatappLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
