import { Component, OnInit } from '@angular/core';
import { NavigatorService } from "../../services/navigator-service/navigator.service";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  memberUsername:boolean = true;
  passwordReset:boolean = true;

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
  }

  handleReset(reset:any) {

    let json:any = localStorage.getItem('members');
    let members = JSON.parse(json);
    
    this.memberUsername = members.map((member:any) => member.username).includes(reset.value.username);

    if ( reset.value.password === reset.value.resetPassword ) {
      this.navigatorService.handleNavigation('/tablinks');
    } else {this.passwordReset = false}

    console.log(reset.value);
    
  }

}