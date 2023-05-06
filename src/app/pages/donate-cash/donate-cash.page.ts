import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-donate-cash',
  templateUrl: './donate-cash.page.html',
  styleUrls: ['./donate-cash.page.scss'],
})
export class DonateCashPage implements OnInit {

  cashPayment:any = {};

  constructor(private donationsService: DonationsService, private navCtrl: NavController) { };

  ngOnInit() {
  }

  navBack() {
    this.navCtrl.back();
  }

  donateCash(cashDonation:any) {
    
    this.cashPayment.payment = cashDonation.value;

    const userGift = this.donationsService.getDonate();
    
    const giftAdd = Object.assign(userGift, this.cashPayment);
    
    this.donationsService.setPayment(giftAdd);

    console.log(userGift);
    
    console.log(this.cashPayment);
    

    console.log(giftAdd);

    console.log(this.donationsService);
    
  }

}
