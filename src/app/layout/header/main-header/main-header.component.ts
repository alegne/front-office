import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // document.getElementById("no-slide").style.display = "none";
        document.getElementById("with-slide").style.display = "block";
        document.getElementById("no-slide").className = "fadeUpHeader";
        document.getElementById("with-slide").className = "slideUpHeader";
      } else {
        // document.getElementById("no-slide").style.display = "block";
        document.getElementById("with-slide").style.display = "none";
        document.getElementById("no-slide").className = "slideUpHeader";
        document.getElementById("with-slide").className = "fadeUpHeader";
      }
    }
  }

}
