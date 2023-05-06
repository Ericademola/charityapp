import { Component, OnInit, ViewChild } from '@angular/core';
import { Chatlog } from './../../interfaces/chat-log'
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat-log',
  templateUrl: './chat-log.page.html',
  styleUrls: ['./chat-log.page.scss'],
})
export class ChatLogPage implements OnInit {

  //@ViewChild(IonContent) content:any = IonContent

  chats: Chatlog[] = []

  sent: string | null= '';

  constructor() { }

  ngOnInit() {
  }

  public chatLog(chat:any) {
    let message = chat.value.sent
    if (message === '') {return};
    let sending = chat.value;
    
    this.chats.push(sending);

    this.sent = ''

    setTimeout(() => {

    let autoResponse = {received: 'Sorry, we are not available at the moment. But, we appreciate your donation'};
    let reply = Object.assign(autoResponse)
    this.chats.push(reply);
    console.log(this.chats);

    }, 1000);

    //this.content.scrollToBottom()
  }

}
