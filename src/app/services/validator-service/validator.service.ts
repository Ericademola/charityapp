import { Injectable } from '@angular/core';
import {ISignupObject} from "../../interfaces/sign-up";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public validateSignup(signupObject: ISignupObject) {
    return !!(signupObject.username && signupObject.firstName && signupObject.password);

  }

  public validateLogin(loginObject: {password: string ; username: string}) {

    return !!(loginObject.username && loginObject.password);
  }
}