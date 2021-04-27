import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  submitted = false;
  modalSpin: boolean = false;

  email = "";
  objet = "";
  message = "";

  endpoint = environment.endpoint;

  constructor(private formBuilder : FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      objet :['',Validators.required],
    //   numeroUser: ['',[Validators.required, Validators.pattern(/^(?=\D*\d).{12,13}$/)]],
      // numero: ['',[Validators.pattern(/^(?=\D*\d).{2}\s(?=\D*\d).{2,3}\s(?=\D*\d).{2,3}\s(?=\D*\d).{2,3}$/)]],
      message: ['',Validators.required]
    })
   }

  ngOnInit() {
  }

  get form() {return this.contactForm.controls}

  openConfirm() {
    this.submitted = true
    this.modalSpin = true;
    if(this.contactForm.invalid){
      this.modalSpin = false;
      return;
    }
    window.scroll(0,0);
    let data = this.contactForm.value;
    this.postMessage(data.email, data.objet, data.message);
  }

  postMessage(email: string, objet: string, message: string) {
    let options = {
      "email" : email,
      "objet" : objet,
      "message": message,
      "telephone": " "
    };
    const headers: any = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(`${this.endpoint}/newsletter`, options, headers).subscribe(
      (data) => {
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
    this.email = "";
    this.objet = "";
    this.message = "";
  }
}
