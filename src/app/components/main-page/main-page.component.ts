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
      backgroundImg: '/assets/images/bg_services.jpeg'
    },
    {
      name: 'second',
      backgroundImg: '/assets/images/bg_services.jpeg'
    },
    {
      name: 'third',
      backgroundImg: '/assets/images/bg_services.jpeg'
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
