import { TestBed, async, inject } from '@angular/core/testing';

import { ResetPasswordGuard } from './reset-password.guard';

describe('ResetPasswordGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetPasswordGuard]
    });
  });

  it('should ...', inject([ResetPasswordGuard], (guard: ResetPasswordGuard) => {
    expect(guard).toBeTruthy();
  }));
});
