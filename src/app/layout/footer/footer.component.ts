import { ConfigurationsService } from './../../services/configurations/configurations.service';
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
  constructor(private router : Router, public headerService: HeaderService, private confService: ConfigurationsService) { }

  ngOnInit() {
    this.menu = this.headerService.menu;
    this.getConf();
  }

  home() {
    this.router.navigateByUrl("/");
  }

  getConf() {
    this.confService.getConfigurations().subscribe(
      (data) => {
        console.log(data);
        return data;
      }, err => {
        console.log(err);
      }
    )
  }

}
