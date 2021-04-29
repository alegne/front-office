import { TestBed } from '@angular/core/testing';

import { ClubsService } from './clubs.service';

describe('ClubsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubsService = TestBed.get(ClubsService);
    expect(service).toBeTruthy();
  });
});
