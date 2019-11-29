import { TestBed, async, inject } from '@angular/core/testing';

import { FreezeBackGuard } from './freeze-back.guard';

describe('FreezeBackGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FreezeBackGuard]
    });
  });

  it('should ...', inject([FreezeBackGuard], (guard: FreezeBackGuard) => {
    expect(guard).toBeTruthy();
  }));
});
