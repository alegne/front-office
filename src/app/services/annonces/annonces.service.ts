import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  endpoint = environment.endpoint;

  constructor(private http: HttpClient) { }

  getAnnonces() {
    return this.http.get(`${this.endpoint}/annonces`);
  }

  getTopAnnonces() {
    return this.http.get(`${this.endpoint}/annonces/principal/top`);
  }
}
