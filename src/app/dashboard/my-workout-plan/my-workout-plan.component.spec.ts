import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkoutPlanComponent } from './my-workout-plan.component';

describe('MyWorkoutPlanComponent', () => {
  let component: MyWorkoutPlanComponent;
  let fixture: ComponentFixture<MyWorkoutPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkoutPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkoutPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
