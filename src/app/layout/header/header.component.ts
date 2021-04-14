import { NewsService } from './../../services/news/news.service';
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

  news = [
    {
      titre : "FORMATION HYBRIDE",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy1.png"
    },
    {
      titre : "MAINTENANCE",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy2.jpg"
    },
    {
    titre : "APPEL AU CANDIDATURE",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
    saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
    slug : "#",
    image : "./../../../assets/images/slider/gasy3.jpg"
    }
  ];

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

  constructor(public headerService: HeaderService, public newsService: NewsService) { }

  ngOnInit() {
    this.menu = this.headerService.menu;
  }

}
