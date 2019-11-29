import { TestBed } from '@angular/core/testing';

import { WorkoutFormService } from './workout-form.service';

describe('WorkoutFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkoutFormService = TestBed.get(WorkoutFormService);
    expect(service).toBeTruthy();
  });
});
