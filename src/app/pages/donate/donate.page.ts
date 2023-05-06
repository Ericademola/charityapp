import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  pickDonate:any = {}

  constructor(private donationsService: DonationsService, private navCtrl: NavController) { };

  ngOnInit(){
    
  }

  navBack() {
    this.navCtrl.back();
  }

  chooseClothes() {

    this.pickDonate.donate = 'Clothes';

    const userGift = this.donationsService.getHome();

    const giftAdd = Object.assign(userGift, this.pickDonate);

    this.donationsService.setDonate(giftAdd);

    
  }

  chooseCash() {

    this.pickDonate.donate = 'Cash';

    const userGift = this.donationsService.getHome();

    const giftAdd = Object.assign(userGift, this.pickDonate);

    this.donationsService.setDonate(giftAdd);

  }

}
