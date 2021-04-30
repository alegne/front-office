import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Club {
  id: number,
  libelle: string,
  description: string,
  image: string
}

export interface Article {
  id: number,
  slug: string,
  titre: string,
  posteur: string,
  club: string,
  description: string,
  image: string,
  date_creation: string,
  date_mise_jour: string,
  galerie: string[]
}

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  endpoint = environment.endpoint;

  constructor(private http: HttpClient) { }

  getClubs() {
    return this.http.get(`${this.endpoint}/clubs`);
  }

  getPublications() {
    return this.http.get(`${this.endpoint}/articles`);
  }
}
