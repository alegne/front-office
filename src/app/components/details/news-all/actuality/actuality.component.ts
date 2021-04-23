import { Actuality, NewsService, Gallery } from './../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: [
    './actuality.component.scss',
    './../../../director-word/responsive.css'
  ]
})
export class ActualityComponent implements OnInit {
  currentActu: Actuality = null;
  listActu: Actuality[] = null;
  four_actu: Actuality[];
  last_actus: Actuality[];

  nbPagination: number[] = [];
  currentPagination = 1;
  minPagination = 1;
  maxPagination = 8;

  timerInterval: any;
  isNews = false;
  currentTitre = null;
  currentPosteur = null;
  currentDate = null;

  galleryOne : Gallery[] = [];

  galleryTwo : Gallery[] = [];

  galleryTmp : Gallery[] = [];

  constructor(private newsService: NewsService, private activatedRoute : ActivatedRoute) {
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

  ngOnInit() {
    if (this.isNews) {
      this.listActu = this.newsService.news;
    } else {
      this.listActu = this.newsService.actus;
    }
    this.initCurrent();
    this.four_actu =  this.listActu.slice(0 , 4);
    this.last_actus = this.listActu.slice(this.minPagination, this.maxPagination);
    this.initPagination();
    if (this.currentTitre && this.currentDate && this.currentPosteur) {
      this.showActu(this.currentTitre, this.currentDate, this.currentPosteur);
    }
  }

  initCurrent() {
    this.currentActu = this.listActu[0];
    this.initGalleryOne();
    this.initGalleryTwo();
  }

  initGalleryOne() {
    this.galleryOne = this.currentActu.galerie;
    this.galleryTmp = this.currentActu.galerie;
    let counter = this.galleryOne.length;
    let indice = 0;
    if (this.galleryOne.length > 0) {
      while(this.galleryOne.length < 6) {
        if (indice > counter) {
          indice = 0;
        }
        this.galleryOne.push(this.galleryOne[indice]);
        indice++;
      }
      this.animateGalleryOne();
    }
  }

  initGalleryTwo() {
    this.galleryTmp = this.currentActu.galerie;
    this.galleryTwo = null;
    this.galleryTwo = [];
    this.galleryTmp.forEach(element => {
      if (element.path) {
        let instance: Gallery = {
          path : element.path,
          alt: element.alt
        };
        this.galleryTwo.push(instance);
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
    let tempActu: Actuality = null;
    this.listActu.forEach(element => {
      if (element.titre == titre && element.date == date && element.posteur == posteur) {
        tempActu = element;
      }
    });
    this.currentActu = tempActu;
    this.stopAnimation();
    this.galleryOne = this.currentActu.galerie;
    this.galleryTmp = this.currentActu.galerie;
    // this.galleryTwo = [];
    this.initGalleryOne();
    this.initGalleryTwo();
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
        console.log(tabMax);
        for (let index = 0; index < nbItem; index++) {
          let max = tabMax.length;
          let random =  Math.floor(Math.random() * (max + 1));
          let rand = random;
            if (!tabMax.includes(random)) {
              while(random == rand) {
                random =  Math.floor(Math.random() * (max + 1));
              }
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

}
