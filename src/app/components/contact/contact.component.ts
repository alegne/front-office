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

  constructor(private formBuilder : FormBuilder) {
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

  async openConfirm(e): Promise<void> {

    this.submitted = true
    this.modalSpin = true;

    e.preventDefault();

    if(this.contactForm.invalid){
      console.log(this.contactForm.controls)
      this.modalSpin = false;
      return;
    }

    window.scroll(0,0);

    let data = this.contactForm.value
  }
}
