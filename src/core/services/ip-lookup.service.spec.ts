import { TestBed } from '@angular/core/testing';

import { IpLookupService } from './ip-lookup.service';

describe('IpLookupService', () => {
  let service: IpLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
