import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageNumber = 0;

  messages: string[] = [];

  add(message: string) {
    this.messageNumber += 1;
    this.messages.push(`${this.messageNumber}: ${message}`);
  }

  clear() {
    this.messages = [];
    this.messageNumber = 0;
  }
  
}
