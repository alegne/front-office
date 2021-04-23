import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  endpoint = environment.endpoint;

  constructor(public http: HttpClient) { }

  async getMethod() {
    await this.http.get(`${this.endpoint}/restitution?questionnaire=maturite`).subscribe(
      (response) => {
      }, (error) => {
        console.log(error);
      }
    );
  }

  async postMethod() {
    const options: any = {
      // dimension : dimension ,
      // mesures : [
      //   {id : valueDpart , value : answer1},
      // ]
    };
    const headers: any = new HttpHeaders({'Content-Type': 'application/json'});

    await this.http.post(`${this.endpoint}/restitution`, options, headers).subscribe(
      (data) => {
      }, (error) => {
          console.log(error);
      }
      );
  }

  async deleteMethod(param) {
    await this.http.delete(`${this.endpoint}/restitution?questionnaire=${param}`).subscribe(
      (data) => {
        // console.log('Delete');
        // console.log(data);
      }, (error) => {
        console.log(error);
      }
    )
  }
}
