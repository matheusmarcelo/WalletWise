import { TestBed } from '@angular/core/testing';

import { ErrorMessageService } from './error-message.service';

describe('ErrorMessageService', () => {
  let service: ErrorMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit an error message when setErrorMessage is called', (done) => {
    const testMessage = 'An error occurred';

    service.error$.subscribe(message => {
      expect(message).toBe(testMessage);
      done();
    });

    service.setErrorMessage(testMessage);
  });

  it('should handle multiple error messages in sequence', (done) => {
    const messages = ['Error 1', 'Error 2', 'Error 3'];
    let messageIndex = 0;

    service.error$.subscribe(message => {
      expect(message).toBe(messages[messageIndex]);
      messageIndex++;

      if (messageIndex === messages.length) {
        done();
      }
    });

    messages.forEach(msg => service.setErrorMessage(msg));
  });
});
