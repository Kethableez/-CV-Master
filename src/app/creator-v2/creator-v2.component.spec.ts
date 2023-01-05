import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorV2Component } from './creator-v2.component';

describe('CreatorV2Component', () => {
  let component: CreatorV2Component;
  let fixture: ComponentFixture<CreatorV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
