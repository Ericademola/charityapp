import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  currentUser:any;

  constructor() { }

  setCurrentUser(obj:any) {
    this.currentUser = obj
  }
 
  getCurrentUser() {
    if (this.currentUser === null || this.currentUser === undefined) {return}
    return this.currentUser;
  }

}
