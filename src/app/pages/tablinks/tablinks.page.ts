import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user-service/current-user.service';
import { setInterval } from 'timers';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {
  
  notify:number = 0;

  notifyBadge:boolean = false;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit() {

    const currentUser = this.currentUserService.getCurrentUser();
    let savedReminders = currentUser.reminders;
    //console.log(savedReminders);
    
    let savedReminderss = savedReminders.filter( (reminder: {date: any}) => new Date( Date.parse(reminder.date) ).getMinutes() <= new Date().getMinutes() );
    
    this.notify = savedReminderss.length;

    if ( this.notify >= 1 ) {
      this.notifyBadge = true;
    }

    //console.log(savedReminderss);
    

  }


  checkNotify() {
    this.notifyBadge = false;
  }
   
}
