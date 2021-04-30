import { LoadingService } from './../../../../services/loading/loading.service';
import { Actuality, NewsService, Gallery, Actu } from './../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: [
    './actuality.component.scss',
    './../../../director-word/responsive.css'
  ]
})
@Pipe({
  name: 'sanitizeHtml'
})
export class ActualityComponent implements OnInit, PipeTransform {
  currentActu: Actu = {
    "id": 0,
    "slug": "",
    "titre": "",
    "posteur": "",
    "date_creation": "",
    "description": "",
    "image": "",
    "type": "",
    "date_mise_jour": "",
    "galerie": [""]
  };
  listActu: Actu[] = [];
  four_actu: Actu[];
  last_actus: Actu[];

  nbPagination: number[] = [];
  currentPagination = 1;
  minPagination = 1;
  maxPagination = 8;

  timerInterval: any;
  isNews = false;
  currentTitre = null;
  currentPosteur = null;
  currentDate = null;

  galleryOne : String[] = [];

  galleryTwo : String[] = [];

  galleryTmp : String[] = [];

  defaultImg = "./../../../../../assets/images/course/1.jpg";

  wys = "<p>Holla</p><h4>Mama</h4>&lt;";

  noNews = true;

  constructor(private newsService: NewsService,
    private activatedRoute : ActivatedRoute,
    private loadSrv: LoadingService,
    private _sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar) {
    let type : string = this.activatedRoute.snapshot.paramMap.get("type");
    let titre : string = this.activatedRoute.snapshot.paramMap.get("titre");
    let date : string = this.activatedRoute.snapshot.paramMap.get("date");
    let posteur : string = this.activatedRoute.snapshot.paramMap.get("posteur");
    if (type == "nouvelles" || type == "nouvelle" || type == "news" || type == "new"){
      this.isNews = true;
    } else {
      this.isNews = false;
    }

    if (titre && date && posteur) {
      this.currentTitre = titre;
      this.currentDate = date;
      this.currentPosteur = posteur;
    }
  }

  async ngOnInit() {
    // if (this.isNews) {
    //   this.listActu = this.newsService.news;
    // } else {
    //   this.listActu = this.newsService.actus;
    // }
    await this.getEvenements();
  }

  initCurrent() {
    if (this.currentActu) {
      this.initGalleryOne();
      this.initGalleryTwo();
    }
  }

