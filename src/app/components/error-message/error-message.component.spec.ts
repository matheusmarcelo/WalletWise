import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';
import { ErrorMessageService } from 'src/app/services/errorMessage/error-message.service';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let service: ErrorMessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageComponent],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ErrorMessageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showErrorMsg when error$ emits a message', () => {
      const testMessage: string = "Test error from service";

      spyOn(component, 'showErrorMsg');

      service.setErrorMessage(testMessage);

      service.error$.subscribe(message => {
        expect(message).toBe(testMessage);
      });
  
      expect(component.showErrorMsg).toHaveBeenCalledWith(testMessage);
  });

  it('should display error message and set showError to true', () => {
    const testMessage: string = "Test error message";

    component.showErrorMsg(testMessage);

    expect(component["errorMessage"]).toBe(testMessage);
    expect(component["showError"]).toBeTrue();
  });

  it('should display error message and set showError to true', fakeAsync(() => {
    const testMessage: string = "Test error message";

    component.showErrorMsg(testMessage);

    expect(component["errorMessage"]).toBe(testMessage);
    expect(component["showError"]).toBeTrue();
    tick(5000);
    expect(component["showError"]).toBeFalse();
  }));
});
