import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CurrentUserService } from 'src/app/services/current-user-service/current-user.service';

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

  savings:any;
  //getSaving:any = {};

  constructor(private navCtrl: NavController, private currentUserService: CurrentUserService) { };

  ngOnInit() {
    
    const currentUser = this.currentUserService.getCurrentUser();
    this.savings = currentUser.reminders;
    
  }

  navBack() {
  this.navCtrl.back();
  }

  setReminder(reminder:any) {

    const getSaving = reminder.value;
    const currentUser = this.currentUserService.getCurrentUser();
    const getJson = localStorage.getItem('members');
    const members = JSON.parse(getJson);
    let indexOfCurrentMember:number;

    currentUser.reminders.push(getSaving);
    currentUser.reminders.sort((a:any, b:any) => { 
      
      let d1 = new Date(a.date);
      let d2 = new Date(b.date);
     
      if (d1.getMonth() > d2.getMonth()) {
        return 1;
      } else if (d1.getMonth() < d2.getMonth()) {
        return -1;
      } else if (d1.getDate() > d2.getDate()) {
        return 1;
      } else if (d1.getDate() < d2.getDate()) {
        return -1;
      } else { return d1.getHours() - d2.getHours()} 

    })  

    if (  members.map((member:any) => member.username).includes(currentUser.username) ) {
      const currentMember = members.find((member: { username: any; }) => member.username === currentUser.username);
      indexOfCurrentMember = members.indexOf(currentMember);
      //console.log(indexOfCurrentMember);     
      members.splice(indexOfCurrentMember, 1, currentUser);      
      const setJson = JSON.stringify(members);
      localStorage.setItem('members', setJson);
    } else {return}

  }

}