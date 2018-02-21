import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.html'
})
export class LoginPage {
  form: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators['email']])],
      password: [null, Validators.required],
    });
  }
}
