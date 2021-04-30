import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../services/news/news.service';

interface Formation {
  id: number,
  description: string,
  libelle: string,
  photo: string,
  slug: string
}

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
  txt1 = "Licence";
  txt2 = "Master";
  txt3 = "Doctorat";
  noNews: boolean = false;

  formations: Formation[] = [];

  constructor(private newsService: NewsService) { }


  ngOnInit() {
    this.getFormation();
  }

  getFormation() {
    this.newsService.getFormation().subscribe(
      (data: any) => {
        console.log(data);
        let tmp = data.data;
        this.formations = tmp;
        console.log(this.formations);
        if (this.formations.length == 0) {
          this.noNews = true;
        }
      }, (err) => {
        console.log(err);
        this.noNews = true;
      }
    )
  }
}
