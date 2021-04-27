import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-director-word',
  templateUrl: './director-word.component.html',
  styleUrls: [
    './director-word.component.scss',
    './color.css',
    './responsive.css'
  ]
})
export class DirectorWordComponent implements OnInit {
  imgDirector = "./../../../assets/images/ENI/directeur.jpeg";

  constructor() { }

  ngOnInit() {
      document.onscroll = function() {
      if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        // document.getElementById("head-director-words").className = "slideLeft";
        document.getElementById("director-words").className = "slideLeft";
      }
      // else {
      //   document.getElementById("director-words").className = "";
      //   document.getElementById("head-director-words").className = "";

      // }
    }
  }

  oulala() {
    alert("alert");
  }

}
