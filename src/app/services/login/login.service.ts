import { environment } from './../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint = environment.url;

  constructor(private http: HttpClient) { }

  isEmail(mail: string) {
    var rep = mail.includes("@");
    return rep;
  }

  login(type: string, email: string, password: string) {
    let options: any = {};

    if (type == "etudiant") {
      if (this.isEmail(email)) {
        options = {
          "email"        : email,
          "password"     : password,
          "type"         : "etudiant"
        };
      } else {
        options = {
          "numero"        : email,
          "password"     : password,
          "type"         : "etudiant"
        };
      }
    } else if (type == "enseignant") {
      if (this.isEmail(email)) {
        options = {
          "email"        : email,
          "mot_de_passe"     : password,
          "type"         : "enseignant"
        };
      } else {
        options = {
          "identifiant"        : email,
          "mot_de_passe"     : password,
          "type"         : "enseignant"
        };
    }
  }

    const headers: any = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(`${this.endpoint}/login`, options, headers);
  }


}
