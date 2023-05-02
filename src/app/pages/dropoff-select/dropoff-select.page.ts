import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropoff-select',
  templateUrl: './dropoff-select.page.html',
  styleUrls: ['./dropoff-select.page.scss'],
})
export class DropoffSelectPage implements OnInit {

  categories = [
    {name: 'Children', value: false},
    {name: 'Shirts', value: false},
    {name: 'Gowns', value: false},
    {name: 'Trousers', value: false}
  ]

  gift:any = {}

  constructor() { }

  ngOnInit() {
  }


  handleSelected(selected:any) {

    let getClothes: string[] = [];

    if ( selected.value.Children === true ) {
      let select: string = this.categories[0].name;
      getClothes.push(select);
    }

    if ( selected.value.Shirts === true ) {
      let select: string = this.categories[1].name;
      getClothes.push(select);
    }

    if ( selected.value.Gowns === true ) {
      let select: string = this.categories[2].name;
      getClothes.push(select);
    }

    if ( selected.value.Trousers === true ) {
      let select: string = this.categories[3].name;
      getClothes.push(select);
    }
    
    this.gift.clothes = getClothes;    
    this.gift.photo = selected.value.uploadPhoto;
    this.gift.usuage = selected.value.useKind;        
    
  }

}
