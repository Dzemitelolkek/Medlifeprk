import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {
   
  slides = [
    {'image': '/assets/images/Oazis.jpg'}, 
    {'image': '/assets/images/Oazis.jpg'},
    {'image': '/assets/images/Oazis.jpg'}, 
    {'image': '/assets/images/Oazis.jpg'}, 
    {'image': '/assets/images/Oazis.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
