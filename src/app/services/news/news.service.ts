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

  public news : Actuality[] = [
    {
      titre : "FORMATION HYBRIDE",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy1.png",
      galerie : [""],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
      titre : "MAINTENANCE",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy2.jpg",
      galerie : [""],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
    titre : "APPEL AU CANDIDATURE",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
    saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
    slug : "#",
    image : "./../../../assets/images/slider/gasy3.jpg",
    galerie : [""],
    date: "28 Avril 2015",
    posteur: "Momin Boss"
    },
    {
      titre : "FORMATION HYBRIDE",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci.",
      slug : "#",
      image : "./../../../assets/images/slider/Trudel-Images-couverture-02-1024x576.jpg",
      galerie : [""],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
      titre : "MAINTENANCE",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque.",
      slug : "#",
      image : "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
      galerie : [""],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
    titre : "APPEL AU CANDIDATURE",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel.",
    slug : "#",
    image : "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
    galerie : [""],
    date: "28 Avril 2015",
    posteur: "Momin Boss"
    },
    {
      titre : "MAINTENANCE PRIMO",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque.",
      slug : "#",
      image : "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
      galerie : [""],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
    titre : "LETTRE ADIEU",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel.",
    slug : "#",
    image : "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
    galerie : [""],
    date: "28 Avril 2015",
    posteur: "Momin Boss"
    },
    {
      titre : "FORMATION HYBRIDE",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy1.png",
      galerie : [""],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
      titre : "MAINTENANCE",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
      Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
      saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
      slug : "#",
      image : "./../../../assets/images/slider/gasy2.jpg",
      galerie : [""],
      date: "28 Avril 2015",
      posteur: "Momin Boss"
    },
    {
    titre : "APPEL AU CANDIDATURE",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
    Qui perspiciatis, eveniet sequi labore vel itaque adipisci odio necessitatibus voluptatibus \
    saepe, impedit enim unde velit amet rem, suscipit corrupti vero ad.",
    slug : "#",
    image : "./../../../assets/images/slider/gasy3.jpg",
    galerie : [""],
    date: "28 Avril 2015",
    posteur: "Momin Boss"
    }
  ];

  constructor() { }
}
