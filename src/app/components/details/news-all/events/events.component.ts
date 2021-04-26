import { PopupEventComponent } from './../popup-event/popup-event.component';
import { Actuality, NewsService } from './../../../../services/news/news.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ControlContainer } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  news : Actuality[];
  three_news: Actuality[];
  last_news: Actuality[];

  nbPagination: number[] = [];
  currentPagination = 1;
  minPagination = 3;
  maxPagination = 6;
  constructor(public newsService: NewsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.news = this.newsService.news;
    this.three_news =  this.news.slice(0 , 3);
    this.last_news = this.news.slice(this.minPagination, this.maxPagination);
    this.initPagination();
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
      scrollTop: $("#contain-other-intern").offset().top
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

}
