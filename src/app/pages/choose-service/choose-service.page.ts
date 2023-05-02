import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.page.html',
  styleUrls: ['./choose-service.page.scss'],
})
export class ChooseServicePage implements OnInit {

  pickDelivery:any = {}

  constructor() { }

  ngOnInit() {
  }

  public chooseDropoff() {

    this.pickDelivery.delivery = 'Dropoff';
    console.log(this.pickDelivery);
    
  }

  public choosePickoff() {
    this.pickDelivery.delivery = 'Pickup';
    console.log(this.pickDelivery);
    
  }

}
