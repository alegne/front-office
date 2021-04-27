import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.scss',
    './../director-word/responsive.css'
  ]
})
export class AboutComponent implements OnInit {

  currentSection = 'information';
  img1 = "./../../../assets/images/ENI/Etablissement.jpeg";
  img2 = "./../../../assets/images/ENI/etablissement2.jpg";
  img3 = "./../../../assets/images/ENI/news.gif";

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
    document.getElementById("parentDiv").scrollTop -= 200;
  }

  constructor() { }

  ngOnInit() {
  }

}
