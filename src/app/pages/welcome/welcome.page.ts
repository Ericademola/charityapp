import {Component, OnInit} from '@angular/core';
import {NavigatorService} from "../../services/navigator-service/navigator.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.css'],
})
export class WelcomePage implements OnInit {

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
  }

  public handleSwipe() {
    //console.log('Clicked swipe button');
    this.navigatorService.handleNavigation('/get-started')
  }

}
