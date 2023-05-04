import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';


@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.page.html',
  styleUrls: ['./choose-service.page.scss'],
})
export class ChooseServicePage implements OnInit {

  pickDelivery:any = {}

  constructor(private donationsService: DonationsService) { };

  ngOnInit() {
  }

  public chooseDropoff() {

    this.pickDelivery.delivery = 'Dropoff';

    const userGift = this.donationsService.getDonate();

    const giftAdd = Object.assign(userGift, this.pickDelivery);

    this.donationsService.setDelivery(giftAdd);
    
  }

  public choosePickoff() {
    this.pickDelivery.delivery = 'Pickup';

    const userGift = this.donationsService.getDonate();

    const giftAdd = Object.assign(userGift, this.pickDelivery);

    this.donationsService.setDelivery(giftAdd);
    
  }

}
