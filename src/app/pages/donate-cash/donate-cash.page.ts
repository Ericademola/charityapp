import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-cash',
  templateUrl: './donate-cash.page.html',
  styleUrls: ['./donate-cash.page.scss'],
})
export class DonateCashPage implements OnInit {

  //cashDonation.valid

  constructor() { }

  ngOnInit() {
  }

  public donateCash(cashDonation:any) {
    console.log(cashDonation);
    return cashDonation;
  }

}
