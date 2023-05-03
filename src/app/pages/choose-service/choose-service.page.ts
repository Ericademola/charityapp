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

    this.donationsService.setDelivery(this.pickDelivery);

    console.log(this.donationsService);
    
  }

  public choosePickoff() {
    this.pickDelivery.delivery = 'Pickup';

    this.donationsService.setDelivery(this.pickDelivery);

    console.log(this.donationsService);
    
  }

}
