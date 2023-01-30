import { Component, OnInit } from '@angular/core';
import {ValidatorService} from "../../services/validator-service/validator.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signupForm = {
    firstName: null,
    lastName: null,
    password: null,
    email: null,
    phoneNumber: null,
    username: null,
  };

  constructor(private validatorService: ValidatorService) { }

  ngOnInit() {
  }
  public validated () {
    return this.validatorService.validateSignup(this.signupForm);
  }

  public handleSignUp() {
    console.log('Hello');
    if(this.validatorService.validateSignup(this.signupForm)) {
      // proceed
    }
  }

}
