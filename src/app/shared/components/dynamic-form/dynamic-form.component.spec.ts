import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("shoul be an array of FormField", () => {
    component.fields = [
      { name: 'firstName', type: "text", width: "w-full", validators: [] },
      { name: 'email', type: "email", width: "w-full", validators: [] },
    ];

    const isFormFieldArray = component.fields.every(field => {
      return typeof field.name === 'string' &&
      typeof field.type === 'string' &&
      typeof field.width === 'string' &&
      Array.isArray(field.validators);
    });

    expect(Array.isArray(component.fields)).toBeTruthy();
    expect(isFormFieldArray).toBeTrue();
  });

  it("should call createForm on ngOnInit", () => {
    const spy = spyOn<any>(component, "createForm");
    
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should create the form with the fields provided', () => {
    component.fields = [
      { name: 'firstName', type: "text", width: "w-full", validators: [] },
      { name: 'email', type: "email", width: "w-full", validators: [] },
    ];

    component.formData = { firstName: 'John', email: 'john@example.com' };

    component.ngOnInit();

    expect(component["form"].contains('firstName')).toBeTrue();
    expect(component["form"].contains('email')).toBeTrue();

    expect(component["form"].get("firstName")?.value).toEqual("John");
    expect(component["form"].get("email")?.value).toEqual("john@example.com");
  });
});
