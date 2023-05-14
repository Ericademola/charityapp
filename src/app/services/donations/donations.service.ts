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

  
  constructor() { }
  //09070780040
  
  //getting home object
  setHome(obj:any) {
   this.fixHome = obj
  }

  getHome() {
    if (this.fixHome === null || this.fixHome === undefined) {return}
    return this.fixHome;
  }

  //getting home, donate object,
  setDonate(obj:any) {
    this.fixDonate = obj
  }
  
  getDonate() {  
    if (this.fixDonate === null || this.fixDonate === undefined) {return}
    return this.fixDonate;
  }

  //getting home, donate, delivery object,
  setDelivery(obj:any) {
    this.fixDelivery = obj
  }

  getDelivery() {
    if (this.fixDelivery === null || this.fixDelivery === undefined) {return}
    return this.fixDelivery;
  }

  //getting home, donate, delivery, Schedule object,
  setSchedule(obj:any) {
    this.fixSchedule = obj
  }

  getSchedule() {
    if (this.fixSchedule === null || this.fixSchedule === undefined) {return}
    return this.fixSchedule;
  }

  //getting home, donate, delivery, Schedule, gift object,
  setGift(obj:any) {
    this.fixGift = obj
  }

  getGift() {
    if (this.fixGift === null || this.fixGift === undefined) {return}
    return this.fixGift;
  }

  //getting home, donate, delivery, Schedule, gift, booking object,
  setBooking(obj:any) {
    this.fixBooking = obj
  }

  getBooking() {
    if (this.fixBooking === null || this.fixBooking === undefined) {return}
    return this.fixBooking;
  }

  //getting home, donate, delivery, Schedule, Payment object,
  setPayment(obj:any) {
    this.fixPayment = obj
  }

  getPayment() {
    if (this.fixPayment === null || this.fixPayment === undefined) {return}
    return this.fixPayment;
  }

  //getting donations,
  setDonation(obj:any) {
    this.donations = obj
  }

  getDonation() {
    if (this.donations === null || this.donations === undefined) {return}
    return this.donations;
  }

}
