import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public data = ['About us', 'My account/profile', 'About services', 'How to cancel request?', 
  'What is CCC wallet?', 'How to make payment?', 'What is subscription?', 'What is onetime wash?'];
  public results = [...this.data];

  handleChange(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

}
