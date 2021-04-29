import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface Actuality {
  titre: string,
  description: string,
  date: string,
  posteur: string,
  image: string,
  galerie : string[],
  slug: string,
}

export interface Gallery {
  path: string,
  alt: string
}

export interface Actu {
  "id": number,
  "slug": string,
  "titre": string,
  "posteur": string,
  "date_creation": string,
  "description": string,
  "image": string,
  "type": string,
  "date_mise_jour": string,
  "galerie": string[]
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  endpoint = environment.endpoint;

  descr = "There are many variations of sages of Lorem Ipsum available,\
  but the mrity have suffered alteration in some orm,\
  by injected humo ur,There are many but the mri have\
  suffered alteration in some";

  public actus : Actuality[] = [
    {
      titre: "Photoshop1 CC 2017",
      description: this.descr,
      date: "20 Mai 2015",
      posteur: "Mc. Nawaz",
      image: "./../../../assets/images/course/1.jpg",
      galerie : [
        "./../../../assets/images/latest/2.jpg",
        "./../../../assets/images/latest/3.jpg",
        "./../../../assets/images/latest/4.jpg",
        "./../../../assets/images/latest/1.jpg",
        "./../../../assets/images/course/2.jpg",
        "./../../../assets/images/latest/1.jpg"
    ],
      slug: "",
    },
    {
      titre: "Illustrator1 CC 2017",
      description: this.descr,
      date: "18 Mai 2015",
      posteur: "Subas Das",
      image: "./../../../assets/images/course/2.jpg",
      galerie : [
          "./../../../assets/images/course/2.jpg",
          "./../../../assets/images/latest/3.jpg",
          "./../../../assets/images/latest/4.jpg",
      ],
      slug: "",
    },
    {
      titre: "Indesign1 CC 2017",
      description: this.descr,
      date: "28 Avril 2015",
      posteur: "Momin Boss",
      image: "./../../../assets/images/course/3.jpg",
      galerie : [
        "./../../../assets/images/course/2.jpg",
        "./../../../assets/images/latest/3.jpg",
        "./../../../assets/images/latest/4.jpg",
    ],
      slug: "",
    },
    {
      titre: "Photoshop2 CC 2017",
      description: this.descr,
      date: "20 Mai 2015",
      posteur: "Mc. Nawaz",
      image: "./../../../assets/images/course/1.jpg",
      galerie : [
        "./../../../assets/images/course/2.jpg",
        "./../../../assets/images/latest/3.jpg",
        "./../../../assets/images/latest/4.jpg",
    ],
      slug: "",
    },
    {
      titre: "Illustrator2 CC 2017",
      description: this.descr,
      date: "18 Mai 2015",
      posteur: "Subas Das",
      image: "./../../../assets/images/course/2.jpg",
      galerie : [
        "./../../../assets/images/course/2.jpg",
        "./../../../assets/images/latest/3.jpg",
        "./../../../assets/images/latest/4.jpg",
    ],
    slug: "",
    },
    {
      titre: "Indesign2 CC 2017",
      description: this.descr,
      date: "28 Avril 2015",
      posteur: "Momin Boss",
      image: "./../../../assets/images/course/3.jpg",
      galerie : [
        "./../../../assets/images/course/2.jpg",
        "./../../../assets/images/latest/3.jpg",
        "./../../../assets/images/latest/4.jpg",
    ],
      slug: "",
    },
    {
      titre: "Photoshop3 CC 2017",
      description: this.descr,
      date: "20 Mai 2015",
      posteur: "Mc. Nawaz",
      image: "./../../../assets/images/course/1.jpg",
      galerie : [
          "./../../../assets/images/course/2.jpg",
          "./../../../assets/images/latest/3.jpg",
          "./../../../assets/images/latest/4.jpg",
      ],
      slug: "",
    },
    {
      titre: "Illustrator3 CC 2017",
      description: this.descr,
      date: "18 Mai 2015",
      posteur: "Subas Das",
      image: "./../../../assets/images/course/2.jpg",
      galerie : [
        "./../../../assets/images/course/2.jpg",
        "./../../../assets/images/latest/3.jpg",
        "./../../../assets/images/latest/4.jpg",
    ],
      slug: "",
    },
    {
      titre: "Indesign3 CC 2017",
      description: this.descr,
      date: "28 Avril 2015",
      posteur: "Momin Boss",
      image: "./../../../assets/images/course/3.jpg",
      galerie : [
        "./../../../assets/images/course/2.jpg",
        "./../../../assets/images/latest/3.jpg",
        "./../../../assets/images/latest/4.jpg",
    ],
      slug: "",
    }
  ];

