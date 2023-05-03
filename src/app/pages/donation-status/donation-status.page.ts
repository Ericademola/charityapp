import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';


@Component({
  selector: 'app-donation-status',
  templateUrl: './donation-status.page.html',
  styleUrls: ['./donation-status.page.scss'],
})
export class DonationStatusPage implements OnInit {

  getting:any

  constructor(private donationsService: DonationsService) { };

  ngOnInit() {
    
    this.getting = this.donationsService;

    console.log(this.getting);
    
  }

}
