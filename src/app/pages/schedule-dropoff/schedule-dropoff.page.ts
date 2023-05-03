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

  handleDropoff(date:any) {
    this.pickedDate = date.value;

    this.donationsService.setSchedule(this.pickedDate);
        
    console.log(this.donationsService);

  }

}
