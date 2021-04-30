import { LoadingService } from './../../services/loading/loading.service';
import { Router } from '@angular/router';
import { Actu, Actuality, NewsService } from './../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: [
    './news.component.scss',
    './../director-word/color.css',
    './../director-word/responsive.css'
  ]
})
export class NewsComponent implements OnInit {
  actuality: Actu[] = [];
  actualities: Actu[];
  noActu = false;
  constructor(public newsService: NewsService, private router: Router,
    private loadSrv: LoadingService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.actualities = this.newsService.actus;
    this.getTopActus();
    //this.initLastActuality();
  }

  initLastActuality() {
    if(this.actualities.length == 0) {
      this.noActu = true;
      return false;
    }
    for (let index = 0; (index < this.actualities.length) && (index < 3); index++) {
        this.actuality.push(this.actualities[index]);
    }
  }

  allNews() {
    this.router.navigate(['/actualités']);
  }

  seeActu(titre, date, posteur) {
    let str = "/evenements/" + titre + "/" + date + "/" + posteur+ "";
    this.router.navigateByUrl(str);
  }

  async getTopActus() {
    this.loadSrv.load(true);
    await this.newsService.getTopActualite().subscribe(
            (data: any) => {
              let list: any[] = data.data;
              list.forEach((element, index) => {
                if (element.image == null) {
                  let indice = index + 1;
                  let url = "./../../../assets/images/course/" + indice +".jpg";
                  element.image = url;
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
            this.actuality = list;
            if(this.actualities.length == 0) {
              this.noActu = true;
            } else {
              this.noActu = false;
            }
            //console.log(this.actuality);
            }, (err) => {
              this._snackBar.open(`Serveur inacessible`, "", {
                duration: 1500,
                horizontalPosition: "right",
                verticalPosition: "bottom",
                panelClass: ["error_snackbar"]
              });
              this.noActu = true;
              console.log(err);
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
