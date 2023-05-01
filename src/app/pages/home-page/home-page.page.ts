import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  name:string = ''

  constructor() { }

  ngOnInit() {
    let json:any = localStorage.getItem('members');
    let members = JSON.parse(json);
    console.log(members);

    let firstName = members.map((member:any) => member.firstName).pop()
    this.name = firstName.at(0).toUpperCase() + firstName.slice(1);
  }

}
