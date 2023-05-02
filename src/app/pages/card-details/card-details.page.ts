import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {


  // cardHolderName: string;

  // cardNumber: number;

  // expirationDate: any;

  // cvv: number;

  constructor() { }

  ngOnInit() {
  }

  cardDetails(card:any) {
    console.log(card.value);
    
  }

}
