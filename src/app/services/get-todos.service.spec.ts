import { TestBed, inject } from '@angular/core/testing';

import { GetTodosService } from './get-todos.service';

describe('GetTodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTodosService]
    });
  });

  it('should be created', inject([GetTodosService], (service: GetTodosService) => {
    expect(service).toBeTruthy();
  }));
});
