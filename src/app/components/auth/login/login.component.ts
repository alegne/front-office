import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


export interface Login {
	email: string;
	password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	imgBack = '../../../../assets/images/background/lili.png';
	logo = '../../../../assets/images/ENI/logo-ENl.png';

	login: Login = {
		email: '',
		password: ''
	};

	signin: FormGroup;
	hide = true;

  constructor(public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initSignIn();
  }

  initSignIn() {
	this.signin = this.formBuilder.group(
		{
      email: ['', [Validators.email, Validators.required ]],
      password: ['', [Validators.required]]
    });
  }

  get emailInput() { return this.signin.get('email'); }
	get passwordInput() { return this.signin.get('password'); }

	goToHome() {}

	goToForgotPassword() {}

	goToHowWork() {}

	signUp() {}

	onConnect() {
		const signinValue = this.signin.value;
		console.log(signinValue);
	}

}
