import { Injectable } from '@angular/core';

export interface Menu {
  titre : string,
  slug : string
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public menu : Menu[] = [
    {
      titre : "Actualités",
      slug : "evenements/actualités"
    },
    // {
    //   titre : "Nouvelles",
    //   slug : "evenements/nouvelles"
    // },
    {
      titre : "Annonces",
      slug : "annonces"
    },
    {
      titre : "Clubs",
      slug : "clubs"
    },
    {
      titre : "A Propos",
      slug : "Apropos"
    },
    {
      titre : "Contact",
      slug : "contact"
    }
  ];

  constructor() { }
}
