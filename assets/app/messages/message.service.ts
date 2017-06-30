import { Message } from './message.model';

export class MessageService {
  private messages: Message[] = [];

  addMessage(message: Message){
    this.messages.push(message);
    console.log(this.messages)
  }

  getMessages(){
    return this.messages;
  }

  deleteMessage(){
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}