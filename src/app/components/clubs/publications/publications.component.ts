import { LoadingService } from './../../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { Article, Club, ClubsService } from 'src/app/services/clubs/clubs.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss', './../../director-word/responsive.css']
})
export class PublicationsComponent implements OnInit {
  pubs: Article[] = [];
  pubsTmp: Article[] = [];
  defaultImg = "./../../../../assets/images/background/Anon151-Boundless-Banner-hd.jpg";

  four_actu: Article[];
  last_actus: Article[];

  nbPagination: number[] = [];
  currentPagination = 1;
  minPagination = 1;
  maxPagination = 9;

  clubs: Club[] = [];


  selected = "all";

  constructor(private clubService: ClubsService, private loadService: LoadingService) { }

  ngOnInit() {
    this.loadService.load(true);
    this.getPublications();
    this.getClubs();
  }

  onChange(value) {
    this.loadService.load(true);
    this.pubs = [];
    this.selected = value;
    if (value == "all") {
      this.pubs = this.pubsTmp;
    } else {
      this.pubsTmp.forEach(element => {
        if (element.club == value) {
          this.pubs.push(element);
        }
      });
    }
    this.nbPagination = [];
    this.initPagination();
    this.four_actu =  this.pubs.slice(0 , 9);
    this.last_actus = this.pubs.slice(this.minPagination, this.maxPagination);
    this.loadService.load(false);
  }

  initPagination() {
    let nb: number = this.pubs.length;
    let nbTmp = nb / 9;
    nb = Math.ceil(nbTmp);
    for (let index = 0; index < nb; index++) {
      this.nbPagination.push(index+1);
    }
  }

  page(page: number) {
    this.minPagination = (9 * page) - 9;
    this.maxPagination = this.minPagination + 9;
    if (this.minPagination > this.pubs.length) {
      return false;
    }
    this.currentPagination = page;
    this.four_actu = this.pubs.slice(this.minPagination, this.maxPagination);
    this.slideTop();
  }

  slideTop() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#top-row").offset().top
    }, 200);
  }

  getPublications() {
    this.clubService.getPublications().subscribe(
      (data: any) => {
        let list: any[] = data.data;
        list.forEach((element, index) => {
          if (element.image == null) {
            element.image = this.defaultImg;
        }
        // if (element.galerie == null) {
        //   element.galerie = [];
        //   for (let index = 0; index < 3; index++) {
        //     let ind = index + 1;
        //     let url = "./../../../assets/images/course/" + ind +".jpg"
        //     element.galerie.push(url);
        //   }
        // }
        element.date_creation = this.changeDate(element.date_creation, false);
        element.date_mise_jour = this.changeDate(element.date_mise_jour, true);
      });
      this.pubs = list;
      this.pubsTmp = list;
        console.log(this.pubs);
        this.initPagination();
        this.four_actu =  this.pubs.slice(0 , 9);
        this.last_actus = this.pubs.slice(this.minPagination, this.maxPagination);
        this.loadService.load(false);
      }, (err) => {
        console.log(err);
        this.loadService.load(false);
      }
    )
  }

  changeDate(data, isFull: boolean) {
    let annee = data.substring(0,4);
    let mois = data.substring(5,7);
    let jour = data.substring(8,10);
    let heure =  data.substring(11,16);
    if (isFull) {
      var newDate = jour +  " " + this.voirMoisFull(mois) + " " + annee;
    } else {
      var newDate = jour +  " " + this.voirMois(mois) + " " + annee;

    }
    return newDate;
  }

  voirMois(mois) {
    let newMois = "";
    switch(mois) {
      case "01" : {
        newMois = "Jan";
        break;
      }
      case "02" : {
        newMois = "Fev";
        break;
      }
      case "03" : {
        newMois = "Mar";
        break;
      }
      case "04" : {
        newMois = "Avr";
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
        newMois = "Juil";
        break;
      }
      case "08" : {
        newMois = "Août";
        break;
      }
      case "09" : {
        newMois = "Sept";
        break;
      }
      case "10" : {
        newMois = "Oct";
        break;
      }
      case "11" : {
        newMois = "Nov";
        break;
      }
      case "12" : {
        newMois = "Déc";
        break;
      }
    }
    return newMois;
  }

  voirMoisFull(mois) {
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


  getClubs() {
    this.clubService.getClubs().subscribe(
      (data: any) => {
        let tmp = data.data;
        this.clubs = tmp;
        console.log(this.clubs);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
