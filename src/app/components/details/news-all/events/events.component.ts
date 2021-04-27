import { AnnoncesService } from './../../../../services/annonces/annonces.service';
import { PopupEventComponent } from './../popup-event/popup-event.component';
import { Actuality, NewsService } from './../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ControlContainer } from '@angular/forms';
import { MatDialog } from '@angular/material';

interface Annonce {
  date_creation: string,
  date_mise_jour: string,
  description: string,
  galerie: string[],
  id: number,
  image: string,
  niveaux: string[],
  parcours: string[],
  titre: string,
  type: string
}


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  news : Annonce[];
  three_news: Annonce[];
  last_news: Annonce[];

  nbPagination: number[] = [];
  currentPagination = 1;
  minPagination = 3;
  maxPagination = 6;
  constructor(public newsService: NewsService, private dialog: MatDialog, private annonceService: AnnoncesService) { }

  ngOnInit() {
    this.getTopAnnonces();
    this.getAnnonces();
  }

  initPagination() {
    let nb: number = this.news.length;
    let nbTmp = nb / 3;
    nb = Math.ceil(nbTmp);
    nb = nb - 1; // remove the A la Une
    for (let index = 0; index < nb; index++) {
      this.nbPagination.push(index+1);
    }
  }

  page(page: number) {
    this.minPagination = 3 * page;
    this.maxPagination = this.minPagination + 3;
    if (this.minPagination > this.news.length) {
      return false;
    }
    this.currentPagination = page;
    this.last_news = this.news.slice(this.minPagination, this.maxPagination);
    // var scrollTo = $("#contain-other-intern");//#contain-other-intern
    // var container = $(".contain-other-com");
    // var position = scrollTo.offset().top - container.offset().top + container.scrollTop();
    // container.scrollTop(position);
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#contain-other-intern").offset().top - 200
    }, 500);
  }

  lire(annonce: Actuality) {
    let data = {
      titre: annonce.titre,
      description: annonce.description,
      date: annonce.date,
      posteur: annonce.posteur,
      image: annonce.image,
      galerie: annonce.galerie
    }
    const dialogRef = this.dialog.open(PopupEventComponent, {data});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getAnnonces() {
    this.annonceService.getAnnonces().subscribe(
      (data :any) => {
        let list: any[] = data.data;
        list.forEach(element => {
          element.date_creation = this.changeDate(element.date_creation);
          element.date_mise_jour = this.changeDate(element.date_mise_jour);
        });
        console.log(list);
        this.news = list;
        this.last_news = this.news.slice(this.news.length -3, this.news.length);
        this.initPagination();
      }, (err) => {
        console.log(err);
      }
    )
  }

  getTopAnnonces() {
    this.annonceService.getTopAnnonces().subscribe(
      (data :any) => {
        let list: any[] = data.data;
        list.forEach(element => {
          element.date_creation = this.changeDate(element.date_creation);
          element.date_mise_jour = this.changeDate(element.date_mise_jour);
        });
        console.log(list);
        this.three_news = list;

      }, (err) => {
        console.log(err);
      }
    )
  }

  changeDate(data) {
    let annee = data.substring(0,4);
    let mois = data.substring(5,7);
    let jour = data.substring(8,10);
    let heure =  data.substring(11,16);
    // console.log(jour +  " " + this.voirMois(mois) + " " + annee+ " à " + heure);
    var newDate = jour +  " " + this.voirMois(mois) + " " + annee + " à " + heure;
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
