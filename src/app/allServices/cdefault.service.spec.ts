import { TestBed } from '@angular/core/testing';

import { CdefaultService } from './cdefault.service';

describe('CdefaultService', () => {
  let service: CdefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
