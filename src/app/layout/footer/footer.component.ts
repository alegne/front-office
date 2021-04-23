import { HeaderService } from './../../services/Header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    './../../components/director-word/color.css',
    './../../components/director-word/responsive.css'
  ]
})
export class FooterComponent implements OnInit {
  logo = "./../../../assets/images/ENI/logo-ENl.png";
  menu = null;
  constructor(private router : Router, public headerService: HeaderService) { }

  ngOnInit() {
    this.menu = this.headerService.menu;
  }

  home() {
    this.router.navigateByUrl("/");
  }

}
