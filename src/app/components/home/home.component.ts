import { ConfigurationsService } from './../../services/configurations/configurations.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private config: ConfigurationsService) { }

  ngOnInit() {
    this.getConfiguration();
  }

  seeActu(titre, date, posteur) {
    let str = "/evenements/" + titre + "/" + date + "/" + posteur+ "";
    this.router.navigateByUrl(str);
  }

  seeNews(titre, date, posteur) {
    let str = "/evenements/nouvelles/" + titre + "/" + date + "/" + posteur+ "";
    this.router.navigateByUrl(str);
  }

  getConfiguration() {
    this.config.getConfigurations();
  }

}
