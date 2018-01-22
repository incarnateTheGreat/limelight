import { TestBed, inject } from '@angular/core/testing';

import { GetAlbumsService } from './get-albums.service';

describe('GetAlbumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAlbumsService]
    });
  });

  it('should be created', inject([GetAlbumsService], (service: GetAlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
