import { TestBed } from '@angular/core/testing';

import { UpSettingService } from './upSetting.service';

describe('UpSettingService', () => {
  let service: UpSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
