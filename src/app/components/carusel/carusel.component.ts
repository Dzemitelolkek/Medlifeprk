import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CaruselComponent implements OnInit {
   
  slides = [
    {'image': '/assets/images/carusel/Oazis.jpg'}, 
    {'image': '/assets/images/carusel/Kardiolog-terapevt.jpg'},
    {'image': '/assets/images/carusel/MedSestra.jpg'}, 
    {'image': '/assets/images/carusel/UZI_diagnostika.jpg'}, 
    {'image': '/assets/images/carusel/Onkolog-mammolog.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
