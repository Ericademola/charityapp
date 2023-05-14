import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';


@Component({
  selector: 'app-donation-status',
  templateUrl: './donation-status.page.html',
  styleUrls: ['./donation-status.page.scss'],
})
export class DonationStatusPage implements OnInit {

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

      if ( userGift === undefined || null ) {return}
      else {
        const cashAdd = Object.assign(userGift, this.status);
        //console.log(cashAdd);        
        this.donationsService.setDonation(cashAdd);
      }

      if ( userCash === undefined || null ) {return}
      else {
        const giftAdd = Object.assign(userCash, this.status);
        //console.log(giftAdd);
        this.donationsService.setDonation(giftAdd);
      }

    }, 2000);
    
  }

}