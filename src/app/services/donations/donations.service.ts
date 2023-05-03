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
  fixCard:any;
  fixBooking:any;
  fixPayment:any;


  constructor() { }


  //getting home object
  setHome(obj:any) {
    this.fixHome = Object.assign({}, obj)
  }

  getHome(obj:any) {
    return this.fixHome;
  }

  //getting donate object
  setDonate(obj:any) {
    this.fixDonate = Object.assign({}, obj)
  }

  getDonate() {
    //return this.fixDonate;
  }

  //getting delivery object
  setDelivery(obj:any) {
    this.fixDelivery = Object.assign({}, obj)
  }

  getDelivery() {
    //return this.fixDelivery;
  }

  //getting schedule
  setSchedule(obj:any) {
    this.fixSchedule = Object.assign({}, obj)
  }

  getSchedule() {
    //return this.fixSchedule;
  }


  //getting gift
  setGift(obj:any) {
    this.fixGift = Object.assign({}, obj)
  }

  getGift() {
    //return this.fixGift;
  }

  //getting card
  setCard(obj:any) {
    this.fixCard = Object.assign({}, obj)
  }

  getCard() {
    //return this.fixCard;
  }

  //getting book
  setBooking(obj:any) {
    this.fixBooking = Object.assign({}, obj)
  }

  getBooking() {
    //return this.fixBook;
  }

  //getting payment
  setPayment(obj:any) {
    this.fixPayment = Object.assign({}, obj)
  }
  
  getPayment() {
    //return this.fixPayment;
  }


  //getting donations
 // setDonation(obj:any) {
   // this.donations = Object.assign(obj
      // this.fixHome, 
      // this.fixDonate, 
      // this.fixDelivery, 
      // this.fixSchedule, 
      // this.fixGift, 
      // this.fixCard, 
      // this.fixBooking, 
      // this.fixPayment
   // )
 // }

  //getDonation() {
    
    //return this.donations;
  //}

}
