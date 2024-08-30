import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from 'src/app/entities/formField/formField.interface';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FormField[] = [];
  @Input() formData: any = {};
  protected form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    const formGroup: { [key: string]: any } = {};
    this.fields.forEach(field => {
      formGroup[field.name] = [this.formData[field.name] || '', field.validators || []];
    });
    this.form = this.fb.group(formGroup);
  }
}
