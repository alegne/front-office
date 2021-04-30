import { LoadingService } from './../../services/loading/loading.service';
import { Router } from '@angular/router';
import { NewsService, Actuality, Actu } from './../../services/news/news.service';
import { HeaderService } from './../../services/Header/header.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './header-style.css'
]
})
export class HeaderComponent implements OnInit {
  img1 = "./../../../assets/images/slider/1.jpg";
  img2 = "./../../../assets/images/slider/2.jpg";
  img3 = "./../../../assets/images/slider/3.jpg";
  logo = "./../../../assets/images/ENI/logo-ENl.png";

  news: Actu[] = [];

  menu = null;

  langues = [
    {
      libelle  : "Fr",
      flag : "./../../../assets/images/icones/france.png"
    },
    {
      libelle  : "Ang",
      flag : "./../../../assets/images/icones/royaume-uni.png"
    }
  ]

  defaultImg = "./../../../assets/images/slider/gasy1.png";
  image1 =  "./../../../assets/images/course/1.jpg";
  image2 =  "./../../../assets/images/course/2.jpg";
  image3 =  "./../../../assets/images/course/3.jpg";


  constructor(public headerService: HeaderService, public newsService: NewsService,
    private router: Router, private loadSrv: LoadingService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.menu = this.headerService.menu;
    // this.news = this.newsService.news.slice(0, 3);
    this.getTopNews();
  }

  seeNews(titre, date, posteur) {
    let str = "/evenements/nouvelles/" + titre + "/" + date + "/" + posteur+ "";
    console.log(str);
    this.router.navigateByUrl(str);
  }

  async getTopNews() {
    this.loadSrv.load(true);
    await this.newsService.getTopNouvelle().subscribe(
            (data: any) => {
              let list: any[] = data.data;
              list.forEach(element => {
                if (element.image == null) {
                  element.image = this.defaultImg;
              }
              if (element.galerie == null) {
                element.galerie = [];
                for (let index = 0; index < 3; index++) {
                  let ind = index + 1;
                  let url = "./../../../assets/images/course/" + ind +".jpg"
                  element.galerie.push(url);
                }
              }
              let isO : boolean = true;
              let isN : boolean = false;
              element.date_creation = this.changeDate(element.date_creation, isO);
              element.date_mise_jour = this.changeDate(element.date_mise_jour, isN);
            });
            console.log(list);
            this.news = list;
            }, (err) => {
              console.log(err);
              this._snackBar.open(`Serveur inacessible`, "", {
                duration: 1500,
                horizontalPosition: "right",
                verticalPosition: "bottom",
                panelClass: ["error_snackbar"]
              });
            }
    );
    this.loadSrv.load(false);
  }

  changeDate(data, isUpdate: boolean) {
    let annee = data.substring(0,4);
    let mois = data.substring(5,7);
    let jour = data.substring(8,10);
    let heure =  data.substring(11,16);
    if (isUpdate) {
      var newDate = jour +  " " + this.voirMois(mois) + " " + annee + " à " + heure;
    } else {
      var newDate = jour +  " " + this.voirMois(mois) + " " + annee;
    }
    return newDate;
  }


  voirMois(mois) {
    let newMois = "";
    switch(mois) {
      case "01" : {
        newMois = "Janvier";
        break;
      }
      case "02" : {
        newMois = "Février";
        break;
      }
      case "03" : {
        newMois = "Mars";
        break;
      }
      case "04" : {
        newMois = "Avril";
        break;
      }
      case "05" : {
        newMois = "Mai";
        break;
      }
      case "06" : {
        newMois = "Juin";
        break;
      }
      case "07" : {
        newMois = "Juillet";
        break;
      }
      case "08" : {
        newMois = "Août";
        break;
      }
      case "09" : {
        newMois = "Septembre";
        break;
      }
      case "10" : {
        newMois = "Octobre";
        break;
      }
      case "11" : {
        newMois = "Novembre";
        break;
      }
      case "12" : {
        newMois = "Décembre";
        break;
      }
    }
    return newMois;
  }

}
