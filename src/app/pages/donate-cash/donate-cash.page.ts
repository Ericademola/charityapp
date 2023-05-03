import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';

@Component({
  selector: 'app-donate-cash',
  templateUrl: './donate-cash.page.html',
  styleUrls: ['./donate-cash.page.scss'],
})
export class DonateCashPage implements OnInit {

  cashPayment:any = {};

  constructor(private donationsService: DonationsService) { };

  ngOnInit() {
  }

  public donateCash(cashDonation:any) {
    
    this.cashPayment = cashDonation.value

    this.donationsService.setPayment(this.cashPayment);
        
    console.log(this.donationsService);

  }

}
