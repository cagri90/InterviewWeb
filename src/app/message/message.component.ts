import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { User } from '../models/user';
import { SessionService } from '../services/sessionService';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private readonly sessionService:SessionService) {
    this.user=this.sessionService.getUser();
   }
  @Input() message:Message;
  @Input() total:any
  user:User;
  ngOnInit(): void {
  }

}
