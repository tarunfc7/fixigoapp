import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-summary',
  templateUrl: './wallet-summary.page.html',
  styleUrls: ['./wallet-summary.page.scss'],
})
export class WalletSummaryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public walletSummaryData = [{title:'Order Number : 54545121564 ',validity: '20 Mar 2023',Price: '100 Points',status: 'validity'},
  {title:'Order Number : 54545121564 ',validity: '20 Mar 2023',Price: '100 Points',status: 'expired'}, 
   {title:'Order Number : 54545121564 ',validity: '20 Mar 2023',Price: '200 Points',status: 'expired'},
   {title:'Order Number : 54545121564 ',validity: '20 Mar 2023',Price: '100 Points',status: 'validity'} ];

 public walletSummaryResults = [...this.walletSummaryData];

}
