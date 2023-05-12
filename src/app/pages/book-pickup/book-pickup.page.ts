import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-book-pickup',
  templateUrl: './book-pickup.page.html',
  styleUrls: ['./book-pickup.page.scss'],
})
export class BookPickupPage implements OnInit {

  booking:any;

  constructor(private donationsService: DonationsService, private navCtrl: NavController) { };

  ngOnInit() {
  }

  navBack() {
    this.navCtrl.back();
  }

  handleBooking(booking:any) {

    this.booking = booking.value

    const userGift = this.donationsService.getDelivery();

    const giftAdd = Object.assign(userGift, this.booking);

    this.donationsService.setBooking(giftAdd);
    
  }

}
