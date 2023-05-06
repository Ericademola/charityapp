import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-overview-dropoff',
  templateUrl: './overview-dropoff.page.html',
  styleUrls: ['./overview-dropoff.page.scss'],
})
export class OverviewDropoffPage implements OnInit {

  donationClothes:any;

  constructor(private donationsService: DonationsService, private navCtrl: NavController) { };

  ngOnInit() {

    setTimeout(() => {
      this.donationClothes = this.donationsService.getGift();
    }, 1000);

  }

  navBack() {
    this.navCtrl.back();
  }

}
