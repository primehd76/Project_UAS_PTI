import { TestBed } from '@angular/core/testing';

import { ChangeFlagService } from './change-flag.service';

describe('ChangeFlagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeFlagService = TestBed.get(ChangeFlagService);
    expect(service).toBeTruthy();
  });
});
