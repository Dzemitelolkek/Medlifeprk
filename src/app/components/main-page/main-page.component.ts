import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  
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
      backgroundImg: '/assets/images/Onkolog-mammolog.jpg'
    },
    {
      name: 'fourth',
      backgroundImg: '/assets/images/bg_services.jpeg'
    },
    {
      name: 'fifth',
      backgroundImg: '/assets/images/bg_services.jpeg'
    },
    {
      name: 'sixth',
      backgroundImg: '/assets/images/bg_services.jpeg'
    },
  ];

  constructor() {}
}
