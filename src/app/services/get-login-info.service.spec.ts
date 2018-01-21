import { TestBed, inject } from '@angular/core/testing';

import { GetLoginInfoService } from './login-info.service';

describe('GetLoginInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLoginInfoService]
    });
  });

  it('should be created', inject([GetLoginInfoService], (service: GetLoginInfoService) => {
    expect(service).toBeTruthy();
  }));
});
