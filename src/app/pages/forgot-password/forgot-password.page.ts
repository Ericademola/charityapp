import { Component, OnInit } from '@angular/core';
import { NavigatorService } from "../../services/navigator-service/navigator.service";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  inputType:string = "password";
  eyeLogo:string = "eye-off-outline";

  confInputType:string = "password";
  conEyeLogo:string = "eye-off-outline";

  memberUsername:boolean = true;
  passwordReset:boolean = true;
  currentMember:any;

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
  }

  showPassword() {

    if ( this.inputType === 'password' ) {
      this.inputType = 'text';
      this.eyeLogo = "eye-outline";
    } else {
      this.inputType = 'password';
      this.eyeLogo = "eye-off-outline";
    }
    
  }


  showConPassword() {

    if ( this.confInputType === 'password' ) {
      this.confInputType = 'text';
      this.conEyeLogo = "eye-outline";
    } else {
      this.confInputType = 'password';
      this.conEyeLogo = "eye-off-outline";
    }
    
  }


  handleReset(reset:any) {

    const json:any = localStorage.getItem('members');
    const members = JSON.parse(json);
    let indexOfCurrentMember:number;
    
    this.memberUsername = members.map((member:any) => member.username).includes(reset.value.username);

    if ( (reset.value.password !== reset.value.resetPassword) ) {
      this.passwordReset = false;
    }

    if (  members.map((member:any) => member.username).includes(reset.value.username) ) {
      this.currentMember = members.find((member: { username: any; }) => member.username === reset.value.username);
      indexOfCurrentMember = members.indexOf(this.currentMember);
      //console.log(indexOfCurrentMember);     
    } else {return}

    if ( (this.currentMember.username === reset.value.username) && (reset.value.password === reset.value.resetPassword) ) {
      this.currentMember.password = reset.value.password;
      members.splice(indexOfCurrentMember, 1, this.currentMember);
      let json = JSON.stringify(members);
      localStorage.setItem('members', json);
      this.navigatorService.handleNavigation('/tablinks')
    } else {return}
      
  }
}