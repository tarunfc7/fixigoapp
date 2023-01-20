import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public notifyData = [{title:'Moonsoon offer ',desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
  notifyDate: '15 min ago',status: 'Completed'},
  {title:'Moonsoon offer',desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
  notifyDate: '15 min ago',status: 'pending'}, 
   {title:'Moonsoon offer ',desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
   notifyDate: '15 min ago',status: 'pending'},
   {title:'Moonsoon offer ',desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
   notifyDate: '15 min ago',status: 'pending'} ];

 public notifyResults = [...this.notifyData];
}
