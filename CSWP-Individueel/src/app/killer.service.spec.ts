import { TestBed } from '@angular/core/testing';

import { KillerService } from './killer.service';

describe('KillerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KillerService = TestBed.get(KillerService);
    expect(service).toBeTruthy();
  });
});
