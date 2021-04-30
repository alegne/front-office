import { LoadingService } from './../../services/loading/loading.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  submitted: boolean = false;

  email = "";
  objet = "";
  message = "";
  telephone = "";

  endpoint = environment.endpoint;

  constructor(private formBuilder : FormBuilder, private http: HttpClient,
    private _snackBar: MatSnackBar, private loadSrv: LoadingService) {
    this.contactForm = this.formBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      objet :['',Validators.required],
    //   numeroUser: ['',[Validators.required, Validators.pattern(/^(?=\D*\d).{12,13}$/)]],
      // numero: ['',[Validators.pattern(/^(?=\D*\d).{2}\s(?=\D*\d).{2,3}\s(?=\D*\d).{2,3}\s(?=\D*\d).{2,3}$/)]],
      message: ['',Validators.required],
      telephone: ['',Validators.required],
    })
   }

  ngOnInit() {
    $('#frame_id').on('load', () => {
      setTimeout(
        () => {
          $("#progress-man").hide();
        }, 2000
      );
    });
  }

  get form() {return this.contactForm.controls}

  openConfirm() {
    this.submitted = true;

    if(this.contactForm.invalid){
      return;
    }
    // window.scroll(0,0);
    let data = this.contactForm.value;
    this.postMessage(data.email, data.objet, data.message, data.telephone);
  }

  postMessage(email: string, objet: string, message: string, telephone: string) {
    this.loadSrv.load(true);
    let options = {
      "email" : email,
      "objet" : objet,
      "message": message,
      "telephone": telephone,
    };
    const headers: any = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(`${this.endpoint}/messages`, options, headers).subscribe(
      (data: any) => {
        // console.log(data);
        if (data.message == "sucess") {
          this._snackBar.open(`Message envoyé !`, "", {
            duration: 1500,
            horizontalPosition: "right",
            verticalPosition: "bottom",
            panelClass: ["success_snackbar"]
        });
        this.email = "";
        this.objet = "";
        this.message = "";
        this.telephone = "";
        } else {
          this._snackBar.open("Veuillez réessayer plustard","", {
            duration: 1500,
            horizontalPosition: "right",
            verticalPosition: "bottom",
            panelClass: ["info_snackbar"]
        });
      }
      this.loadSrv.load(false);
      this.submitted = false;

    }, err => {
      this._snackBar.open(`Une erreur est survenue`, "", {
        duration: 1500,
        horizontalPosition: "right",
        verticalPosition: "bottom",
        panelClass: ["error_snackbar"]
      });
        this.loadSrv.load(false);
        console.log(err);
      }
    );
      this.submitted = false;
  }
}
