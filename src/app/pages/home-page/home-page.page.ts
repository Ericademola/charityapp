import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  time:string = ''

  name:string = ''

  constructor() { }

  ngOnInit() {
    const json:any = localStorage.getItem('members');
    const members = JSON.parse(json);

    const firstName = members.map((member:any) => member.firstName).pop();
    this.name = firstName.at(0).toUpperCase() + firstName.slice(1);

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
