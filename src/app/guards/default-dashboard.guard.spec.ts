import { TestBed, async, inject } from '@angular/core/testing';

import { DefaultDashboardGuard } from './default-dashboard.guard';

describe('DefaultDashboardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultDashboardGuard]
    });
  });

  it('should ...', inject([DefaultDashboardGuard], (guard: DefaultDashboardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
