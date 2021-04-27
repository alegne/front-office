import { HeaderService, Menu } from './../../../services/Header/header.service';
import { LoginComponent } from './../../../components/auth/login/login.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as $ from 'jquery';


@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss', './tmp.scss']
})
export class TopHeaderComponent implements OnInit {
  menu : Menu[];
  langues = [
    {
      libelle  : "Fr",
      flag : "./../../../../assets/images/icones/france.png"
    },
    {
      libelle  : "Ang",
      flag : "./../../../../assets/images/icones/royaume-uni.png"
    }
  ]

  logo = "./../../../../assets/images/ENI/logo-ENl.png";
  logoUf = "./../../../../assets/images/ENI/uf-light.png";
  profile = "./../../../../assets/images/icones/profile.png";

  constructor(private router : Router, private dialog: MatDialog, private headerService: HeaderService) { }

  ngOnInit() {
    this.getMenu();
    this.initJs();
  }

  initJs() {
    $("#best-menu-mobile-main").on('click', function() {
      $("#external-content-main").toggle();
      setTimeout(() => {
        $("#mobile-main").toggleClass('navigation');
      }, 10);
    });
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getMenu() {
    this.menu = this.headerService.menu;
  }

  home() {
    this.router.navigateByUrl("/");
  }

}
