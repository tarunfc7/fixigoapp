import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public reviewsData = [{title:'Shaik Shaik',reviewDate: '24 Jul, 2022',
 desc:'Fast service ',comment: 'Mostly happy with service I were washing my vehicle in the showroom before and now I tried just to check it was awesome from FIXIGO time saving fast service and home delivery service, keep going FIXIGO in Delhi hope you people will start soon all over India and thanks for Introducing this service in Delhi',
 source: 'facebook',status: 'Completed'},
 {title:'Shaik Shaik',reviewDate: '24 Jul, 2022',
 desc:'Fast service ',comment: 'Mostly happy with service I were washing my vehicle in the showroom before and now I tried just to check it was awesome from FIXIGO time saving fast service and home delivery service, keep going FIXIGO in Delhi hope you people will start soon all over India and thanks for Introducing this service in Delhi',
 source: 'facebook',status: 'pending'}, 
  {title:'Shaik Shaik',reviewDate: '24 Jul, 2022',
  desc:'Fast service ',comment: 'Mostly happy with service I were washing my vehicle in the showroom before and now I tried just to check it was awesome from FIXIGO time saving fast service and home delivery service, keep going FIXIGO in Delhi hope you people will start soon all over India and thanks for Introducing this service in Delhi',
  source: 'facebook',status: 'pending'},
  {title:'Shaik Shaik',reviewDate: '24 Jul, 2022',
  desc:'Fast service ',comment: 'Mostly happy with service I were washing my vehicle in the showroom before and now I tried just to check it was awesome from FIXIGO time saving fast service and home delivery service, keep going FIXIGO in Delhi hope you people will start soon all over India and thanks for Introducing this service in Delhi',
  source: 'facebook',status: 'pending'} ];

  public reviewsResults = [...this.reviewsData];

}
