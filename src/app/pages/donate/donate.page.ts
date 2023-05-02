import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  pickDonate:any = {}

  constructor(private donationsService: DonationsService) { };

  ngOnInit(){
    
  }

  chooseClothes() {

    this.pickDonate.donate = 'Clothes';
    console.log(this.pickDonate);

    //this.donationsService.setDonations(this.donate);

    console.log(this.donationsService);
    
  }

  chooseCash() {

    this.pickDonate.donate = 'Cash';
    console.log(this.pickDonate);

    //this.donationsService.setDonations(this.donate);

    console.log(this.donationsService);

  }

}
// handleDonation(community: Community) {

//   this.getHome.home = community.home;

//   this.donationsService.setDonations(this.getHome);
//   console.log(this.getHome);
  
//   console.log(this.donationsService);
  
// }