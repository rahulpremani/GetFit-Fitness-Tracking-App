import { TestBed } from '@angular/core/testing';

import { UpdateDetailsService } from './update-details.service';

describe('UpdateDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateDetailsService = TestBed.get(UpdateDetailsService);
    expect(service).toBeTruthy();
  });
});
