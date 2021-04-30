import { Club, ClubsService } from './../../services/clubs/clubs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  clubs: Club[] = [];

  defaultImg = "./../../../assets/images/background/Anon151-Boundless-Banner-hd.jpg";

  constructor(private clubService: ClubsService) { }

  ngOnInit() {
    this.getClubs();
  }

  getClubs() {
    this.clubService.getClubs().subscribe(
      (data: any) => {
        let tmp = data.data;
        this.clubs = tmp;
        console.log(this.clubs);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
