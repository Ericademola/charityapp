import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropoff-select',
  templateUrl: './dropoff-select.page.html',
  styleUrls: ['./dropoff-select.page.scss'],
})
export class DropoffSelectPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSelected(selected:any) {
    console.log(selected);
    
  }

}
