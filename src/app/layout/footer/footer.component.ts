import { ConfigurationsService } from './../../services/configurations/configurations.service';
import { HeaderService } from './../../services/Header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router : Router, public headerService: HeaderService, private confService: ConfigurationsService) { }

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

}
