import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  donations:any;
  
  fixHome:any;
  fixDonate:any;
  fixDelivery:any;
  fixSchedule:any;
  fixGift:any;
  fixBooking:any;
  fixPayment:any;

  fixCard:any;
  

  constructor() { }
  //09070780040
  
  //getting home object
  setHome(obj:any) {
   this.fixHome = obj
  }

  getHome() {
    return this.fixHome;
  }

  //getting home, donate object,
  setDonate(obj:any) {
    this.fixDonate = obj
  }
  
  getDonate() {  
    return this.fixDonate;
  }

  //getting home, donate, delivery object,
  setDelivery(obj:any) {
    this.fixDelivery = obj
  }

  getDelivery() {
    return this.fixDelivery;
  }

  //getting home, donate, delivery, Schedule object,
  setSchedule(obj:any) {
    this.fixSchedule = obj
  }

  getSchedule() {
    return this.fixSchedule;
  }

  //getting home, donate, delivery, Schedule, gift object,
  setGift(obj:any) {
    this.fixGift = obj
  }

  getGift() {
    return this.fixGift;
  }

  //getting home, donate, delivery, Schedule, gift, booking object,
  setBooking(obj:any) {
    this.fixBooking = obj
  }

  getBooking() {
    return this.fixBooking;
  }

  //getting home, donate, delivery, Schedule, Payment object,
  setPayment(obj:any) {
    this.fixPayment = obj
  }

  getPayment() {
    return this.fixPayment;
  }

  //getting home, donate, delivery, Schedule, card object,
  // setCard(obj:any) {
  //   this.fixCard = obj
  // }

  // getCard() {
  //   return this.fixCard;
  // }

}
