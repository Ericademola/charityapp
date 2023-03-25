import { Component, OnInit } from '@angular/core';
import { Donation } from '../../interfaces/donation';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})

export class DonationPage implements OnInit {

  donations: Donation[] = [
    {
      name: "Rising Star",
      image: "assets/orphanage1.png",
    },
    {
      name: "Grace Home",
      image: "assets/orphanage2.png",
    },
    {
      name: "Amazing Grace",
      image: "assets/orphanage3.png",
    },

  ]

  constructor() { }



  ngOnInit() {}

}
