import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  getDetail:any;

  constructor() { }

  ngOnInit() {
  }

  cardDetails(card:any) {

    this.getDetail = card.value
    console.log(this.getDetail);
    
  }

}
