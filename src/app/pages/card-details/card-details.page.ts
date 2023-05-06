import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  Card_Detail:any = {};

  constructor(private donationsService: DonationsService, private navCtrl: NavController) { };

  ngOnInit() {
  }

  navBack() {
    this.navCtrl.back();
  }

  cardDetails(card:any) {

    this.Card_Detail = card.value

    console.log(this.Card_Detail);
    
    /*
    let memberInfo = signUp.value
      console.log(memberInfo);
      this.members.push(memberInfo)
      console.log(this.members);
      let json = JSON.stringify(this.members);
      localStorage.setItem('members', json);
      console.log('signed up'); 

        let go = [3, 'gff', 3]
      let jlson = JSON.stringify(go);
      localStorage.setItem('members', jlson);
      console.log('signed up'); 
*/ 
    //console.log(this.donationsService);
    
  }

}
