import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigatorService } from "../../services/navigator-service/navigator.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signUp: FormGroup = new FormGroup({
    //ImageDP: '',
    firstname: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl(null, [Validators.minLength(2)]),
    email: new FormControl(null, [Validators.email]),
    phoneNumber: new FormControl(null),
    username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),  
  });
  
  memberInfo:any = {};

  members = new Array()

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
   
  }

  handleSignUp() {
      
    this.memberInfo = this.signUp.value;
    this.memberInfo.reminders = [];
    this.memberInfo.donations = [];    
    this.members.push(this.memberInfo);
    let json = JSON.stringify(this.members);
    localStorage.setItem('members', json);
    this.navigatorService.handleNavigation('/login-in');

  }
 
}
