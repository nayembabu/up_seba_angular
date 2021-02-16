import { TestBed } from '@angular/core/testing';

import { CentryService } from './centry.service';

describe('CentryService', () => {
  let service: CentryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
