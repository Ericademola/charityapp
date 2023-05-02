import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-pickup',
  templateUrl: './schedule-pickup.page.html',
  styleUrls: ['./schedule-pickup.page.scss'],
})
export class SchedulePickupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handlePickup(pickup:any) {
    let y = pickup.value;
    console.log(y);
    //new Date().getDate
    console.log(pickup);
    
  }

}
