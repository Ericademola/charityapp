import { Component, OnInit } from '@angular/core';

import {NavigatorService} from "../../services/navigator-service/navigator.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
  }

  public handleSwipe() {
    console.log('Clicked swipe button');
    this.navigatorService.handleNavigation('/user-profile')
  }

}
