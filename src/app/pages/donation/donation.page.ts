import { Component, OnInit } from '@angular/core';
import { Community } from '../../interfaces/communities';
import { DonationsService } from 'src/app/services/donations/donations.service';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})

export class DonationPage implements OnInit {
  
  communities: Community[] = [

    {
      home: "Rising Star",
      image: "assets/orphanage1.png",
    },
    {
      home: "Grace Home",
      image: "assets/orphanage2.png",
    },
    {
      home: "Amazing Grace",
      image: "assets/orphanage3.png",
    },
    {
      home: "Grace Home",
      image: "assets/orphanage2.png",
    }
  ]

  getHome:any = {}

  constructor(private donationsService: DonationsService) { };

  ngOnInit(): void {};

  handleDonation(community: Community) {

    this.getHome.home = community.home;

    //this.donationsService.setDonations(this.getHome);
    console.log(this.getHome);
    
    console.log(this.donationsService);
    
  }

}
