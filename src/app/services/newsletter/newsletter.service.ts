import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  endpoint = environment.endpoint;

  constructor(private http: HttpClient) { }

  async postEmail(email: string) {
    const options: any = {
      email : email
    };
    const headers: any = new HttpHeaders({'Content-Type': 'application/json'});

    await this.http.post(`${this.endpoint}/newsletter`, options, headers).subscribe(
      (data) => {
      }, (error) => {
          console.log(error);
      }
      );
  }
}
