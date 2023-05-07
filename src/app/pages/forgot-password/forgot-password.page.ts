import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleReset(reset:any) {

    if ( reset.value.password === reset.value.resetPassword )
    console.log(reset.value);
    
  }

}
