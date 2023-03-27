import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/interfaces/history';

@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.page.html',
  styleUrls: ['./donation-history.page.scss'],
})
export class DonationHistoryPage implements OnInit {

  histories: History[] = [
    {
      name: "Hope Home",
      donation: "Cash donation",
      date: "4 June 2022",
      status: "successful",

    },
    {
      name: "Grace Home",
      donation: "Cash donation",
      date: "4 June 2022",
      status: "successful",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
