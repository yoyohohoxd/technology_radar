import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageNumber = 0;

  messages: string[] = [];

  add(message: string) {
    this.messageNumber += 1;
    var messageNumberString = this.messageNumber.toString();
    message = messageNumberString + " " + message;
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
    this.messageNumber = 0;
  }
  
}
