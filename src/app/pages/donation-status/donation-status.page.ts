import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';


@Component({
  selector: 'app-donation-status',
  templateUrl: './donation-status.page.html',
  styleUrls: ['./donation-status.page.scss'],
})
export class DonationStatusPage implements OnInit {

  donations:any = []
  donation:any = {}

  iconSuccess: boolean = false;
  iconFail: boolean = false;

  status:any = {};

  constructor(private donationsService: DonationsService) { };

  ngOnInit() {

    setTimeout(() => {

      const statusObj:any = {};

      const state = Math.trunc( Math.random() * 100 );
      
      if ( state >= 50 ) {
        this.iconSuccess = true;
        statusObj.status = 'Success';
        this.status = statusObj
      } else {
        this.iconFail = true;
        statusObj.status = 'Failed';
        this.status = statusObj
      };

      const userGift = this.donationsService.getGift();
      const userCash = this.donationsService.getPayment();

      const checkCash = Object.values(userCash);
      console.log(checkCash);
      

      console.log(userGift);
      console.log(userCash);

      const checkGift = Object.values(userGift);

      if (checkGift.includes('Clothes')) {

        const giftAdd = Object.assign(userGift, this.status);
        this.donationsService.setDonations(giftAdd);
        
        console.log(giftAdd);
    
        console.log(this.donationsService);

      } 

      if (checkCash.includes('Cash')) {

        const cashAdd = Object.assign(userCash, this.status);
        this.donationsService.setDonations(cashAdd);

        console.log(cashAdd);        
            
        console.log(this.donationsService);
      } 

    }, 2000);
    
  }


  saveDonation() {
    const donation = this.donationsService.getDonations;
    
    this.donations.push(this.donation);
    console.log(this.donation);
    console.log(this.donations);
    
    
    console.log('hg');
    
  }

}
