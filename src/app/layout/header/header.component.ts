import { Router } from '@angular/router';
import { NewsService, Actuality } from './../../services/news/news.service';
import { HeaderService } from './../../services/Header/header.service';
import { Component, OnInit } from '@angular/core';

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

  news: Actuality[] = [];

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

  constructor(public headerService: HeaderService, public newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.menu = this.headerService.menu;
    this.news = this.newsService.news.slice(0, 3);
  }

  seeNews(titre, date, posteur) {
    let str = "/evenements/nouvelles/" + titre + "/" + date + "/" + posteur+ "";
    this.router.navigateByUrl(str);
  }
}
