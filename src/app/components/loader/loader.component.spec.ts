import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { LoaderService } from 'src/app/services/loader/loader.service';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let service: LoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LoaderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a randomic gif', () => {
    component["randomGif"]();

    expect(component["gifSelected"]).not.toBeFalse();
  });

  it('should call randomGif and set isLoading to true', () => {
    const spy = spyOn<any>(component, "randomGif");
    
    service.show();

    expect(spy).toHaveBeenCalled();
    expect(component["isLoading"]).toBeTrue();
  });

  it('should not call randomGif and set isLoading to false', () => {
    const spy = spyOn<any>(component, "randomGif");
    
    service.hide();

    expect(spy).not.toHaveBeenCalled();
    expect(component["isLoading"]).toBeFalse();
  });
});
