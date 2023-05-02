import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  
  //@Input() home:string  = '';

  lo = '';

  constructor() { }

  ngOnInit() {
    
    console.log(this.lo);
    
  }

}
