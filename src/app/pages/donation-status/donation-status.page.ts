import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { CurrentUserService } from './../../services/current-user-service/current-user.service';


@Component({
  selector: 'app-donation-status',
  templateUrl: './donation-status.page.html',
  styleUrls: ['./donation-status.page.scss'],
})
export class DonationStatusPage implements OnInit {

  iconSuccess: boolean = false;
  iconFail: boolean = false;

  currentMember:any;

  status:any = {};

  constructor(
    private donationsService: DonationsService, 
    private currentUserService: CurrentUserService
  ) { };

  ngOnInit() {

    setTimeout(() => {

      const statusObj:any = {};

      const state = Math.trunc( Math.random() * 100 );

      if ( state >= 50 ) {
        this.iconSuccess = true;
        statusObj.status = 'Success';
        this.status = statusObj
      } else {
        this.iconFail = true;
        statusObj.status = 'Failed';
        this.status = statusObj
      };

      const userGift = this.donationsService.getGift();
      const userCash = this.donationsService.getPayment();


      if ( userGift === undefined || null ) {return}
      else {
        const cashAdd = Object.assign(userGift, this.status);
        const currentUser = this.currentUserService.getCurrentUser();
        currentUser.donations.unshift(cashAdd);

        const getJson = localStorage.getItem('members');
        const members = JSON.parse(getJson);
    
        
        if (  members.map((member:any) => member.username).includes(currentUser.username) ) {
          const currentMember = members.find((member: { username: any; }) => member.username === currentUser.username);
          let indexOfCurrentMember:number = members.indexOf(currentMember);
          members.splice(indexOfCurrentMember, 1, currentUser);      
          const setJson = JSON.stringify(members);
          localStorage.setItem('members', setJson);
        } else {return}
      }


      if ( userCash === undefined || null ) {return}
      else {
        const giftAdd = Object.assign(userCash, this.status);
        const currentUser = this.currentUserService.getCurrentUser();
        currentUser.donations.unshift(giftAdd); 

        const getJson = localStorage.getItem('members');
        const members = JSON.parse(getJson);


        if (  members.map((member:any) => member.username).includes(currentUser.username) ) {
          const currentMember = members.find((member: { username: any; }) => member.username === currentUser.username);
          let indexOfCurrentMember:number = members.indexOf(currentMember);
          members.splice(indexOfCurrentMember, 1, currentUser);      
          const setJson = JSON.stringify(members);
          localStorage.setItem('members', setJson);
        } else {return}
      }

    }, 2000);
    
  }

}