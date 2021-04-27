import { environment } from 'src/environments/environment';
import { ConfigurationsService } from './../../services/configurations/configurations.service';
import { HeaderService } from './../../services/Header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    './../../components/director-word/color.css',
    './../../components/director-word/responsive.css'
  ]
})
export class FooterComponent implements OnInit {
  logo = "./../../../assets/images/ENI/logo-ENl.png";
  menu = null;
  facebook = "";
  youtube = "";
  twitter = "";
  instagram = "";
  telephone = "+261 34 05 733 36";
  callPhone = "tel:+261 34 05 733 36";
  email = "eni@univ-fianar.mg";
  adresse = "MADAGASCAR";
  site = "www.univ-fianar.mg/";

  emailNewsletter = "";

  endpoint = environment.endpoint;
  constructor(private router : Router,
    public headerService: HeaderService,
    private confService: ConfigurationsService,
    private http: HttpClient) { }

  ngOnInit() {
    this.menu = this.headerService.menu;
    this.getConf();
  }

  home() {
    this.router.navigateByUrl("/");
  }

  getConf() {
    this.confService.getConfigurations().subscribe(
      (data: any[]) => {
        // console.log(data);
        data.forEach(el => {
          if (el.cle == "lien_facebook") this.facebook = el.valeur;
          if (el.cle == "lien_twitter") this.twitter = el.valeur;
          if (el.cle == "lien_youtube") this.youtube = el.valeur;
          if (el.cle == "lien_instagram") this.instagram = el.valeur;
          if (el.cle == "email") this.email = el.valeur;
          if (el.cle == "adresse") this.adresse = el.valeur;
          if (el.cle == "lien_site") this.site = el.valeur;
          if (el.cle == "telephone") {
            this.telephone = el.valeur;
            this.callPhone = "tel:" + el.valeur;
          }
        });
        return data;
      }, err => {
        console.log(err);
      }
    )
  }

  newsletter() {
    console.log(this.emailNewsletter);
    if (this.emailNewsletter == " " || this.emailNewsletter == "") {
      return;
    }

    if (!this.emailNewsletter.includes("@") || !this.emailNewsletter.includes(".")) {
      document.getElementById("mc-email").style.color = "red";
      return;
    } else {
      document.getElementById("mc-email").style.color = "black";
    }
    let options = {
      "email"        : this.emailNewsletter,
    };
    const headers: any = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(`${this.endpoint}/newsletter`, options, headers).subscribe(
      (data) => {
        console.log(data);
        this.emailNewsletter = "";
      }, err => {
        console.log(err);
      }
    )
  }
}
