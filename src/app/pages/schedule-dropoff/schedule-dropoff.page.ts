import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-schedule-dropoff',
  templateUrl: './schedule-dropoff.page.html',
  styleUrls: ['./schedule-dropoff.page.scss'],
})
export class ScheduleDropoffPage implements OnInit {

  pickedDate:string = '';

  constructor(private donationsService: DonationsService, private navCtrl: NavController) { };

  ngOnInit() {
  }

  navBack() {
    this.navCtrl.back();
  }

  handleSchedule(date:any) {
    this.pickedDate = date.value;

    const userGift = this.donationsService.getDelivery();
    const userGiftBooking = this.donationsService.getBooking();

    const checkGift = Object.values(userGift);
    if ( Object.values(userGiftBooking) === undefined || null) {return}
    const checkUserBooking = Object.values(userGiftBooking);


    if (checkGift.includes('Dropoff')) {

      const giftAdd = Object.assign(userGift, this.pickedDate);
      this.donationsService.setSchedule(giftAdd);
    }
    
    if (checkUserBooking.includes('Pickup')) {
      const giftAddBooking = Object.assign(userGiftBooking, this.pickedDate);
      this.donationsService.setSchedule(giftAddBooking);    
    }

  }

}