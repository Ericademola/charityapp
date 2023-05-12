import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.page.html',
  styleUrls: ['./set-reminder.page.scss'],
})
export class SetReminderPage implements OnInit {

  communities = [
    {
      home: "Rising Star",
    },
    {
      home: "Grace Home",
    },
    {
      home: "Amazing Grace",
    }
  ]

  savings:any = [];
  getSaving:any = {};

  constructor(private navCtrl: NavController) { };

  ngOnInit() {
  }

  navBack() {
  this.navCtrl.back();
  }

  setReminder(reminder:any) {

    this.getSaving = reminder.value;
    this.savings.push(this.getSaving);

  }

}