  public news : Actuality[] = [
    {
      titre : "FORMATION HYBRIDE 1",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy1.png",
      galerie : [
        "./../../../assets/images/slider/gasy1.png",
      ],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
      titre : "MAINTENANCE 1",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy2.jpg",
      galerie : [
          "./../../../assets/images/slider/gasy2.jpg",
          "./../../../assets/images/slider/gasy3.jpg",
      ],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
    titre : "APPEL AU CANDIDATURE 1",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
    saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
    slug : "#",
    image : "./../../../assets/images/slider/gasy3.jpg",
    galerie : [
        "./../../../assets/images/slider/gasy3.jpg",
        "./../../../assets/images/slider/gasy2.jpg",
        "./../../../assets/images/slider/gasy1.png",
    ],
    date: "28 Avril 2015",
    posteur: "Momin Boss"
    },
    {
      titre : "FORMATION HYBRIDE 2",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci.",
      slug : "#",
      image : "./../../../assets/images/slider/Trudel-Images-couverture-02-1024x576.jpg",
      galerie : [
          "./../../../assets/images/slider/Trudel-Images-couverture-02-1024x576.jpg",
          "./../../../assets/images/slider/gasy3.jpg",
          "./../../../assets/images/slider/gasy2.jpg",
          "./../../../assets/images/slider/gasy1.png",
      ],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
      titre : "MAINTENANCE 2",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque.",
      slug : "#",
      image : "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
      galerie : [
        "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
        "./../../../assets/images/slider/Trudel-Images-couverture-02-1024x576.jpg",
        "./../../../assets/images/slider/gasy3.jpg",
        "./../../../assets/images/slider/gasy2.jpg",
        "./../../../assets/images/slider/gasy1.png",
      ],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
    titre : "APPEL AU CANDIDATURE 2",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel.",
    slug : "#",
    image : "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
    galerie : [
        "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
    ],
    date: "28 Avril 2015",
    posteur: "Momin Boss"
    },
    {
      titre : "MAINTENANCE PRIMO",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque.",
      slug : "#",
      image : "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
      galerie : [
        "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
      ],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
    titre : "LETTRE ADIEU",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel.",
    slug : "#",
    image : "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
    galerie : [
      "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
    ],
    date: "28 Avril 2015",
    posteur: "Momin Boss"
    },
    {
      titre : "FORMATION HYBRIDE 3",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy1.png",
      galerie : [
          "./../../../assets/images/slider/gasy1.png",

      ],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
      titre : "MAINTENANCE 3",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy2.jpg",
      galerie : [
          "./../../../assets/images/slider/gasy2.jpg",
      ],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
    titre : "APPEL AU CANDIDATURE 3",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
    saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
    slug : "#",
    image : "./../../../assets/images/slider/gasy3.jpg",
    galerie : [
      "./../../../assets/images/slider/gasy3.jpg",
    ],
    date: "28 Avril 2015",
    posteur: "Momin Boss"
    }
  ];

  constructor(private http: HttpClient) { }

  getEvenements() {
    return this.http.get(`${this.endpoint}/evenements`);
  }

  getTopActualite() {
    return this.http.get(`${this.endpoint}/evenements/principal/top/actualite`);
  }

  getTopNouvelle() {
    return this.http.get(`${this.endpoint}/evenements/principal/top/nouvelle`);
  }

  getFormation() {
    return this.http.get(`${this.endpoint}/formations`);
  }
}
