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
    {'image': '/assets/images/carusel/DSCF0006.JPG'},
    {'image': '/assets/images/carusel/DSCF0022.JPG'},
    {'image': '/assets/images/carusel/DSCF0026.JPG'},
    {'image': '/assets/images/carusel/DSCF0036.JPG'},
    {'image': '/assets/images/carusel/DSCF0072.JPG'},
    {'image': '/assets/images/carusel/DSCF0095.JPG'},
  ];

  markdown = 
`Медицинский центр «МЕДЛАЙФ» был основан в 2011г.
В то время весь центр располагался в 2-х кабинетах, которые были в составе другого медицинского центра (МЦ Панацея).
Прием вели всего 5 врачей специалистов: онколог-маммолог, акушер-гинеколог, эндокринолог, невролог, кардиолог.

Мы работаем со следующими страховыми компаниями (ДМС)
* ООО СК "СДС"
* ОАО "АльфаСтрахование"
* ООО СК "Согласие"
* ПАО СК "Росгосстрах"`;

  constructor() { }

  ngOnInit() {
  }

}
