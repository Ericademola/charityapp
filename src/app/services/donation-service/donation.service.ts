import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor() { }

  getOrphanage() {
    return [
      {
        name: "Rising Star",
        picture: "assets/orphanage1.png",
      },
      {
        name: "Grace Home",
        picture: "assets/orphanage2.png",
      },
      {
        name: "Amazing Grace",
        picture: "assets/orphanage3.png",
      },

    ]
  }

}
