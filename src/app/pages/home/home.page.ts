import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    slidesPerView: 2,
    speed: 400,
    spaceBetween: 0,
  };

  trendingslideOpts = {
    slidesPerView: 2.15,
    speed: 400,
    spaceBetween: 0,
  };

  reviewslideOpts = {
    slidesPerView: 1.15,
    speed: 400,
    spaceBetween: 0,
  };

}
