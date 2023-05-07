import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/interfaces/history';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.page.html',
  styleUrls: ['./donation-history.page.scss'],
})
export class DonationHistoryPage implements OnInit {
  
  //histories:any = []
  
  histories: History[] = [
    {
      home: "Hope Home",
      donate: "Cash donation",
      date: "4 June 2022",
      status: "successful",

    },
    {
      home: "Grace Home",
      donate: "Cash donation",
      date: "4 June 2022",
      status: "successful",
    }
  ]

  viewBtn:boolean = false;

  constructor(private donationsService: DonationsService, private navCtrl: NavController) { };

  ngOnInit() {

    setTimeout(() => {

      const userGift = this.donationsService.getDonation();
      if ( userGift === undefined || null ) {return}
      this.histories.unshift(userGift)
      console.log(this.histories);        
    
    }, 1000);

    if ( this.histories.length >= 2 && this.histories.length > 2 ) {
      this.viewBtn = true;
    }
    
  }

  navBack() {
    this.navCtrl.back();
  }

  viewAll() {

  }

}