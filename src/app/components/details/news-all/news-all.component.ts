import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-all',
  templateUrl: './news-all.component.html',
  styleUrls: ['./news-all.component.scss']
})
export class NewsAllComponent implements OnInit {
  bg = "./../../../../assets/images/background/bg-news.jpg";

  constructor() { }

  ngOnInit() {
  }

}
