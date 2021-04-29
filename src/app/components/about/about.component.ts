import { ConfigurationsService } from './../../services/configurations/configurations.service';
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
  img1 = "./../../../assets/images/ENI/etudiants.jpg";
  img2 = "./../../../assets/images/ENI/etablissement2.jpg";
  img3 = "./../../../assets/images/ENI/news.gif";
  information: string = null;
  historique: string = null;
  specification: string = null;
  mission: string = null;

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
    document.getElementById("parentDiv").scrollTop -= 200;
  }

  constructor(private confService: ConfigurationsService) { }

  ngOnInit() {
    this.getConf();
  }

  getConf() {
    this.confService.getConfigurations().subscribe(
      (data: any[]) => {
        // console.log(data);
        data.forEach(el => {
          if (el.cle == "apropos_informations") this.information = el.valeur;
          if (el.cle == "apropos_historiques") this.historique = el.valeur;
          if (el.cle == "apropos_specifications") this.specification = el.valeur;
          if (el.cle == "apropos_missions") this.mission = el.valeur;
        });
        return data;
      }, err => {
        console.log(err);
      }
    )
  }

}
