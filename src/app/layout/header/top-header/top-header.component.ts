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
  menu = [
    {
      titre : "Formations",
      slug : "#"
    },
    {
      titre : "Nouvelles",
      slug : "#"
    },
    {
      titre : "Contacts",
      slug : "#"
    },
    {
      titre : "Blog",
      slug : "#"
    }
  ];

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

  constructor(private router : Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.initJs();
  }

  initJs() {
    $("#best-menu-mobile").on('click', function() {
      $("#external-content").toggle();
      setTimeout(() => {
        $("#mobile").toggleClass('navigation');
      }, 10);
    });
  }

  login() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
