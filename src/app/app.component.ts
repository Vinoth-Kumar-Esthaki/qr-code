import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qr-code';
  public qrForm: FormGroup;
  public value: string;
  public size: number;
  constructor(private fb: FormBuilder) {
    this.qrForm = this.fb.group({
      value: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      size: ['', Validators.compose([Validators.required, Validators.max(600)])]
    });
    this.value = '';
    this.size = 300;
  }


  onSubmit(): void {
    if (this.qrForm.valid) {
      const { value, size } = this.qrForm.value;
      this.value = value;
      this.size = size;
      console.log(value);

    }
  }

  errorHandling = (control: string, error: string) => {
    console.log(this.qrForm.controls[control].hasError(error));
    return this.qrForm.controls[control].hasError(error);
  }

  get url(): FormControl {
    return this.qrForm.get('value') as FormControl;
  }
  get dimension(): FormControl {
    return this.qrForm.get('size') as FormControl;
  }

}
