import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-popular-services',
  templateUrl: './popular-services.component.html',
  styleUrls: ['./popular-services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PopularServicesComponent {
  
  services = [
    {
      name: 'first',
      backgroundImg: '/assets/images/akusher-ginekolog.jpg'
    },
    {
      name: 'second',
      backgroundImg: '/assets/images/Dermatolog.jpg'
    },
    {
      name: 'third',
      backgroundImg: '/assets/images/bg_services.jpeg'
    },
    {
      name: 'fourth',
      backgroundImg: '/assets/images/Dermatolog.jpg'
    },
    {
      name: 'fifth',
      backgroundImg: '/assets/images/akusher-ginekolog.jpg'
    },
    {
      name: 'sixth',
      backgroundImg: '/assets/images/bg_services.jpeg'
    },
  ];

  constructor() {}
}
