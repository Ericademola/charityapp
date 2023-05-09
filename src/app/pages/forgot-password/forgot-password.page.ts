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
  currentMember:any;

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
  }

  handleReset(reset:any) {

    let json:any = localStorage.getItem('members');
    let members = JSON.parse(json);
    
    this.memberUsername = members.map((member:any) => member.username).includes(reset.value.username);

    if ( (reset.value.password !== reset.value.resetPassword) ) {
      this.passwordReset = false;
    }

    if (  members.map((member:any) => member.username).includes(reset.value.username) ) {
      this.currentMember = members.find((member: { username: any; }) => member.username === reset.value.username);
      let indexOfCurrentMember = members.indexOf(this.currentMember);
      //console.log(indexOfCurrentMember);
      this.currentMember.password = reset.value.password;
      members.splice(0, 1, this.currentMember);
      let json = JSON.stringify(members);
      localStorage.setItem('members', json);     
    } else {return}

    if ( (this.currentMember.username === reset.value.username) && (reset.value.password === reset.value.resetPassword) ) {
      this.navigatorService.handleNavigation('/tablinks')
    }
      
  }

}