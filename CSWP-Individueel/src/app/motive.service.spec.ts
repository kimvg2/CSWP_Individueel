import { TestBed } from '@angular/core/testing';

import { MotiveService } from './motive.service';

describe('MotiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotiveService = TestBed.get(MotiveService);
    expect(service).toBeTruthy();
  });
});
