import { Component, OnInit } from '@angular/core';
import {ValidatorService} from "../../services/validator-service/validator.service";
//import { NavigatorService } from "../../services/navigator-service/navigator.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  
  memberInfo:any = {};

  members = new Array()

  signupForm = {
    //ImageDP: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',  
  };

  constructor(private validatorService: ValidatorService) { }

  ngOnInit() {

  }
  
  public validated () {
    console.log(this.validatorService.validateSignup(this.signupForm));
    
    return this.validatorService.validateSignup(this.signupForm);
  }

  public handleSignUp(signUp:any) {
   //if(this.validatorService.validateSignup(this.signupForm)) {
      // proceed
      //this.navigatorService.handleNavigation('/login-in');
      
      
      this.memberInfo = signUp.value
      console.log(this.memberInfo);
      this.members.push(this.memberInfo)
      console.log(this.members);
      let json = JSON.stringify(this.members);
      localStorage.setItem('members', json);
      console.log('signed up');  
      
    //}
  }
 
}
