import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { User } from '../models/user';
import { DataService } from '../services/dataService';
import { URLS } from '../models/URLS';
import { SessionService } from '../services/sessionService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messages:Message[];
  message:Message;
  user:User;
  total:any={item1:0,item2:0};
  constructor(private readonly _dataService:DataService,private readonly _sessionService:SessionService) { 
    this.user=_sessionService.getUser();
  }
  ngOnInit(): void {
    this.GetTotal();
    this.GetMessages();
  }
  GetMessages(){
    this._dataService.Post(URLS.url.messagePage.getMessages,{UserId:this.user.id,Take:20,Skip:0}).subscribe((data: Message[]) => {
      this.messages=data;
    });
  }
  GetTotal(){
    this._dataService.Post(URLS.url.messagePage.totalInfo,{UserId:this.user.id}).subscribe((data: {}) => {
      this.total=data;
    });
  }
  Read(event){
    this.message=this.messages.find(x=>x.id==event);
    this._dataService.Post(URLS.url.messagePage.readMessage,{MessageId:event}).subscribe((data: {}) => {
      this.GetTotal();
    });
    
  }
 
}
