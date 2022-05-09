import { TestBed } from '@angular/core/testing';

import { TrabsService } from './trabs.service';

describe('TrabsService', () => {
  let service: TrabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
