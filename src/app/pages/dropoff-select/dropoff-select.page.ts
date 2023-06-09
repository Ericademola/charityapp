import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/services/donations/donations.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-dropoff-select',
  templateUrl: './dropoff-select.page.html',
  styleUrls: ['./dropoff-select.page.scss'],
})
export class DropoffSelectPage implements OnInit {

  categories = [
    {name: " Children's Wears", value: false, variableName: 'childern_wears'},
    {name: ' Shirts', value: false, variableName: 'shirts'},
    {name: ' Gowns', value: false, variableName: 'gowns'},
    {name: ' Trousers', value: false, variableName: 'trousers'}
  ]

  allGift:any = {}

  constructor(private donationsService: DonationsService, private navCtrl: NavController) { };

  ngOnInit() {
  }

  navBack() {
    this.navCtrl.back();
  }

  handleSelected(selected:any) {

    const gift:any = {}

    const getClothes: string[] = [];

    if ( selected.value.childern_wears ) {
      const select: string = this.categories[0].name;
      getClothes.push(select);
    }

    if ( selected.value.shirts ) {
      const select: string = this.categories[1].name;
      getClothes.push(select);
    }

    if ( selected.value.gowns ) {
      const select: string = this.categories[2].name;
      getClothes.push(select);
    }

    if ( selected.value.trousers ) {
      const select: string = this.categories[3].name;
      getClothes.push(select);
    }
    
    gift.clothes = getClothes;    
    gift.photo = selected.value.uploadPhoto;
    gift.usuage = selected.value.useKind;  

    this.allGift.gift = gift

    const userGift = this.donationsService.getSchedule();

    const giftAdd = Object.assign(userGift, this.allGift);

    this.donationsService.setGift(giftAdd);
    
  }

}
