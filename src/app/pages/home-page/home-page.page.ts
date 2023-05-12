import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user-service/current-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  time:string = '';

  name:string = '';

  constructor( private currentUserService: CurrentUserService ) { }

  ngOnInit() {

    const currentUser = this.currentUserService.getCurrentUser();
    const firstname = currentUser.firstname;
    this.name = firstname.at(0).toUpperCase() + firstname.slice(1);

    let getTime = new Date().getHours();
    
    if ( getTime <= 11 ) {
      this.time = 'Morning';
    } else if ( getTime <= 15 ) {
      this.time = 'Afternoon';
    } else {
      this.time = 'Evening';
    }
    
  }

}