  transform(v: string) : SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }

  initGalleryOne() {
    this.galleryOne = this.currentActu.galerie;
    this.galleryTmp = this.currentActu.galerie;
    if (this.galleryOne == null) {
      return;
    }
    let counter = this.galleryOne.length;
    let indice = 0;
    if (this.galleryOne.length > 0) {
      // while(this.galleryOne.length < 6) {
      //   if (indice > counter) {
      //     indice = 0;
      //   }
      //   this.galleryOne.push(this.galleryOne[indice]);
      //   indice++;
      // }
      this.animateGalleryOne();
    }
  }

  initGalleryTwo() {
    this.galleryTmp = this.currentActu.galerie;
    this.galleryTwo = null;
    this.galleryTwo = [];
    if (this.galleryTmp == null) {
      return;
    }
    this.galleryTmp.forEach(element => {
      if (element) {
        this.galleryTwo.push(element);
      }
    });
  }

  initPagination() {
    let nb: number = this.listActu.length;
    let nbTmp = nb / 4;
    nb = Math.ceil(nbTmp);
    for (let index = 0; index < nb; index++) {
      this.nbPagination.push(index+1);
    }
  }

  page(page: number) {
    this.minPagination = (4 * page) - 4;
    this.maxPagination = this.minPagination + 4;
    if (this.minPagination > this.listActu.length) {
      return false;
    }
    this.currentPagination = page;
    this.four_actu = this.listActu.slice(this.minPagination, this.maxPagination);
    this.slideToActu();
  }

  showActu(titre, date, posteur) {
    // console.log("show");
    let tempActu: Actu = null;
    this.listActu.forEach(element => {
      // console.log(element.titre + " et " + titre);
      // console.log(element.date_mise_jour + " et " + date);
      // console.log(element.posteur + " et " + posteur);
      if (element.titre == titre && element.date_mise_jour == date && element.posteur == posteur) {
        // console.log("ito");
        tempActu = element;
      }
    });
    this.currentActu = tempActu;

    this.stopAnimation();
    if (this.currentActu) {
      if (this.currentActu !== undefined) {
        this.galleryOne = this.currentActu.galerie;
        this.galleryTmp = this.currentActu.galerie;
        this.initGalleryOne();
        this.initGalleryTwo();
      }
    } else {
      this.currentActu = this.listActu[this.listActu.length - 1];
      if (this.currentActu !== undefined) {
        this.galleryOne = this.currentActu.galerie;
        this.galleryTmp = this.currentActu.galerie;
        this.initGalleryOne();
        this.initGalleryTwo();
      }
    }
    this.slideToToppy();
  }

  slideToActu() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#top-row").offset().top
    }, 200);
  }

  slideToToppy() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#the-toppyy").offset().top
    }, 200);
  }

  animateGalleryOne() {
    let nbItem = this.galleryOne.length;
    let tabMax: number[] = [];
    this.timerInterval = setInterval(
      () => {
        tabMax = [];
        for (let index = 0; index < nbItem; index++) {
          tabMax.push(index);
        }
        // console.log(tabMax);
        for (let index = 0; index < nbItem; index++) {
          let max = tabMax.length;
          let random =  Math.floor(Math.random() * (max + 1));
          let rand = random;
            if (!tabMax.includes(random)) {
              while(random == rand) {
                random =  Math.floor(Math.random() * (max + 1));
              }
            }
            if (this.galleryOne == null || this.galleryTwo == null) {
              continue;
            }
          this.galleryOne[index] = this.galleryTwo[random];
          let ind = tabMax.indexOf(random);
          tabMax.splice(ind, 1);
        }
      }, 2000
    );
  }

  stopAnimation() {
    clearInterval(this.timerInterval);
  }

  changeDate(data, isUpdate: boolean) {
    let annee = data.substring(0,4);
    let mois = data.substring(5,7);
    let jour = data.substring(8,10);
    let heure =  data.substring(11,16);
    // console.log(jour +  " " + this.voirMois(mois) + " " + annee+ " à " + heure);
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

  // async getCurrent() {
  //   if (this.isNews) {
  //     await this.newsService.getTopNouvelle().subscribe(
  //       (data: any) => {
  //         let list: any[] = data.data;
  //         let current = list[0];
  //         console.log("Current");
  //         console.log(current);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     )
  //   } else {
  //     await this.newsService.getTopActualite().subscribe(
  //       (data: any) => {
  //         let list: any[] = data.data;
  //         let current = list[0];
  //         console.log("Current");
  //         console.log(current);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     )
  //   }
  // }

  async getEvenements() {
    this.loadSrv.load(true);
    await this.newsService.getEvenements().subscribe(
      (data :any) => {
        // console.log(data);
        let list: any[] = data.data;
        list.forEach(element => {
          // console.log(element);
          let isO : boolean = true;
          let isN : boolean = false;
          element.date_creation = this.changeDate(element.date_creation, isO);
          element.date_mise_jour = this.changeDate(element.date_mise_jour, isN);
          if (element.image == null) {
              element.image = this.defaultImg;
          }
          if (element.galerie == null) {
            element.galerie = [];
            for (let index = 0; index < 3; index++) {
              let ind = index + 1;
              let url = "./../../../../../assets/images/course/" + ind +".jpg"
              element.galerie.push(url);
            }
          }
          if (this.isNews && element.type == "nouvelle") {
            this.listActu.push(element);
          } else if (!this.isNews && element.type == "actualite") {
            this.listActu.push(element);
          }
        });
        // this.listActu = list;
        this.currentActu = this.listActu[0];
        this.four_actu =  this.listActu.slice(0 , 4);
        this.last_actus = this.listActu.slice(this.minPagination, this.maxPagination);
        console.log(this.listActu);
        // console.log("Lenght " + this.listActu.length);
        this.initCurrent();
        this.initPagination();
        if (this.currentTitre && this.currentDate && this.currentPosteur) {
          console.log("mis tonga");
          this.showActu(this.currentTitre, this.currentDate, this.currentPosteur);
        }
        this.loadSrv.load(false);
        if (this.listActu.length == 0) {
          this.noNews = true;
        } else {
          this.noNews = false;
        }
        return this.listActu;
      }, (err) => {
        this.loadSrv.load(false);
        this.noNews = true;
        console.log(err);
        this._snackBar.open(`Serveur inacessible`, "", {
          duration: 1500,
          horizontalPosition: "right",
          verticalPosition: "bottom",
          panelClass: ["error_snackbar"]
        });
      }
    );
  }

}
