import { Component, OnInit } from '@angular/core';
import { Chat } from './../../interfaces/chat';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  chats: Chat[] = [
    {
    image: "assets/member-2.png",
    name: 'Pokémon Yellow',
    message: 'Hello, this is Fiona',
    notify: 6,
    time: '09:00AM'
    },
    {
    image: "assets/member-2.png",
    name: 'Oyin Yellow',
    message: 'Hello, this is Fiona',
    notify: 1,
    time: '10:00AM'
    },
    {
    image: "assets/member-2.png",
    name: 'Oyin Momo',
    message: 'Hello, this is Fiona',
    notify: null,
    time: '10:00AM'
    }
  ]

  constructor(private navCtrl: NavController) { };

  ngOnInit() {
  }

  navBack() {
    this.navCtrl.back();
  }

}