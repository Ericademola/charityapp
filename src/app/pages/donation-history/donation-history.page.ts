import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/interfaces/history';
import { CurrentUserService } from './../../services/current-user-service/current-user.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.page.html',
  styleUrls: ['./donation-history.page.scss'],
})
export class DonationHistoryPage implements OnInit {
  
  histories:History[] = []
  
  // histories: History[] = [
  //   {
  //     home: "Hope Home",
  //     donate: "Cash donation",
  //     date: "5 June 2022",
  //     status: "successful",
  //   },
  //   {
  //     home: "Grace Home",
  //     donate: "Cash donation",
  //     date: "24 June 2022",
  //     status: "successful",
  //   },
  //   {
  //     home: "waw Home",
  //     donate: "clothes donation",
  //     date: "19 June 2022",
  //     status: "successful",
  //   },
  //   {
  //     home: "Angel Home",
  //     donate: "Clothes donation",
  //     date: "30 June 2022",
  //     status: "successful",
  //   }
  // ]

  partlyHistories:any = [];

  viewPartly:boolean = true;
  viewEverything:boolean = false;

  viewBtn:boolean = true;

  constructor(
    private navCtrl: NavController,
    private currentUserService: CurrentUserService
  ) { };

  ngOnInit() {

    setTimeout(() => {

      const currentUser = this.currentUserService.getCurrentUser();

      this.histories = currentUser.donations;

      this.partlyHistories = this.histories.slice(0, 2);
      console.log(this.histories);
      console.log(this.partlyHistories);
      if ( this.histories.length > 2 ) {
        this.viewBtn = true;
      }
      
      console.log('hi');     
    
    }, 1000);

  }
  
  navBack() {
    this.navCtrl.back();
  }

  viewAll() {
    this.viewPartly = false;
    this.viewEverything = true;
    this.viewBtn = false;
  }

}