import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.html'
})
export class RegisterPage {
  credentials: any = {
		username: '',
		firstname: '',
		lastname: '',
		password: ''
	};
	error = '';
	form: FormGroup;
	constructor(private router: Router, private formBuilder: FormBuilder, public http: HttpClient) { }
  ngOnInit() {
		this.form = this.formBuilder.group({
			username: [null, Validators.compose([Validators.required, Validators['email']])],
			password: [null, Validators.required],
			firstname: [null, Validators.required],
			lastname: [null, Validators.required]
		});
	}

	register() {
    var value = this.form.value
    var userData = {
      username: value.username,
      firstname: value.firstname,
      lastname: value.lastname,
      password: value.password
    };
    this.http.post('http://localhost:3000/register',userData).subscribe((data: any) => {
      console.log(data);
      if (data.success) {
        this.router.navigateByUrl('/login');
      } else {
        this.error = data.error;
      }
    }, (err) => {
      console.error(err);
    });
  }	
}
