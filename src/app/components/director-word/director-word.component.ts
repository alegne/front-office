import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ConfigurationsService } from 'src/app/services/configurations/configurations.service';
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
  // https://res.cloudinary.com/team-stenny/image/upload/v1619532580/directeur_itg66p.jpg
  imgDirector = "./../../../assets/images/ENI/directeur.jpeg";
  nameDirector = "";
  wordDirector = "";

  constructor(private confService: ConfigurationsService) { }

  ngOnInit() {
      document.onscroll = function() {
      if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("director-words").className = "slideLeft";
      }
    }
    this.getConf();
  }

  getConf() {
    this.confService.getConfigurations().subscribe(
      (data: any[]) => {
        console.log(data);
        data.forEach(el => {
          if (el.cle == "nom_directeur") this.nameDirector = el.valeur;
          if (el.cle == "mot_directeur") this.wordDirector = el.valeur;
          if (el.cle == "image_directeur") this.imgDirector = el.valeur;
        });
        return data;
      }, err => {
        console.log(err);
      }
    )
  }

}
