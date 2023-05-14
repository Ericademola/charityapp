import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';
import { NavigatorService } from 'src/app/services/navigator-service/navigator.service';
import { CurrentUserService } from './../../services/current-user-service/current-user.service';


@Component({
  selector: 'app-donate-cash',
  templateUrl: './donate-cash.page.html',
  styleUrls: ['./donate-cash.page.scss'],
})
export class DonateCashPage implements OnInit {

  cashPayment:any = {};

  constructor(
    private donationsService: DonationsService, 
    private navCtrl: NavController,
    private navigatorService: NavigatorService,
    private currentUserService: CurrentUserService
  ) { };

  ngOnInit() {
  }

  navBack() {
    this.navCtrl.back();
  }

  donateCash(cashDonation:any) {
    
    this.cashPayment.payment = cashDonation.value;
    this.cashPayment.date = new Date();
    
    const userGift = this.donationsService.getDonate();
    const giftAdd = Object.assign(userGift, this.cashPayment);
    this.donationsService.setPayment(giftAdd);

    const currentUser = this.currentUserService.getCurrentUser();
    
    if (  Object.keys(currentUser).includes('cardDetail') ) {
      this.navigatorService.handleNavigation('/overview-cash');
    } else {
      this.navigatorService.handleNavigation('/card-details');
    }
    
  }

}