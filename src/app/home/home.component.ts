import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  // Booking form data
  selected?: Date | null;
  fares: string[] = [
    'Intero',
    'Mattina',
    'Pomeriggio'
  ];
  selectedFare: string = this.fares[0];
  faresControl = new FormControl();

  images = [
    '/assets/Img_carousel_1.jpg',
    '/assets/Img_carousel_2.jpg',
    '/assets/Img_carousel_3.jpg',
    '/assets/Img_carousel_4.jpg'
  ]

  showNavigationArrows = true;
  showNavigationIndicators = true;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

    this.selected = null;
  }

  ngOnInit(): void {
  }

}
