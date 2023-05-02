import { Component, Input, OnInit } from '@angular/core';

import {NavigatorService} from "../../services/navigator-service/navigator.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  name:string = '';

  // @Input() home: boolean = true;
  // @Input() about: boolean = false;
  // @Input() notify: boolean = false;

  constructor(private navigatorService: NavigatorService) { }

  ngOnChange() {
    
  }

  ngOnInit() {
    let json:any = localStorage.getItem('members');
    let members = JSON.parse(json);
    console.log(members);

    let firstName = members.map((member:any) => member.firstName).pop()
    this.name = firstName.at(0).toUpperCase() + firstName.slice(1);
  }

  public handleSwipe() {
    console.log('Clicked swipe button');
    this.navigatorService.handleNavigation('/user-profile')
  }

}
