import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-overview-cash',
  templateUrl: './overview-cash.page.html',
  styleUrls: ['./overview-cash.page.scss'],
})
export class OverviewCashPage implements OnInit {

  donationCash:any;

  constructor(private donationsService: DonationsService, private navCtrl: NavController) { };

  navBack() {
  this.navCtrl.back();
  }

  ngOnInit() {

    setTimeout(() => {
      this.donationCash = this.donationsService.getPayment();
    }, 1000);

  }

}
