import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public menu = [
    {
      titre : "Formations",
      slug : "#"
    },
    {
      titre : "Nouvelles",
      slug : "#"
    },
    {
      titre : "Contacts",
      slug : "#"
    },
    {
      titre : "Blog",
      slug : "#"
    }
  ];

  constructor() { }
}
