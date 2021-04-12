import { Injectable } from '@angular/core';

export interface Actuality {
  titre: string,
  description: string,
  date: string,
  posteur: string,
  image: string,
  galerie : string[],
  slug: string,
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  descr = "There are many variations of sages of Lorem Ipsum available,\
  but the mrity have suffered alteration in some orm,\
  by injected humo ur,There are many but the mri have\
  suffered alteration in some";

  public actus : Actuality[] = [
    {
      titre: "Photoshop CC 2017",
      description: this.descr,
      date: "20 Mai 2015",
      posteur: "Mc. Nawaz",
      image: "./../../../assets/images/course/1.jpg",
      galerie : [""],
      slug: "",
    },
    {
      titre: "Illustrator CC 2017",
      description: this.descr,
      date: "18 Mai 2015",
      posteur: "Subas Das",
      image: "./../../../assets/images/course/2.jpg",
      galerie : [""],
      slug: "",
    },
    {
      titre: "Indesign CC 2017",
      description: this.descr,
      date: "28 Avril 2015",
      posteur: "Momin Boss",
      image: "./../../../assets/images/course/3.jpg",
      galerie : [""],
      slug: "",
    },
    {
      titre: "Photoshop CC 2017",
      description: this.descr,
      date: "20 Mai 2015",
      posteur: "Mc. Nawaz",
      image: "./../../../assets/images/course/1.jpg",
      galerie : [""],
      slug: "",
    },
    {
      titre: "Illustrator CC 2017",
      description: this.descr,
      date: "18 Mai 2015",
      posteur: "Subas Das",
      image: "./../../../assets/images/course/2.jpg",
      galerie : [""],
      slug: "",
    },
    {
      titre: "Indesign CC 2017",
      description: this.descr,
      date: "28 Avril 2015",
      posteur: "Momin Boss",
      image: "./../../../assets/images/course/3.jpg",
      galerie : [""],
      slug: "",
    }
  ];

  constructor() { }
}
