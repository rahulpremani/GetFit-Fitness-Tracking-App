import { TestBed, async, inject } from '@angular/core/testing';

import { DashboardReloadGuard } from './dashboard-reload.guard';

describe('DashboardReloadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardReloadGuard]
    });
  });

  it('should ...', inject([DashboardReloadGuard], (guard: DashboardReloadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
