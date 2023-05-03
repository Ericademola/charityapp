import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';


@Component({
  selector: 'app-book-pickup',
  templateUrl: './book-pickup.page.html',
  styleUrls: ['./book-pickup.page.scss'],
})
export class BookPickupPage implements OnInit {

  booking:any;

  constructor(private donationsService: DonationsService) { };

  ngOnInit() {
  }

  handleBooking(booking:any) {

    this.booking = booking.value
    console.log(this.booking);

    this.donationsService.setBooking(this.booking);
        
    console.log(this.donationsService);
    
  }

}
