import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  student = "./../../../assets/images/slider/Group-475.png";
  licence = "./../../../assets/images/slider/niv1.jpg";
  master = "./../../../assets/images/slider/niv2.jpg";
  doctorate = "./../../../assets/images/slider/niv3.jpg";

  constructor() { }

  ngOnInit() {
  }

}
