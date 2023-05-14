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
    const userBooking = this.donationsService.getBooking();

    if ( userGift === undefined || null ) {return}
    else {
      const cashAdd = Object.assign(userGift, this.pickedDate);
      //console.log(cashAdd);        
      this.donationsService.setSchedule(cashAdd);
    }

    if ( userBooking === undefined || null ) {return}
    else {
      const giftAdd = Object.assign(userBooking, this.pickedDate);
      //console.log(giftAdd);
      this.donationsService.setSchedule(giftAdd);
    }

  }

}