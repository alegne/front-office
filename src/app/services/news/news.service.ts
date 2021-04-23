import { Injectable } from '@angular/core';

export interface Actuality {
  titre: string,
  description: string,
  date: string,
  posteur: string,
  image: string,
  galerie : Gallery[],
  slug: string,
}

export interface Gallery {
  path: string,
  alt: string
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
      titre: "Photoshop1 CC 2017",
      description: this.descr,
      date: "20 Mai 2015",
      posteur: "Mc. Nawaz",
      image: "./../../../assets/images/course/1.jpg",
      galerie : [
      {
        path: "./../../../assets/images/latest/2.jpg",
        alt: "Hello World"
      },
      {
        path: "./../../../assets/images/latest/3.jpg",
        alt: "Hello World"
      },
      {
        path: "./../../../assets/images/latest/4.jpg",
        alt: "Hello World"
      },
      {
        path: "./../../../assets/images/latest/1.jpg",
        alt: "Hello World"
      },
      {
        path: "./../../../assets/images/course/2.jpg",
        alt: "Hello World"
      },
      {
        path: "./../../../assets/images/latest/1.jpg",
        alt: "Hello World"
      },
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
        {
          path: "./../../../assets/images/course/2.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/3.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/4.jpg",
          alt: "Hello World"
        },
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
        {
          path: "./../../../assets/images/latest/2.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/course/3.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/4.jpg",
          alt: "Hello World"
        },
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
        {
          path: "./../../../assets/images/latest/2.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/course/3.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/4.jpg",
          alt: "Hello World"
        },
      ],      slug: "",
    },
    {
      titre: "Illustrator2 CC 2017",
      description: this.descr,
      date: "18 Mai 2015",
      posteur: "Subas Das",
      image: "./../../../assets/images/course/2.jpg",
      galerie : [
        {
          path: "./../../../assets/images/course/2.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/3.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/4.jpg",
          alt: "Hello World"
        },
      ],      slug: "",
    },
    {
      titre: "Indesign2 CC 2017",
      description: this.descr,
      date: "28 Avril 2015",
      posteur: "Momin Boss",
      image: "./../../../assets/images/course/3.jpg",
      galerie : [
        {
          path: "./../../../assets/images/latest/2.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/3.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/4.jpg",
          alt: "Hello World"
        },
      ],      slug: "",
    },
    {
      titre: "Photoshop3 CC 2017",
      description: this.descr,
      date: "20 Mai 2015",
      posteur: "Mc. Nawaz",
      image: "./../../../assets/images/course/1.jpg",
      galerie : [
        {
          path: "./../../../assets/images/latest/2.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/3.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/4.jpg",
          alt: "Hello World"
        },
      ],      slug: "",
    },
    {
      titre: "Illustrator3 CC 2017",
      description: this.descr,
      date: "18 Mai 2015",
      posteur: "Subas Das",
      image: "./../../../assets/images/course/2.jpg",
      galerie : [
        {
          path: "./../../../assets/images/latest/2.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/3.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/4.jpg",
          alt: "Hello World"
        },
      ],      slug: "",
    },
    {
      titre: "Indesign3 CC 2017",
      description: this.descr,
      date: "28 Avril 2015",
      posteur: "Momin Boss",
      image: "./../../../assets/images/course/3.jpg",
      galerie : [
        {
          path: "./../../../assets/images/latest/2.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/3.jpg",
          alt: "Hello World"
        },
        {
          path: "./../../../assets/images/latest/4.jpg",
          alt: "Hello World"
        },
      ],      slug: "",
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
        {
        path: "./../../../assets/images/slider/gasy1.png",
        alt: "News"
        }
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
        {
          path: "./../../../assets/images/slider/gasy2.jpg",
          alt: "News"
        },
        {
          path: "./../../../assets/images/slider/gasy3.jpg",
          alt: "News"
        }
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
      {
        path: "./../../../assets/images/slider/gasy3.jpg",
        alt: "News"
      },
      {
        path: "./../../../assets/images/slider/gasy2.jpg",
        alt: "News"
      },
      {
      path: "./../../../assets/images/slider/gasy1.png",
      alt: "News"
      }
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
        {
          path: "./../../../assets/images/slider/Trudel-Images-couverture-02-1024x576.jpg",
          alt: "News"
        },
        {
          path: "./../../../assets/images/slider/gasy3.jpg",
          alt: "News"
        },
        {
          path: "./../../../assets/images/slider/gasy2.jpg",
          alt: "News"
        },
        {
        path: "./../../../assets/images/slider/gasy1.png",
        alt: "News"
        }
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
        {
          path: "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
          alt: "News"
        },
        {
          path: "./../../../assets/images/slider/Trudel-Images-couverture-02-1024x576.jpg",
          alt: "News"
        },
        {
          path: "./../../../assets/images/slider/gasy3.jpg",
          alt: "News"
        },
        {
          path: "./../../../assets/images/slider/gasy2.jpg",
          alt: "News"
        },
        {
        path: "./../../../assets/images/slider/gasy1.png",
        alt: "News"
        }
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
      {
        path: "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
        alt: "News"
      }
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
        {
          path: "./../../../assets/images/slider/Trudel-Images-couverture-06-1024x576.jpg",
          alt: "News"
        }
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
      {
        path: "./../../../assets/images/slider/Trudel-Images-couverture-07-1024x576.jpg",
        alt: "News"
      }
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
        {
          path: "./../../../assets/images/slider/gasy1.png",
          alt: "News"
        }
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
        {
          path: "./../../../assets/images/slider/gasy2.jpg",
          alt: "News"
        }
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
      {
        path: "./../../../assets/images/slider/gasy3.jpg",
        alt: "News"
      }
    ],
    date: "28 Avril 2015",
    posteur: "Momin Boss"
    }
  ];

  constructor() { }
}
