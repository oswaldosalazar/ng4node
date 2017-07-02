import { Component, OnInit } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html'
})

export class MessageListComponent implements OnInit {
  messages: Message[] = [];
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.getMessages()
    .subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }
}