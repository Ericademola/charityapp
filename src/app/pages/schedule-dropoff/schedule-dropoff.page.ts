import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';


@Component({
  selector: 'app-schedule-dropoff',
  templateUrl: './schedule-dropoff.page.html',
  styleUrls: ['./schedule-dropoff.page.scss'],
})
export class ScheduleDropoffPage implements OnInit {

  pickedDate:string = '';

  constructor(private donationsService: DonationsService) { };

  ngOnInit() {
  }

  handleSchedule(date:any) {
    this.pickedDate = date.value;

    const userGift = this.donationsService.getDelivery();

    const giftAdd = Object.assign(userGift, this.pickedDate);

    this.donationsService.setSchedule(giftAdd);

  }

}
