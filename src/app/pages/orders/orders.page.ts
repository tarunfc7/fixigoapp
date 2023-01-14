import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  type = 'default';

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
  }

}
