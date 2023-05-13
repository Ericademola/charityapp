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

  showPassword() {
    const eye = document.getElementById('eye');
    const eyeLogo = document.getElementById('eye_logo');

    if ( eye.getAttribute('type') === 'password' ) {
      eye.removeAttribute('type');
      eye.setAttribute('type', 'text');
      eyeLogo.removeAttribute('name');
      eyeLogo.setAttribute('name', "eye-outline");
    } else {
      eye.removeAttribute('type');
      eye.setAttribute('type', 'password');
      eyeLogo.removeAttribute('name');
      eyeLogo.setAttribute('name', "eye-off-outline");
    }
    
  }


  showConPassword() {
    const conEye = document.getElementById('conEye');
    const conEyeLogo = document.getElementById('conEye_logo');

    if ( conEye.getAttribute('type') === 'password' ) {
      conEye.removeAttribute('type');
      conEye.setAttribute('type', 'text');
      conEyeLogo.removeAttribute('name');
      conEyeLogo.setAttribute('name', "eye-outline");
    } else {
      conEye.removeAttribute('type');
      conEye.setAttribute('type', 'password');
      conEyeLogo.removeAttribute('name');
      conEyeLogo.setAttribute('name', "eye-off-outline");
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