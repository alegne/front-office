import { Router } from '@angular/router';
import { Actuality, NewsService } from './../../services/news/news.service';
import { Component, OnInit } from '@angular/core';

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
  actuality: Actuality[] = [];
  actualities: Actuality[];
  noActu = false;
  constructor(public newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.actualities = this.newsService.actus;
    this.initLastActuality();
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

}
