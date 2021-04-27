import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


export interface Login {
  type: string;
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
    type: '',
		email: '',
		password: ''
	};

	signin: FormGroup;
	hide = true;
  isLogin: boolean = false;

  error = "";

  constructor(public router: Router, private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.initSignIn();
  }

  initSignIn() {
	this.signin = this.formBuilder.group(
		{
      type: ['', Validators.required],
      email: ['', [Validators.required ]],
      password: ['', [Validators.required]]
    });
  }

  get typeInput() {return this.signin.get('type');}
  get emailInput() { return this.signin.get('email'); }
	get passwordInput() { return this.signin.get('password'); }

	goToHome() {}

	goToForgotPassword() {}

	goToHowWork() {}

	signUp() {}

	async onConnect() {
    this.isLogin = true;
		const signinValue = this.signin.value;
    if (this.signin.invalid) {
      this.error = "Veuillez completer le formulaire";
      this.isLogin = false;
    }
    let type = signinValue['type'];
    let email = signinValue['email'];
    let password = signinValue['password'];
    this.loginService.login(type, email, password);
    await this.loginService.login(type, email, password).subscribe(
      (data: any) => {
        console.log(data);
        // if good
        // data = {ok, token, id, url}
        if (data) {
          if (data.ok == true) {
            let url = data.url + "/" + data.id + "/" + type + "/" + data.token;
            //console.log(url);
            window.location.href = url;
          } else if (data.ok == false) {
            this.isLogin = false;
            this.error = data.message;
          }
          else {
            this.error = data.message
          }
        }
      }, (error) => {
          this.error = "Une erreur est survenue"
          console.log(error);
      }
    )
	}

}
