import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-pickup',
  templateUrl: './book-pickup.page.html',
  styleUrls: ['./book-pickup.page.scss'],
})
export class BookPickupPage implements OnInit {

  getBooking:any;

  constructor() { }

  ngOnInit() {
  }

  handleBooking(booking:any) {

    this.getBooking = booking.value
    console.log(this.getBooking);
    
  }

}
