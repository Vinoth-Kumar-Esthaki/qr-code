import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qr-code';
  public qrForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.qrForm = this.fb.group({
      value: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      size: ['', Validators.compose([Validators.required, Validators.max(600)])]
    });
  }

}
