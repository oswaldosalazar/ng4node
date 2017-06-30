import { Component } from "@angular/core";
import { Message } from './message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html'
})

export class MessageListComponent {
  messages: Message[] = [
      new Message('Some message', 'Oswaldo'),
      new Message('Another useful text', 'Ozwal'),
      new Message('3rd message', 'Oz'),
  ];  
}