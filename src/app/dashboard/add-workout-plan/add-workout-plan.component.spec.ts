import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkoutPlanComponent } from './add-workout-plan.component';

describe('AddWorkoutPlanComponent', () => {
  let component: AddWorkoutPlanComponent;
  let fixture: ComponentFixture<AddWorkoutPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkoutPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
