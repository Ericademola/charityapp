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

      const statusObj:any = {}
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

      console.log(userGift);
      console.log(userCash);

      const valutes = Object.values(userGift);
      console.log(valutes);

      const values = Object.values(userCash);
      console.log(values);
      

      

      //const giftAdd = Object.assign(userGift, this.status);
      //const cashAdd = Object.assign(userCash, this.status);

  /*
      this.donationsService.setGift(giftAdd);
      this.donationsService.setPayment(cashAdd);

  
      console.log(userGift);
      console.log(userCash);
      
      
      console.log(giftAdd);
  
      console.log(this.donationsService);
      */
    }, 2000);
    
  }

}
