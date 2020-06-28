import { TestBed } from '@angular/core/testing';

import { RuyaService } from './ruya.service';

describe('RuyaService', () => {
  let service: RuyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
