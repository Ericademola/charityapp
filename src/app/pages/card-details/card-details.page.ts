import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  Card_Detail:any;

  constructor(private donationsService: DonationsService) { };

  ngOnInit() {
  }

  cardDetails(card:any) {
/*
    this.Card_Detail = card.value

    this.donationsService.setCard(this.Card_Detail);
      */  
    console.log(this.donationsService);
    
  }

}
