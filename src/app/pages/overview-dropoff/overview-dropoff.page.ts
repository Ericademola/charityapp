import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';


@Component({
  selector: 'app-overview-dropoff',
  templateUrl: './overview-dropoff.page.html',
  styleUrls: ['./overview-dropoff.page.scss'],
})
export class OverviewDropoffPage implements OnInit {

  donation:any;
  donationCash:any;

  constructor(private donationsService: DonationsService) { };

  ngOnInit() {

    setTimeout(() => {
      this.donation = this.donationsService.getGift();
      this.donationCash = this.donationsService.getPayment();
    }, 1000);

  }

}
