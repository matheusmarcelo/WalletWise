import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with loading as false', (done) => {
    service.isLoading$.subscribe(value => {
      expect(value).toBeFalse();
      done();
    });
  });

  it('should set loading to true when show is called', (done) => {
    service.show();
    service.isLoading$.subscribe(value => {
      expect(value).toBeTrue();
      done();
    });
  });

  it('should set loading to false when hide is called', (done) => {
    service.show(); // Primeiro, altera o valor para true
    service.hide();
    service.isLoading$.subscribe(value => {
      expect(value).toBeFalse();
      done();
    });
  });
});
