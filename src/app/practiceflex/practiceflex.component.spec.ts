import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeflexComponent } from './practiceflex.component';

describe('PracticeflexComponent', () => {
  let component: PracticeflexComponent;
  let fixture: ComponentFixture<PracticeflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeflexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
