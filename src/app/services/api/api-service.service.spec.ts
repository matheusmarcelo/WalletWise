import { TestBed } from '@angular/core/testing';

import { ApiService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be a string', () => {
    const endpoint = "tests";
    expect(service.getEndpoint(endpoint)).toBe("http://localhost:3000/tests");
  });
});
