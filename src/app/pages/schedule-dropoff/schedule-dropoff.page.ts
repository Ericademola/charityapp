import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-dropoff',
  templateUrl: './schedule-dropoff.page.html',
  styleUrls: ['./schedule-dropoff.page.scss'],
})
export class ScheduleDropoffPage implements OnInit {

  pickedDate:string = '';

  constructor() { }

  ngOnInit() {
  }

  handleDropoff(date:any) {
    this.pickedDate = date.value
    console.log(this.pickedDate);
    return date.value

  }

}
