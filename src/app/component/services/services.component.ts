import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  diseaseTypes = [
    {
      name: "Gastrointestinal diseases",
      img: "../../../assets/images/service/Gastrointestinal diseases.jpg",
      types: ['Digestive disorder', 'Increased acidity', 'Constipation', 'Colitis', 'Hemorrhoids', 'Different types of hepatitis']
    },
    {
      name: "Gastrointestinal diseases",
      img: "../../../assets/images/service/Gastrointestinal diseases.jpg",
      types: ['Digestive disorder', 'Increased acidity', 'Constipation', 'Colitis', 'Hemorrhoids', 'Different types of hepatitis']
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 500)
  }

}
