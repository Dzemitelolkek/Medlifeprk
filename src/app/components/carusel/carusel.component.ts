import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {
   
  slides = [
    {'image': '/assets/images/Oazis.jpg'}, 
    {'image': '/assets/images/Kardiolog-terapevt.jpg'},
    {'image': '/assets/images/MedSestra.jpg'}, 
    {'image': '/assets/images/UZI_diagnostika.jpg'}, 
    {'image': '/assets/images/Onkolog-mammolog.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
