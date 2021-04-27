import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup-event',
  templateUrl: './popup-event.component.html',
  styleUrls: ['./popup-event.component.scss']
})
export class PopupEventComponent implements OnInit {
  titre: string = null;
  description: string = null;
  date: string = null;
  posteur: string = null;
  image: string = null;
  galerie: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data : {titre :string, description :string, date : string, posteur: string, image: string, galerie: string[]})
  {

  }

  ngOnInit() {
    this.titre = this.data.titre;
    this.description = this.data.description;
    this.date = this.data.date;
    this.posteur = this.data.posteur;
    this.image = this.data.image;
    this.galerie = this.data.galerie;
  }

}
