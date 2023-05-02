import { Component, OnInit } from '@angular/core';
import { NavigatorService } from "../../services/navigator-service/navigator.service";

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.page.html',
  styleUrls: ['./login-in.page.scss'],
})
export class LoginInPage implements OnInit {

  memberUsername:boolean = true
  memberPassword:boolean = true

  loginForm = {
    username: '',
    password: '',  
  };

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
  }

  //get data back from storage
  public handleLogin(login:any) {
    
    let json:any = localStorage.getItem('members');
    let members = JSON.parse(json);
    console.log(members);

    this.memberUsername = members.map((member:any) => member.username).includes(login.value.username);
    this.memberPassword = members.map((member:any) => member.password).includes(login.value.password);

    console.log(this.memberUsername);
    console.log(this.memberPassword);

    if ( this.memberUsername && this.memberPassword ) {
      this.navigatorService.handleNavigation('/tablinks');
    }
    
  }

}
