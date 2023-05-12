import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './../../services/current-user-service/current-user.service';
import { NavigatorService } from './../../services/navigator-service/navigator.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  currentMember:any;

  constructor(
    private navCtrl: NavController,
    private currentUserService: CurrentUserService,
    private navigatorService: NavigatorService
  ) { };

  ngOnInit() {
  }

  navBack() {
    this.navCtrl.back();
  }

  cardDetails(card:any) {

    const currentUser = this.currentUserService.getCurrentUser();
    currentUser.cardDetail = card.value;

    const getJson = localStorage.getItem('members');
    const members = JSON.parse(getJson);
    let indexOfCurrentMember:number;


    if (  members.map((member:any) => member.username).includes(currentUser.username) ) {
      this.currentMember = members.find((member: { username: any; }) => member.username === currentUser.username);
      indexOfCurrentMember = members.indexOf(this.currentMember);
      //console.log(indexOfCurrentMember);     
      members.splice(indexOfCurrentMember, 1, currentUser);      
      const setJson = JSON.stringify(members);
      localStorage.setItem('members', setJson);
      this.navigatorService.handleNavigation('/overview-cash')
    } else {return}
    
  }

}