import { TestBed, inject } from '@angular/core/testing';

import { GetCommentsService } from './get-comments.service';

describe('GetCommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCommentsService]
    });
  });

  it('should be created', inject([GetCommentsService], (service: GetCommentsService) => {
    expect(service).toBeTruthy();
  }));
});
