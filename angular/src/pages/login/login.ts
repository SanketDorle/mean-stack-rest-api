import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.html'
})
export class LoginPage {
  form: FormGroup;
  error = ''
  constructor(private router: Router, private formBuilder: FormBuilder, public http: HttpClient) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required, Validators['email']])],
      password: [null, Validators.required],
    });
  }
  login() {
    this.error = '';
    var value = this.form.value
    var loginData = {
      username: value.username,
      password: value.password
    };
    this.http.post('http://localhost:3000/login',loginData).subscribe((data: any) => {
      // data = data ? data.json() : '';
      console.log(data);
      if (data.success) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.error = data.error;
      }
    }, (err) => {
      console.error(err);
    });
  }	
}
